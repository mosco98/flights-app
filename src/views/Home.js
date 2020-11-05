import React, { useState } from 'react'

const Home = ({ setLastName, updateShowForm }) => {
  const [flightNumber, setFlightNumber] = useState('')

  async function formSubmithandler(e) {
    e.preventDefault()
    // const response = await axios.get(SERVER)

    // console.log(response)
    updateShowForm(true)
  }
  return (
    <div className="view z-10">
      <form className="flex flex-col items-center justify-center text-left" onSubmit={formSubmithandler}>
        <h1 className="font-bold my-2">Welcome to your web check-in</h1>
        <input
          type="number"
          className="my-2 px-5 py-2"
          placeholder="Flight number"
          autoFocus={true}
          onChange={(e) => setFlightNumber(e.target.value)}
          value={flightNumber}
          required={true}
        />
        <input
          type="text"
          className="my-2 px-5 py-2"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required={true}
        />
        <button className="my-4 rounded">Search flight</button>
      </form>
    </div>
  )
}

export default Home
