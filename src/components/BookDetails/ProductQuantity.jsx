import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const ProductQuantity = (props) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton onClick={props.handleReduce}>
        <RemoveIcon />
      </IconButton>
      <Typography>{props.quantity}</Typography>
      <IconButton onClick={props.handleIncrease}>
        <AddIcon />
      </IconButton>
    </Stack>
  )
}

export default ProductQuantity
