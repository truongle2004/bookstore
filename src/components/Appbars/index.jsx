import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Outlet } from 'react-router-dom'
import ModeToggle from '../ModeSelects'
import { Account, Cart, Logo } from './Menus'
import useMediaQuery from '@mui/material/useMediaQuery'
import MyBook from './Menus/Mybook'

function Appbars() {
  const matches = useMediaQuery('(min-width:700px)')

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          alignItems: 'center'
        }}
      >
        <AppBar
          position="static"
          sx={{
            gap: 3,
            height: matches ? '68px' : '130px',
            display: 'flex'
          }}
        >
          <Stack
            direction={matches ? 'row' : 'column'}
            spacing={matches ? '10' : '0'}
            alignItems="center"
            justifyContent="space-evenly"
            sx={{
              py: '10px',
              position: 'relative'
            }}
          >
            {matches && <Logo />}
            {!matches ? (
              <>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={5}
                  sx={{
                    py: 2
                  }}
                >
                  <MyBook />
                  <Cart />
                  <ModeToggle />
                  <Account />
                </Stack>
              </>
            ) : (
              <>
                <MyBook />
                <Cart />
                <ModeToggle />
                <Account />
              </>
            )}
          </Stack>
        </AppBar>
      </Box>
      <Outlet />
    </>
  )
}
export default Appbars
