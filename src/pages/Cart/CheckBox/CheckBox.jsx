import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  increaseSelectCheckBox,
  reduceSelectedCheckBox
} from '~/redux/features/cart/CountProductSelected'
import { Checkbox, Stack, TableCell, Typography } from '@mui/material'
import Box from '@mui/material/Box'

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

export default CheckSelect
