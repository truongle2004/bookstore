import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isOpenedDialog } from '~/redux/features/OpenDialog'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function FormDialog() {
  const open = useSelector((state) => state.openDialog.open)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(isOpenedDialog(false))
  }
  const handleOpen = () => {
    dispatch(isOpenedDialog(true))
  }
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Register" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <LoginForm />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <RegisterForm />
          </CustomTabPanel>
        </Box>
      </Dialog>
    </React.Fragment>
  )
}
