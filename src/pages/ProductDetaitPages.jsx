import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { ProductQuantity } from '~/components/BookDetails'
import theme from '~/theme'
import { bookInfo } from '~/publics'
import { Divider } from '@mui/material'
import { useState } from 'react'
import RadioGroupRating from '~/components/RadioGroupRating'

function ReadMore({ desc }) {
  const [expanded, setExpanded] = useState(false)

  const showFullDescriptionHandler = () => {
    setExpanded((prev) => !prev)
  }

  const description = expanded ? desc : desc.slice(0, 1000) // first 0 > 1000 characters

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      <Typography
        sx={{
          maxHeight: expanded ? 'none' : '100px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease'
        }}
      >
        {description}
      </Typography>
      <Button
        onClick={showFullDescriptionHandler}
        style={{ marginTop: '8px', alignSelf: 'center' }}
      >
        Read {expanded ? 'Less' : 'More'}
      </Button>
    </Box>
  )
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: 'none'
  }
}))

function ProductDetailPages() {
  const [value, setValue] = useState(2)
  return (
    <Box
      sx={{
        mx: 10,
        my: 10
      }}
    >
      <Box
        sx={{
          height: '590px',
          p: '16px 16px 25px 16px',
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
          boxShadow: 9
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              mr: 3
            }}
          >
            <Stack alignItems="center" spacing={4}>
              <img
                src="https://cdn0.fahasa.com/media/catalog/product/z/5/z5569703671543_9999563d8928c9cca25d572ab6764328.jpg"
                style={{
                  width: '388px',
                  height: '400px'
                }}
              />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  color="error"
                  sx={theme.buttonStyle}
                  startIcon={<ShoppingCartIcon />}
                >
                  Add to cart
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={theme.buttonStyle}
                >
                  Buy now
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            {/*<ProductDetails /> */}
            <Box key={1}>
              <Box
                sx={{
                  py: 2
                }}
              >
                <Typography
                  id="1436"
                  sx={{
                    fontSize: '22px',
                    fontWeight: 600
                  }}
                >
                  <strong>Hoa Học Trò - Số 1436</strong>
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" spacing={5}>
                <Box>
                  <Typography
                    sx={{
                      py: 1
                    }}
                  >
                    Publisher:&nbsp;
                    <strong>BÁO TIỀN PHONG</strong>
                  </Typography>
                  <Typography>
                    PublishedBy:&nbsp;
                    <strong>Báo Sinh Viên VN - Hoa Học Trò</strong>
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      py: 1
                    }}
                  >
                    Author:&nbsp;
                    <strong>Nhiều Tác Giả</strong>
                  </Typography>
                  <Typography>
                    CoverType:&nbsp;
                    <strong>Bìa Mềm</strong>
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  py: 3
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <strong>
                    <Typography
                      sx={{
                        fontSize: '50px',
                        color: '#C92127'
                      }}
                    >
                      19000 d
                    </Typography>
                  </strong>
                  <Typography
                    sx={{
                      fontSize: 50,
                      color: '#C92127'
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      textDecoration: 'line-through'
                    }}
                  >
                    20000 d
                  </Typography>
                  <Typography
                    sx={{
                      bgcolor: '#C92127',
                      p: '3px',
                      borderRadius: '5px',
                      color: 'white'
                    }}
                  >
                    <strong>5%</strong>
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <ProductQuantity />
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          my: 10,
          boxShadow: 8,
          p: '16px 16px 25px 16px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <header>Product Information</header>
        <TableContainer>
          <Table
            size="small"
            aria-label="customized table"
            sx={{
              width: '400px'
            }}
          >
            <TableBody>
              <TableRow key={bookInfo.id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: 'gray'
                  }}
                >
                  ID
                </StyledTableCell>
                <StyledTableCell align="justify">{bookInfo.id}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell
                  align="left"
                  sx={{
                    color: 'gray'
                  }}
                >
                  Supplier
                </StyledTableCell>
                <StyledTableCell align="left">
                  {bookInfo.publishingYear}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell
                  align="left"
                  sx={{
                    color: 'gray'
                  }}
                >
                  Language
                </StyledTableCell>
                <StyledTableCell align="left">
                  {bookInfo.language}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell
                  align="left"
                  sx={{
                    color: 'gray'
                  }}
                >
                  Packaging size
                </StyledTableCell>
                <StyledTableCell align="left">
                  {bookInfo.packagingSize}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell
                  align="left"
                  sx={{
                    color: 'gray'
                  }}
                >
                  Number of pages
                </StyledTableCell>
                <StyledTableCell align="left">
                  {bookInfo.numberOfPages}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell
                  align="left"
                  sx={{
                    color: 'gray'
                  }}
                >
                  Cover type
                </StyledTableCell>
                <StyledTableCell align="left">
                  {bookInfo.coverType}
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Divider />
        </TableContainer>
        <Box
          sx={{
            my: 6,
            display: 'flex'
          }}
        >
          <Stack spacing={5}>
            <Typography sx={{ wordSpacing: '3px' }}>
              <strong>{bookInfo.headerDcription}</strong>
            </Typography>

            <Box>
              <ReadMore desc={bookInfo.description} />
            </Box>
            <Divider />
            <Typography sx={{ wordSpacing: '3px' }}>
              <strong>About The Author</strong>
            </Typography>
            <Typography sx={{ wordSpacing: '3px', px: 3 }}>
              {bookInfo.aboutTheAuthor}
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography>
            <strong>Product Reviews</strong>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h3"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              0<Typography>/5</Typography>
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
              size="large"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            pb: 5,
            flexDirection: 'column'
          }}
        >
          <Stack direction="row" spacing={5} sx={{ width: '100%' }}>
            <Box sx={{ flex: 1 }}>
              <Typography>
                <strong>truong dep trai</strong>
              </Typography>
              <Typography>2024-07-10</Typography>
            </Box>
            <Box sx={{ flex: 3 }}>
              <Rating name="read-only" value={4} readOnly />
              <Typography>
                An incredible read! The author&apos;s deep understanding of
                history shines through every page. Highly recommend!
              </Typography>
              <RadioGroupRating />
            </Box>
          </Stack>
          <Stack direction="row" spacing={5} sx={{ width: '100%' }}>
            <Box sx={{ flex: 1 }}>
              <Typography>
                <strong>truong dep trai</strong>
              </Typography>
              <Typography>2024-07-10</Typography>
            </Box>
            <Box sx={{ flex: 3 }}>
              <Rating name="read-only" value={4} readOnly />
              <Typography>
                An incredible read! The author&apos;s deep understanding of
                history shines through every page. Highly recommend!
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductDetailPages
