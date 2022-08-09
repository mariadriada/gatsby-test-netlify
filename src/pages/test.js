import React, { useEffect, useState } from "react"
import axios from "axios"

export default function Test() {
  const [message, setMessage] = useState("")

  const fetchHello = async () => {
    const response = await axios.get("/.netlify/functions/hello-world")
    setMessage(response?.data?.message)
  }

  useEffect(() => {
    fetchHello()
  }, [])

  return <h1>Meesage: {message} </h1>
}
