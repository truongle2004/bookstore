import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleGetToken, handleRemoveToken } from '~/axios/handleUserServices'
import { isOpenedDialog } from '~/redux/features/OpenDialog'
import {
  setOpenLogin,
  setOpenRegister
} from '~/redux/features/UserServiceIndex'

function Account() {
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  const existedUser = Boolean(handleGetToken())

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenDialog = () => {
    dispatch(isOpenedDialog(true))
  }

  const handleLogout = () => {
    handleRemoveToken()
    handleClose()
    handleOpenDialog()
  }

  const handleMenuAction = (action) => {
    handleClose()
    handleOpenDialog()
    if (action === 'login') {
      dispatch(setOpenLogin())
    } else {
      dispatch(setOpenRegister())
    }
  }

  return (
    <div>
      <Stack direction="column" alignItems="center">
        {existedUser ? (
          <>
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ cursor: 'pointer' }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </>
        ) : (
          <>
            <PersonIcon
              sx={{ cursor: 'pointer' }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </>
        )}
        <Typography sx={{ fontSize: '12px' }}>Account</Typography>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        sx={{ alignItems: 'center' }}
        PaperProps={{ style: { width: 210 } }}
      >
        {!existedUser ? (
          <Box>
            <MenuItem
              onClick={() => {
                handleMenuAction('login')
              }}
            >
              Login
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuAction('register')
              }}
            >
              Register
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <MenuItem onClick={() => handleMenuAction('login')}>
              Logout
            </MenuItem>
          </Box>
        )}
      </Menu>
    </div>
  )
}

export default Account
