import React, { useState } from 'react'

import { Form, Home, Success } from './views'

const App = () => {
  const [showForm, updateShowForm] = useState(false)
  const [showSuccess, updateShowSuccess] = useState(false)
  const [lastName, setLastName] = useState('')

  return (
    <>
      <Home setLastName={setLastName} updateShowForm={updateShowForm} />
      {showForm && (
        <Form
          lastName={lastName}
          setLastName={setLastName}
          updateShowSuccess={updateShowSuccess}
          showSuccess={showSuccess}
        />
      )}
      {showSuccess && <Success />}
    </>
  )
}

export default App
