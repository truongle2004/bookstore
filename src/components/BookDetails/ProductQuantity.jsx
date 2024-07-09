import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useControlQuantity } from '~/hooks'

const ProductQuantity = () => {
  const { quantity, handleIncrease, handleReduce } = useControlQuantity()
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton onClick={handleReduce}>
        <RemoveIcon />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={handleIncrease}>
        <AddIcon />
      </IconButton>
    </Stack>
  )
}

export default ProductQuantity
