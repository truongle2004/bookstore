import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useColorScheme } from '@mui/material/styles'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      <Stack>
        {mode === 'light' ? (
          <DarkModeIcon sx={{ color: 'black' }} />
        ) : (
          <WbSunnyIcon sx={{ color: 'white' }} />
        )}
      </Stack>
    </Button>
  )
}

export default ModeToggle
