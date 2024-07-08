import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import useQuantity from '~/hooks'
import { Typography } from '@mui/material'

function CartItem(props) {
  const { quantity, handleReduce, handleIncrease } = useQuantity()
  return (
    <>
      <TableBody>
        <TableRow key={props.id}>
          <TableCell component="th" scope="row">
            <Stack direction="row">
              <Checkbox />
              <img
                src={props.image}
                style={{
                  height: '80px'
                }}
              />
            </Stack>
          </TableCell>
          <TableCell align="right">
            <Typography
              fontSize="small"
              sx={{
                textDecoration: 'line-through'
              }}
            >
              {props.originalPrice}
              {props.currency}
            </Typography>
            <Typography>
              {props.price}
              {props.currency}
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                float: 'right'
              }}
            >
              <IconButton onClick={handleReduce} size="small">
                <RemoveIcon />
              </IconButton>

              <Typography>{quantity}</Typography>

              <IconButton onClick={handleIncrease} size="small">
                <AddIcon />
              </IconButton>
            </Stack>
          </TableCell>
          <TableCell align="right">{quantity * props.price}</TableCell>
          <TableCell align="right">
            <Button color="error">Remove</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  )
}

export default CartItem
