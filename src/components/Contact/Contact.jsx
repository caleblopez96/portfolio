import { useState } from "react"

const ContactMe = () => {
  const [name, setName] = useState('')

  setName(() => {
    return name
  }, [])
}

export default ContactMe