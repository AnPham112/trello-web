import { useState } from 'react'
import Button from '@mui/material/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Material UI</p>
      <Button variant='text'>text</Button>
      <Button variant='contained'>contained</Button>
      <Button variant='outlined'>outlined</Button>
    </>
  )
}

export default App
