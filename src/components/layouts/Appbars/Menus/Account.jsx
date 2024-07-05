import PersonIcon from '@mui/icons-material/Person'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useDispatch } from 'react-redux'
import { isOpenedDialog } from '~/redux/features/OpenDialog'

function Account() {
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    handleOpenDialog()
  }
  const handleOpenDialog = () => {
    dispatch(isOpenedDialog(true))
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
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <MenuItem onClick={handleClose}>Register</MenuItem>
        <MenuItem onClick={handleClose}>
          <FacebookIcon
            sx={{
              marginRight: '3px'
            }}
          />
          Login by Facebook
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Account
