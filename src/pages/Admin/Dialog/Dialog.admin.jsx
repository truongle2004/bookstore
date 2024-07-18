import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import Image from './TabDialog/Image'
import Info from './TabDialog/Info'
import Price from './TabDialog/Price'
import Description from './TabDialog/Description'
import Author from './TabDialog/Author'

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function FormDialogAdmin(props) {
  const { openFormEdit, handleCloseFormEdit, productData } = props
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <React.Fragment>
      <Dialog open={openFormEdit}>
        <DialogTitle>Form Edit Product</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            gap: 3
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Info" {...a11yProps(0)} />
                <Tab label="Price" {...a11yProps(1)} />
                <Tab label="Image" {...a11yProps(2)} />
                <Tab label="Book Description" {...a11yProps(3)} />
                <Tab label="Author" {...a11yProps(4)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Info productData={productData} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Price productData={productData} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Image imgUrl={productData.img} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Description productData={productData} />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={4}>
              <Author productData={productData} />
            </CustomTabPanel>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFormEdit}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default FormDialogAdmin
