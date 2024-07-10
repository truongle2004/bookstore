import AddIcon from '@mui/icons-material/Add'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RemoveIcon from '@mui/icons-material/Remove'
import { Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useControlQuantity } from '~/hooks'
import {
  increaseSelecteCheckBox,
  reduceSelectedCheckBox
} from '~/redux/features/CartFeatures/totalProductSelected'
import { removeAnItemFromCart } from '~/redux/features/ListProducts'

function CheckSelect(props) {
  const dispatch = useDispatch()
  const handleUnSelectCheckBox = () => {
    dispatch(reduceSelectedCheckBox())
  }

  const handleSelectCheckBox = () => {
    dispatch(increaseSelecteCheckBox())
  }

  const [checked, setChecked] = useState(false)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    const action = checked
      ? increaseSelecteCheckBox()
      : reduceSelectedCheckBox()
    dispatch(action)
  }, [checked, dispatch])

  return (
    <TableCell component="th" scope="row">
      <Stack direction="row">
        <Checkbox
          onClick={() => setChecked(!checked)}
          sx={{
            color: 'red'
          }}
        />
        <img
          src={props.images}
          style={{
            height: '80px'
          }}
        />
      </Stack>
    </TableCell>
  )
}

function ListItem() {
  const { quantity, handleReduce, handleIncrease } = useControlQuantity()
  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
    dispatch(removeAnItemFromCart(id))
  }
  const listBooks = useSelector((state) => state.ListProducts.products)

  //FIXME color checkbox
  return (
    <>
      {listBooks.map((props, index) => (
        <TableBody key={index}>
          <TableRow key={props.id}>
            <CheckSelect images={props.images} />
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
            <TableCell align="right">
              {quantity * props.price}
              {props.currency}
            </TableCell>
            <TableCell align="right">
              <IconButton
                color="error"
                onClick={() => handleRemoveItem(props.id)}
              >
                <DeleteForeverIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      ))}
    </>
  )
}

export default ListItem
