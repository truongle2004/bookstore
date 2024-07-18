import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { formatNumber } from '~/utils/formatNumber'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleGetToken } from '~/axios/handleUserServices'
import { fetchAllProducts } from '~/redux/features/components/ListProducts'
import styled from '@emotion/styled'
import Menu from '@mui/material/Menu'
import { alpha } from '@mui/material'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}))

function AdminTable(props) {
  const { handleOpenFormEdit, handleSetProductData } = props
  const existToken = !!handleGetToken()
  const dispatch = useDispatch()
  const listBook = useSelector((state) => state.ListProducts.listAllProduct)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMoreInfo = (id) => {
    handleClose()
    navigate(import.meta.env.VITE_ADMIN_PRODUCT + '/' + id)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {
    if (existToken) {
      dispatch(fetchAllProducts())
    }
  }, [existToken, dispatch])

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 8
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Imges</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listBook.map((value) => (
            <TableRow
              key={value.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {value.id}
              </TableCell>
              <TableCell align="right">
                <img
                  src={`${value.img}`}
                  style={{
                    height: '80px',
                    objectFit: 'cover',
                    width: '80px'
                  }}
                />
              </TableCell>
              <TableCell align="right">{value.title}</TableCell>
              <TableCell align="right">{value.author}</TableCell>
              <TableCell align="right">{formatNumber(value.price)}</TableCell>
              <TableCell align="right">
                <Box>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Menu
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose()
                        handleSetProductData(value)
                        handleOpenFormEdit()
                      }}
                      disableRipple
                    >
                      <EditIcon />
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <DeleteForeverIcon />
                      remove
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleMoreInfo(value.id)
                      }}
                      disableRipple
                    >
                      <InfoIcon />
                      Info
                    </MenuItem>
                  </StyledMenu>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminTable
