import {
  Add as AddIcon,
  DeleteForever as DeleteForeverIcon,
  Remove as RemoveIcon
} from '@mui/icons-material'
import Box from '@mui/material/Box'
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
import { useControlQuantity } from '~/hooks'
import { AddMoney, SubtractMoney } from '~/redux/features/cart/CartMoney'
import {
  increaseSelectCheckBox,
  reduceSelectedCheckBox,
  removeSelectedCheckBox
} from '~/redux/features/cart/CountProductSelected'
import {
  addToListBuyNow,
  removeAnItemFromCart
} from '~/redux/features/components/ListProducts'
import { formatNumber } from '~/utils/formatNumber'

function CheckSelect(props) {
  const { author, title, images, id, handleCheckboxClick } = props
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
        <Box
          sx={{
            mx: 2
          }}
        >
          <Typography>
            <strong>{title}</strong>
          </Typography>
          <Typography>{author}</Typography>
        </Box>
      </Stack>
    </TableCell>
  )
}

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
  const dispatch = useDispatch()
  const isBought = useSelector((state) => state.buyItem.isBought)
  let { quantity, handleReduce, handleIncrease, setQuantity } =
    useControlQuantity()

  const previousQuantity = useRef(quantity)
  const firstSelected = useRef(true)

  const handleAddMoney = (money) => dispatch(AddMoney(money))
  const handleSubtractMoney = (money) => dispatch(SubtractMoney(money))
  const handleSetQuantityRemove = (quantity) =>
    dispatch(removeSelectedCheckBox(quantity))
  const handleRemoveItem = useCallback(() => {
    dispatch(removeAnItemFromCart(id))
    handleSubtractMoney(previousQuantity.current * price)
    handleSetQuantityRemove(1)
  }, [dispatch, id])

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
          author: author
        })
      )
      dispatch(removeAnItemFromCart(id))
    }
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
        <IconButton color="error" onClick={handleRemoveItem}>
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
    </>
  )
}

function ListItem() {
  const listBooks = useSelector((state) => state.ListProducts.productsCart)

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
              images={props.img}
              handleCheckboxClick={handleCheckboxClick}
              title={props.title}
              author={props.author}
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
              originalPrice={props.originalPrice}
              discount={props.discount}
              title={props.title}
              img={props.img}
              author={props.author}
            />
          </TableRow>
        </TableBody>
      ))}
    </>
  )
}

export default ListItem
