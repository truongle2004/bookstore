import AddIcon from '@mui/icons-material/Add'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RemoveIcon from '@mui/icons-material/Remove'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatNumber } from '~/constant'
import { useControlQuantity } from '~/hooks'
import { AddMoney, SubtractMoney } from '~/redux/features/CartMoney'
import {
  increaseSelecteCheckBox,
  reduceSelectedCheckBox
} from '~/redux/features/CountProductSelected'
import { removeAnItemFromCart } from '~/redux/features/ListProducts'

function CheckSelect(props) {
  const dispatch = useDispatch()

  const [checked, setChecked] = useState(false)

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
          color="success"
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

function CountQuantityAndPrice(props) {
  const dispatch = useDispatch()
  const { quantity, handleReduce, handleIncrease } = useControlQuantity()
  const handleRemoveItem = (id) => {
    dispatch(removeAnItemFromCart(id))
  }
  const previousQuantity = useRef(quantity)

  useEffect(() => {
    const handleAddMoney = (Money) => {
      dispatch(AddMoney(Money))
    }

    const handleSubtractMoney = (Money) => {
      dispatch(SubtractMoney(Money))
    }

    if (previousQuantity.current > quantity) {
      handleSubtractMoney(props.price)
    } else if (previousQuantity.current < quantity) {
      handleAddMoney(props.price)
    }
    previousQuantity.current = quantity
  }, [quantity, props.price, dispatch])

  return (
    <>
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
        {formatNumber(quantity * props.price)}
        {props.currency}
      </TableCell>
      <TableCell align="right">
        <IconButton color="error" onClick={() => handleRemoveItem(props.id)}>
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
    </>
  )
}

function ListItem() {
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
                {formatNumber(props.originalPrice)}
                {props.currency}
              </Typography>
              <Typography>
                {formatNumber(props.price)}
                {props.currency}
              </Typography>
            </TableCell>
            <CountQuantityAndPrice
              price={props.price}
              currency={props.currency}
            />
          </TableRow>
        </TableBody>
      ))}
    </>
  )
}

export default ListItem
