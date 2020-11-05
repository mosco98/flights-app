import axios from 'axios'
import React, { useState } from 'react'

import Countries from '../components/Countries'

const SERVER = 'https://app.fakejson.com/q'

const Form = ({ lastName, setLastName, updateShowSuccess }) => {
  const [firstName, setFirstName] = useState('')
  const [nationality, setNationality] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [passportNumber, setPassportNumber] = useState('')
  const [residenceCountry, setResidenceCountry] = useState('')
  const [residenceCity, setResidenceCity] = useState('')
  const [residenceAddress, setResidenceAddress] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [birthPlace, setBirthPlace] = useState('')
  const [passportDateOfIssue, setPassportDateOfIssue] = useState('')
  const [passportLocationOfIssueCountry, setPassportLocationOfIssueCountry] = useState('')
  const [passportLocationOfIssueCity, setPassportLocationOfIssueCity] = useState('')
  const [passportExpiryDate, setPassportExpiryDate] = useState('')
  const [inReview, updateInReview] = useState(false)

  async function formSubmitHandler(e) {
    e.preventDefault()

    updateInReview(true)

    if (!inReview) {
      return
    }

    let payload = {
      token: 'qSrioD5BlIZ5g6tFCkCuIQ',
      data: {
        firstName,
        lastName,
        nationality,
        email,
        phoneNumber,
        passportNumber,
        residenceCountry,
        residenceCity,
        residenceAddress,
        birthDate,
        birthPlace,
        passportDateOfIssue,
        passportLocationOfIssueCountry,
        passportLocationOfIssueCity,
        passportExpiryDate
      }
    }

    const response = await axios.post(SERVER, payload)

    try {
      if (response.data) {
        updateShowSuccess(true)
      }
    } catch (error) {
      console.log(error)
    }

    console.log(response)
  }
  return (
    <div className="view z-20 overflow-y-scroll">
      <form className="flex flex-col text-left" style={{ height: '80%' }} onSubmit={formSubmitHandler}>
        <h1 className="font-bold my-2">{inReview ? 'Please review your information' : `Hi, ${lastName}`}</h1>
        <input
          required={true}
          type="text"
          className="my-2 px-5 py-2"
          placeholder="First Name"
          autoFocus={true}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          required={true}
          type="text"
          className="my-2 px-5 py-2"
          placeholder="Last Name"
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Countries setNationality={setNationality} />
        {(nationality === 'Austria' ||
          nationality === 'Belgium' ||
          nationality === 'France' ||
          nationality === 'Spain') && (
          <div className="flex flex-col">
            <p className="mt-3">Residence:</p>
            {nationality === 'Austria' && (
              <React.Fragment>
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="Country"
                  onChange={(e) => setResidenceCountry(e.target.value)}
                />
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="City"
                  onChange={(e) => setResidenceCity(e.target.value)}
                />
              </React.Fragment>
            )}
            {nationality === 'Belgium' && (
              <React.Fragment>
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="Country"
                  onChange={(e) => setResidenceCountry(e.target.value)}
                />
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="City"
                  onChange={(e) => setResidenceCity(e.target.value)}
                />
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="Address"
                  onChange={(e) => setResidenceAddress(e.target.value)}
                />
              </React.Fragment>
            )}
            {nationality === 'France' && (
              <React.Fragment>
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="Country"
                  onChange={(e) => setResidenceCountry(e.target.value)}
                />
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="City"
                  onChange={(e) => setResidenceCity(e.target.value)}
                />
              </React.Fragment>
            )}
            {nationality === 'Spain' && (
              <React.Fragment>
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="Address"
                  onChange={(e) => setResidenceAddress(e.target.value)}
                />
              </React.Fragment>
            )}
          </div>
        )}
        {(nationality === 'Belgium' || nationality === 'France') && (
          <div className="flex flex-col">
            {nationality === 'Belgium' && (
              <React.Fragment>
                <p className="mt-3">Birth date:</p>
                <input
                  required={true}
                  type="date"
                  className="my-2 px-5 py-2"
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </React.Fragment>
            )}

            {nationality === 'France' && (
              <React.Fragment>
                <p className="mt-3">Birth date:</p>
                <input
                  required={true}
                  type="date"
                  className="my-2 px-5 py-2"
                  onChange={(e) => setBirthDate(e.target.value)}
                />
                <input
                  required={true}
                  type="text"
                  className="my-2 px-5 py-2"
                  placeholder="Place of birth"
                  onChange={(e) => setBirthPlace(e.target.value)}
                />
              </React.Fragment>
            )}
          </div>
        )}
        <input
          required={true}
          type="email"
          className="my-2 px-5 py-2"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required={true}
          type="number"
          className="my-2 px-5 py-2"
          placeholder="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          required={true}
          type="number"
          className="my-2 px-5 py-2"
          placeholder="Passport number"
          onChange={(e) => setPassportNumber(e.target.value)}
        />
        {(nationality === 'Austria' || nationality === 'Greece') && (
          <div className="flex flex-col">
            {nationality === 'Austria' && (
              <React.Fragment>
                <p className="mt-3">Passport expiry date:</p>
                <input
                  required={true}
                  type="date"
                  className="my-2 px-5 py-2"
                  onChange={(e) => setPassportExpiryDate(e.target.value)}
                />
              </React.Fragment>
            )}

            {nationality === 'Greece' && (
              <React.Fragment>
                <>
                  <p className="mt-3">Passport date of issue:</p>
                  <input
                    required={true}
                    type="date"
                    className="my-2 px-5 py-2"
                    onChange={(e) => setPassportDateOfIssue(e.target.value)}
                  />
                </>
                <>
                  <p className="mt-3">Passport location of issue:</p>
                  <input
                    required={true}
                    type="text"
                    className="my-2 px-5 py-2"
                    placeholder="Country"
                    onChange={(e) => setPassportLocationOfIssueCountry(e.target.value)}
                  />
                  <input
                    required={true}
                    type="text"
                    className="my-2 px-5 py-2"
                    placeholder="City"
                    onChange={(e) => setPassportLocationOfIssueCity(e.target.value)}
                  />
                </>
                <>
                  <p className="mt-3">Passport expiry date:</p>
                  <input
                    required={true}
                    type="date"
                    className="my-2 px-5 py-2"
                    onChange={(e) => setPassportExpiryDate(e.target.value)}
                  />
                </>
              </React.Fragment>
            )}
          </div>
        )}
        <div className="flex items-center justify-start w-full my-2">
          <input required={true} type="checkbox" className="cursor-pointer" />
          <small className="text-purple-600 ml-2 italic">Accept terms and conditions</small>
        </div>
        <button className="my-4 rounded">Continue</button>
      </form>
    </div>
  )
}

export default Form
