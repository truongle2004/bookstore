import { Box, Dialog, Tab, Tabs } from '@mui/material'
import Slide from '@mui/material/Slide'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetToken } from '~/axios/handleUserServices'
import { isOpenedDialog } from '~/redux/features/components/OpenDialog'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

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
  const existToken = handleGetToken() ? true : false
  const [value, setValue] = React.useState(0)

  const index = useSelector((state) => state.userServiceIndex.index)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClose = () => {
    dispatch(isOpenedDialog(false))
  }

  useEffect(() => {
    setValue(index)
  }, [index])

  useEffect(() => {
    if (existToken) {
      handleClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existToken])

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        // onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
              textColor="secondary"
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
