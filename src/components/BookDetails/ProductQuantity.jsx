import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const ProductQuantity = (props) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <strong>Quantity:</strong>
        <Button onClick={props.handleReduce}>
          <RemoveIcon />
        </Button>
        <Typography>{props.quantity}</Typography>
        <Button onClick={props.handleIncrease}>
          <AddIcon />
        </Button>
      </Stack>
    </Box>
  )
}

export default ProductQuantity
