import { useState, useEffect } from "react"

export function useStoredData() {
  const [storedData, setStoredData] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage?.getItem("userformData") || "[]")
    setStoredData(data)
  }, [])

  return storedData
}

