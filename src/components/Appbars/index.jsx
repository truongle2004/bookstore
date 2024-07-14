import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Outlet } from 'react-router-dom'
import ModeToggle from '../ModeSelects'
import { Account, Cart, Logo, Search } from './Menus'

function Appbars() {
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
            height: '68px',
            display: 'flex'
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{
              py: '10px',
              position: 'relative'
            }}
          >
            <Logo />
            <Search />
            <Cart />
            <Account />
            <ModeToggle />
          </Stack>
        </AppBar>
      </Box>
      <Outlet />
    </>
  )
}
export default Appbars
