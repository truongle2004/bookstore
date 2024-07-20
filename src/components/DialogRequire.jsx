import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isOpenedDialogRequireInfo } from '~/redux/features/components/OpenDialog'
import { AddUserInfo } from '~/redux/features/services/UserInfo'

function DialogRequire() {
  const dispatch = useDispatch()
  const isOpenedDialog = useSelector(
    (state) => state.openDialog.openRequireInfo
  )

  const [address, setAddress] = useState('')
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleClose = () => {
    dispatch(isOpenedDialogRequireInfo(false))
  }

  const handleAccept = () => {
    handleClose()
    dispatch(
      AddUserInfo({
        address: address,
        fullName: fullName,
        phoneNumber: phoneNumber
      })
    )
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

        <TextField
          required
          margin="dense"
          id="text"
          name="number"
          label="Enter phone number"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{ width: '100%' }}
        />

        <TextField
          required
          margin="dense"
          id="text"
          name="name"
          label="Enter full name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setFullName(e.target.value)}
          sx={{ width: '100%' }}
        />
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
