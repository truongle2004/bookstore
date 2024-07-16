import WarehouseIcon from '@mui/icons-material/Warehouse'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { handleGetToken } from '~/axios/handleUserServices'
import { isOpenedDialog } from '~/redux/features/components/OpenDialog'
import { setOpenLogin } from '~/redux/features/services/UserServiceIndex'

function MyBook() {
  const navigate = useNavigate()
  const isAllowed = handleGetToken() ? true : false
  const dispatch = useDispatch()
  const handleCheckBeforeAction = () => {
    if (isAllowed) {
      navigate(`${import.meta.env.VITE_PURCHASE_URL}`)
    } else {
      toast.error('You need to login account')
      dispatch(setOpenLogin())
      dispatch(isOpenedDialog(true))
    }
  }
  return (
    <Box>
      <Stack alignItems="center">
        <WarehouseIcon
          onClick={handleCheckBeforeAction}
          sx={{
            cursor: 'pointer'
          }}
        />
        <Typography
          sx={{
            fontSize: '12px'
          }}
        >
          My Books
        </Typography>
      </Stack>
    </Box>
  )
}

export default MyBook
