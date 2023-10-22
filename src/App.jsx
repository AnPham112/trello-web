import Button from '@mui/material/Button'
import {
  useColorScheme
} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <p>Material UI</p>
      <Button variant='text'>text</Button>
      <Button variant='contained'>contained</Button>
      <Button variant='outlined'>outlined</Button>
    </>
  )
}

export default App
