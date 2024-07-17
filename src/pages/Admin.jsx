import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import HotelIcon from '@mui/icons-material/Hotel'
import InfoIcon from '@mui/icons-material/Info'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import RepeatIcon from '@mui/icons-material/Repeat'
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import { alpha, styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetToken } from '~/axios/handleUserServices'
import { fetchAllProducts } from '~/redux/features/components/ListProducts'

const BOX_HEIGH = 700

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

function BasicTable() {
  const existToken = !!handleGetToken()
  const dispatch = useDispatch()
  const listBook = useSelector((state) => state.ListProducts.listAllProduct)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
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
    <TableContainer component={Paper}>
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
              <TableCell align="right">{value.price}</TableCell>
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
                    <MenuItem onClick={handleClose} disableRipple>
                      <EditIcon />
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <DeleteForeverIcon />
                      remove
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
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

function AdminPage() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexFlow: 'wrap'
        }}
      >
        <Box
          sx={{
            height: BOX_HEIGH
          }}
        >
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                9:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        <Box
          sx={{
            height: BOX_HEIGH
          }}
        >
          <BasicTable />
        </Box>
      </Box>
    </Container>
  )
}

export default AdminPage
