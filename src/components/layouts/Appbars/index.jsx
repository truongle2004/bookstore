import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Logo from './Menus/Logo'
import Widgets from './Menus/Widgets'
import Search from './Menus/Search'
import Notification from './Menus/Notification'
import Cart from './Menus/Cart'
import Account from './Menus/Account'
import Stack from '@mui/material/Stack'
import ModeToggle from './ModeSelects'

function Appbars() {
  return (
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
          height: '68px'
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{
            paddingY: '10px',
            position: 'relative'
          }}
        >
          <Logo />
          <Widgets />
          <Search />
          <Notification />
          <Cart />
          <Account />
          <ModeToggle />
        </Stack>
      </AppBar>
    </Box>
  )
}
export default Appbars
