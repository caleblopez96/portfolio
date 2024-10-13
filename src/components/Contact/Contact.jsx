import { useEffect, useState } from "react"

export default function ContactMe() {
  const [name, setName] = useState('')

  useEffect(() => {
    return setName('Caleb')
  }, [])

  return(
    <h1>hello {name}</h1>
  )
}


