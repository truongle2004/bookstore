import { TableBody, TableCell, TableRow, Typography } from '@mui/material'
import { useState } from 'react'
import { formatNumber } from '~/utils/formatNumber'
import CheckSelect from '../CheckBox/CheckBox'
import CountQuantityAndPrice from '../Count/CountQuantityAndPrice'
import { useCart } from '~/providers/RemoveItemProvider'

function ListItem(props) {
  const { handleIsRemovedItem } = props
  const { listProducts } = useCart()
  const [checkedStates, setCheckedStates] = useState(
    listProducts.reduce((acc, book) => {
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
      {listProducts.map((props, index) => (
        <TableBody
          key={index}
          sx={{
            width: '100%'
          }}
        >
          <TableRow>
            <CheckSelect
              id={props.product.id}
              images={props.product.img}
              handleCheckboxClick={handleCheckboxClick}
              title={props.product.title}
              author={props.product.author}
            />
            <TableCell align="right">
              <Typography
                fontSize="small"
                sx={{ textDecoration: 'line-through' }}
              >
                {formatNumber(props.product.originalPrice)}
                {props.product.currency}
              </Typography>
              <Typography>
                {formatNumber(props.product.price)} {props.product.currency}
              </Typography>
            </TableCell>
            <CountQuantityAndPrice
              id={props.id}
              price={props.product.price}
              currency={props.product.currency}
              isSelected={checkedStates[props.product.id]}
              originalPrice={props.product.originalPrice}
              discount={props.product.discount}
              title={props.product.title}
              img={props.product.img}
              author={props.product.author}
              handleIsRemovedItem={handleIsRemovedItem}
            />
          </TableRow>
        </TableBody>
      ))}
    </>
  )
}

export default ListItem
