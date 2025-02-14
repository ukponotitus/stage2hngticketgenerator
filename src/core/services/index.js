import { useState, useEffect } from "react"

export function useStoredData() {
  const [storedData, setStoredData] = useState([])
  const [profilePhoto, setProfilePhoto] = useState("")

  useEffect(() => {
    const data = JSON.parse(localStorage?.getItem("userformData") || "[]")
    setStoredData(data)

    const photo = localStorage.getItem("profilePhoto") || ""
    setProfilePhoto(photo)
  }, [])

  return { storedData, profilePhoto }
}
