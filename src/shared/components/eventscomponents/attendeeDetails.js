import React from 'react';
import Button from '../common/button';
import { FaCloudUploadAlt, FaEnvelope } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AttendeeDetails(props) {
  const goBack = () => {
    if (props.steps > 1) {
      props.setSteps(props.steps - 1);
    }
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (!props.formData.full_name) {
      toast.error('Name is required!');
      return;
    }

    if (!props.formData.email) {
      toast.error('Email is required!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(props.formData.email)) {
      toast.error('Invalid email format!');
      return;
    }

    props.handleSubmit(e);
  };

  return (
    <div className="rounded-3xl px-4 sm:px-6 md:px-12 py-6 border border-[#0E464F] shadow-lg w-full max-w-full text-white">
      <ToastContainer />
      <div className="rounded-lg shadow flex-1 mt-6">
        <div className="flex justify-between">
          <h3 className="font-bold text-white font-jeju text-[1rem] md:text-[2rem]">Attendee Details</h3>
          <p className="text-sm text-gray-300 font-roboto text-[1rem] mt-2">Step 2/3</p>
        </div>
        <div className="relative w-full bg-[#0E464F] rounded-full h-1 mt-2">
          <div className="bg-[#24A0B5] h-1 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </div>
      <div className='border border-[#0E464F] p-4 mt-4 rounded-xl'>
        <div className="border border-[#0E464F] p-4 mt-4 rounded-xl text-start">
          <p>Upload Profile Photo</p>
          <div className='bg-[#041214] mx-auto md:px-8 w-full mt-5 xsm:p-5'>
            <div className='w-full md:max-w-[200px] bg-[#104b55] mx-auto py-11 px-8 rounded-3xl items-center'>
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center justify-center"
              >
                <FaCloudUploadAlt className="text-3xl text-[#24A0B5]" />
                <p className="mt-2 text-sm text-center">{props.file ? props.file.name : "Drag & drop or click to upload"}</p>
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={props.handleFileUpload}
              />
            </div>
          </div>
        </div>
        <hr className="h-1 w-full bg-[#07373F] border border-[#07373F] my-8" />
        <form onSubmit={validateForm} className="mt-4 space-y-4">
          <div>
            <label className="text-sm">Enter your name</label>
            <input
              type="text"
              name='full_name'
              value={props.formData?.full_name}
              onChange={props.handleChange}
              className="w-full bg-transparent border border-[#0E464F] p-2 rounded-md mt-1"
            />
          </div>

          <div>
            <label className="text-sm">Enter your email *</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder='you@gmail.com'
                value={props.formData?.email}
                name='email'
                onChange={props.handleChange}
                className="w-full bg-transparent border border-[#0E464F] py-2 pl-10 rounded-md mt-[-3]"
              />
            </div>
          </div>

          <div>
            <label className="text-sm">About the project</label>
            <textarea
              name='text'
              value={props.formData?.text}
              onChange={props.handleChange}
              placeholder='textarea'
              className="w-full bg-transparent border border-[#0E464F] p-2 rounded-md mt-1 h-20"
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6 md:rounded-full w-full pb-5">
            <Button type='button' variant="secondary" onClick={goBack}>Back</Button>
            <Button type="submit">Get My Free Ticket</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
