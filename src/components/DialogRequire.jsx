import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { isOpenedDialogRequireInfo } from '~/redux/features/components/OpenDialog'
import { setUserAddress } from '~/redux/features/services/UserAddress'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function DialogRequire() {
  const dispatch = useDispatch()
  const isOpenedDialog = useSelector(
    (state) => state.openDialog.openRequireInfo
  )

  const [address, setAddress] = useState('')

  const handleClose = () => {
    dispatch(isOpenedDialogRequireInfo(false))
  }

  const handleAccept = () => {
    handleClose()
    dispatch(setUserAddress(address))
  }

  const [paymentType, setPaymentType] = useState('')

  const handleChange = (event) => {
    setPaymentType(event.target.value)
  }

  return (
    <Dialog open={isOpenedDialog} fullWidth={true} maxWidth={'xs'}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="text"
          name="address"
          label="Enter Address"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setAddress(e.target.value)}
          sx={{ width: '100%' }}
        />
        <InputLabel
          id="age-select-label"
          sx={{
            mt: 3
          }}
        >
          Payment
        </InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={paymentType}
          label="Age"
          onChange={handleChange}
          fullWidth
          sx={{ width: '100%' }}
        >
          <MenuItem value={1}>Payment on delivery</MenuItem>
          <MenuItem value={2}>Payment by card</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" onClick={handleAccept}>
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogRequire
