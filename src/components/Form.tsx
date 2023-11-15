import { useState } from "react"

const Form = () => {

  const [inputData, setInputData] = useState({
    nick:"",
    subMonths: 0,
    avatar: "",
    description: ""
  })

  const handleSubmit = () => {

  }

  const handleChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputData.nick} type="text" name="nick" placeholder="nick" />
        <input onChange={handleChange} value={inputData.subMonths} type="number" name="subMonths" placeholder="subMonths" />
        <input onChange={handleChange} value={inputData.avatar} type="text" name="avatar" placeholder="avatar" />
        <input onChange={handleChange} value={inputData.description} type="text" name="description" placeholder="description" />

        <button>Save new subscriber!</button>
      </form>
    </div>
  )
}

export default Form