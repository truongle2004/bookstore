import {
  Add as AddIcon,
  DeleteForever as DeleteForeverIcon,
  Remove as RemoveIcon
} from '@mui/icons-material'
import { IconButton, Stack, TableCell, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useControlQuantity } from '~/hooks'
import { useCart } from '~/providers/RemoveItemProvider'
import { AddMoney } from '~/redux/features/cart/CartMoney'
import {
  addToListBuyNow,
  removeAnItemFromCart
} from '~/redux/features/components/ListProducts'
import { formatNumber } from '~/utils/formatNumber'

function CountQuantityAndPrice(props) {
  const {
    isSelected,
    price,
    id,
    currency,
    img,
    originalPrice,
    title,
    author,
    discount
  } = props
  const { handleSubtractMoney, handleRemoveItem } = useCart()
  const dispatch = useDispatch()
  const isBought = useSelector((state) => state.buyItem.isBought)
  let { quantity, handleReduce, handleIncrease, setQuantity } =
    useControlQuantity()

  const previousQuantity = useRef(quantity)
  const firstSelected = useRef(true)

  const handleAddMoney = (money) => {
    dispatch(AddMoney(money))
  }
  //const handleSubtractMoney = (money) => dispatch(SubtractMoney(money))
  //const handleSetQuantityRemove = (quantity) =>
  //  dispatch(removeSelectedCheckBox(quantity))

  useEffect(() => {
    if (isBought && isSelected) {
      dispatch(
        addToListBuyNow({
          img: img,
          price: price,
          originalPrice: originalPrice,
          currency: currency,
          discount: discount,
          title: title,
          id: id,
          author: author,
          quantity: quantity
        })
      )
      dispatch(removeAnItemFromCart(id))
      handleSubtractMoney(previousQuantity.current * price)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBought])

  useEffect(() => {
    if (!isSelected && !firstSelected.current) {
      handleSubtractMoney(previousQuantity.current * price)
      firstSelected.current = true
    }

    if (isSelected) {
      if (firstSelected.current) {
        firstSelected.current = false
        handleAddMoney(price * quantity)
      } else if (previousQuantity.current > quantity) {
        handleSubtractMoney(price * (previousQuantity.current - quantity))
      } else if (previousQuantity.current < quantity) {
        handleAddMoney(price * (quantity - previousQuantity.current))
      }
      previousQuantity.current = quantity
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    quantity,
    dispatch,
    isSelected,
    price,
    props.previousQuantity,
    setQuantity
  ])

  return (
    <>
      <TableCell align="right">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ float: 'right' }}
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
        {formatNumber(quantity * price)} {currency}
      </TableCell>
      <TableCell align="right">
        <IconButton color="error" onClick={() => handleRemoveItem(id)}>
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
    </>
  )
}

export default CountQuantityAndPrice
