import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { handleGetToken } from '~/axios/handleUserServices'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { isOpenedDialog } from '~/redux/features/components/OpenDialog'
import { setOpenLogin } from '~/redux/features/services/UserServiceIndex'

function Cart() {
  const navigate = useNavigate()
  const isAllowed = handleGetToken() ? true : false
  const dispatch = useDispatch()
  const handleCheckBeforeAction = () => {
    if (isAllowed) {
      navigate(`${import.meta.env.VITE_USER_CART_URL}`)
    } else {
      toast.error('You need to login account')
      dispatch(setOpenLogin())
      dispatch(isOpenedDialog(true))
    }
  }
  return (
    <Box>
      <Stack>
        <ShoppingCartIcon
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
          Cart
        </Typography>
      </Stack>
    </Box>
  )
}

export default Cart
