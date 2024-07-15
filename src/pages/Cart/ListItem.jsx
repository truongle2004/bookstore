import {
  Add as AddIcon,
  DeleteForever as DeleteForeverIcon,
  Remove as RemoveIcon
} from '@mui/icons-material'
import {
  Checkbox,
  IconButton,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatNumber } from '~/constant'
import { useControlQuantity } from '~/hooks'
import { AddMoney, SubtractMoney } from '~/redux/features/CartMoney'
import {
  increaseSelectCheckBox,
  reduceSelectedCheckBox
} from '~/redux/features/CountProductSelected'
import { removeAnItemFromCart } from '~/redux/features/ListProducts'

function CheckSelect(props) {
  const { images, id, handleCheckboxClick } = props
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const isSelectedAll = useSelector(
    (state) => state.isSelectedAll.selectAllItems
  )
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isSelectedAll) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [isSelectedAll])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    } else {
      handleCheckboxClick(id, checked)
    }

    const action = checked ? increaseSelectCheckBox() : reduceSelectedCheckBox()
    dispatch(action)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, dispatch])

  const handleClickedCheckBox = () => {
    setChecked((prev) => !prev)
  }

  return (
    <TableCell component="th" scope="row">
      <Stack direction="row">
        <Checkbox
          onClick={() => {
            handleClickedCheckBox()
          }}
          color="success"
          checked={checked}
        />
        <img
          src={images}
          alt="Product"
          style={{
            height: '80px'
          }}
        />
      </Stack>
    </TableCell>
  )
}

function CountQuantityAndPrice(props) {
  const { isSelected, price, id, currency } = props
  const dispatch = useDispatch()
  const { quantity, handleReduce, handleIncrease } = useControlQuantity()
  const previousQuantity = useRef(quantity)
  const firstSelected = useRef(true)

  const handleRemoveItem = useCallback(() => {
    dispatch(removeAnItemFromCart(id))
  }, [dispatch, id])

  useEffect(() => {
    const handleAddMoney = (money) => dispatch(AddMoney(money))
    const handleSubtractMoney = (money) => dispatch(SubtractMoney(money))

    if (!isSelected && !firstSelected.current) {
      handleSubtractMoney(previousQuantity.current * price) // Use previousQuantity for subtraction
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
  }, [quantity, dispatch, isSelected, price])

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
        <IconButton color="error" onClick={handleRemoveItem}>
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
    </>
  )
}

function ListItem() {
  const listBooks = useSelector((state) => state.ListProducts.products)

  const [checkedStates, setCheckedStates] = useState(
    listBooks.reduce((acc, book) => {
      acc[book.id] = false
      return acc
    }, {})
  )

  const handleCheckboxClick = (id, checked) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [id]: checked
    }))
  }

  return (
    <>
      {listBooks.map((props) => (
        <TableBody
          key={props.id}
          sx={{
            width: '100%'
          }}
        >
          <TableRow>
            <CheckSelect
              id={props.id}
              images={props.images}
              handleCheckboxClick={handleCheckboxClick}
            />
            <TableCell align="right">
              <Typography
                fontSize="small"
                sx={{ textDecoration: 'line-through' }}
              >
                {formatNumber(props.originalPrice)} {props.currency}
              </Typography>
              <Typography>
                {formatNumber(props.price)} {props.currency}
              </Typography>
            </TableCell>
            <CountQuantityAndPrice
              id={props.id}
              price={props.price}
              currency={props.currency}
              isSelected={checkedStates[props.id]}
            />
          </TableRow>
        </TableBody>
      ))}
    </>
  )
}

export default ListItem
