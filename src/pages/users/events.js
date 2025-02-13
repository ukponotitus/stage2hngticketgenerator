import AttendeeDetails from "@/shared/components/eventscomponents/attendeeDetails";
import ReadyComponent from "@/shared/components/eventscomponents/readycomponent";
import TicketSelection from "@/shared/components/eventscomponents/ticketType";
import React, { useState, useEffect } from "react";

export default function Events() {
  const [steps, setSteps] = useState(1);
  const [file, setFile] = useState(null);
  const [userformData, setUserFormData] = useState({
    full_name: "",
    email: "",
    text: "",
    numbers_of_tickets: "",
    ticketType: "",
    image: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("userformData") || "[]");
      const storedStep = localStorage.getItem("currentStep");

      if (storedData.length && storedStep) {
        setUserFormData(storedData[storedData.length - 1]);
        setSteps(parseInt(storedStep, 10));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", steps.toString());
    }
  }, [steps]);

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "upload_preset");

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        setUserFormData((prevData) => ({
          ...prevData,
          [name]: data.secure_url,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      setUserFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          localStorage.setItem("profilePhoto", reader.result.toString());
        }
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (typeof window !== "undefined") {
        const storedData = JSON.parse(localStorage.getItem("userformData") || "[]");
        storedData.push(userformData);
        localStorage.setItem("userformData", JSON.stringify(storedData));
        const savedData = JSON.parse(localStorage.getItem("userformData") || "[]");
        if (savedData.length > 0 && savedData[savedData.length - 1].email === userformData.email) {
          setSteps(3);
        } else {
          setError("Error saving data. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error saving data:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleBookAnotherTicket = () => {
    setSteps(1);
    setUserFormData({
      full_name: "",
      email: "",
      text: "",
      numbers_of_tickets: "",
      ticketType: "",
      image: "",
    });
    setFile(null);
    localStorage.removeItem("profilePhoto");
  };

  const handleCancel = () => {
    setUserFormData({
      full_name: "",
      email: "",
      text: "",
      numbers_of_tickets: "",
      ticketType: "",
      image: "",
    });
    setFile(null);
  };

  return (
    <div>
      {steps === 1 ? (
        <TicketSelection
          setSteps={setSteps}
          handleChange={handleChange}
          formData={userformData}
          handleSubmit={handleSubmit}
          setUserFormData={setUserFormData}
          handleCancel={handleCancel}
        />
      ) : steps === 2 ? (
        <AttendeeDetails
          steps={steps}
          setSteps={setSteps}
          handleChange={handleChange}
          formData={userformData}
          handleSubmit={handleSubmit}
          handleFileUpload={handleFileUpload}
          file={file}
        />
      ) : (
        <ReadyComponent onBookAnotherTicket={handleBookAnotherTicket} />
      )}
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
}
