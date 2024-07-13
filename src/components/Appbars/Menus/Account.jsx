import PersonIcon from '@mui/icons-material/Person'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useDispatch } from 'react-redux'
import { isOpenedDialog } from '~/redux/features/OpenDialog'
import { handleGetToken, handleRemoveToken } from '~/axios/handleServices'

function Account() {
  const [anchorEl, setAnchorEl] = useState(null)
  const existedUser = handleGetToken() ? true : false
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenuAndOpenDialog = () => {
    handleClose()
    handleOpenDialog()
  }

  const handleCloseDialog = () => {
    dispatch(isOpenedDialog(false))
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenDialog = () => {
    dispatch(isOpenedDialog(true))
  }

  const handleLogout = () => {
    handleRemoveToken()
    handleCloseMenuAndOpenDialog()
  }
  return (
    <div>
      <Stack direction="column" alignItems="center">
        <PersonIcon
          sx={{
            cursor: 'pointer'
          }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        />
        <Typography
          sx={{
            fontSize: '12px'
          }}
        >
          Account
        </Typography>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        sx={{
          alignItems: 'center'
        }}
        PaperProps={{
          style: {
            width: 210
          }
        }}
      >
        {!existedUser ? (
          <Box>
            <MenuItem onClick={handleCloseMenuAndOpenDialog}>Login</MenuItem>
            <MenuItem onClick={handleCloseMenuAndOpenDialog}>Register</MenuItem>
          </Box>
        ) : (
          <Box>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Box>
        )}
      </Menu>
    </div>
  )
}

export default Account
