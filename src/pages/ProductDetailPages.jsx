import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { formatNumber } from '~/utils/formatNumber'
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
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import RadioGroupRating from '~/components/RadioGroupRating'
import ReadMoreAndLess from '~/components/ReadLessAndMore'
import { useSelector } from 'react-redux'
import { useMediaQuery } from '@mui/material'

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: 'none'
  }
}))

function ProductDetailPages() {
  const [value, setValue] = useState(2)
  const matches = useMediaQuery('(min-width:1200px)')
  const productId = useSelector((state) => state.storeProductId.productId)
  const product = useSelector((state) =>
    state.ListProducts.products.find((product) => product.id === productId)
  )
  if (!product) {
    return <p>Page Not Found!</p>
  }
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
          boxShadow: 9,
          minWidth: 800,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Stack direction="row" spacing={11}>
          <Box>
            <Stack alignItems="center" spacing={4}>
              <img
                src={product.images}
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
                  <strong>{product.title}</strong>
                </Typography>
              </Box>
              <Stack direction={matches ? 'row' : 'column'} spacing={5}>
                <Box>
                  <Typography
                    sx={{
                      py: 1
                    }}
                  >
                    Publisher:&nbsp;
                    <strong>{product.publisher}</strong>
                  </Typography>
                  <Typography>
                    PublishedBy:&nbsp;
                    <strong>{product.publishedBy}</strong>
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      py: 1
                    }}
                  >
                    Author:&nbsp;
                    <strong>{product.author}</strong>
                  </Typography>
                  <Typography>
                    CoverType:&nbsp;
                    <strong>{product.coverType}</strong>
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
                      {formatNumber(product.price)}
                      {product.currency}
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
                    {product.originalPrice}
                  </Typography>
                  <Typography
                    sx={{
                      bgcolor: '#C92127',
                      p: '3px',
                      borderRadius: '5px',
                      color: 'white'
                    }}
                  >
                    <strong>{product.discount}</strong>
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
              <TableRow key={product.id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: 'gray'
                  }}
                >
                  ID
                </StyledTableCell>
                <StyledTableCell align="justify">{product.id}</StyledTableCell>
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
                  {product.publishingYear}
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
                  {product.language}
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
                  {product.packagingSize}
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
                  {product.numberOfPages}
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
                  {product.coverType}
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
              <strong>{product.headerDcription}</strong>
            </Typography>

            <Box>
              <ReadMoreAndLess desc={product.description} />
            </Box>
            <Divider />
            <Typography sx={{ wordSpacing: '3px' }}>
              <strong>About The Author</strong>
            </Typography>
            <Typography sx={{ wordSpacing: '3px', px: 3 }}>
              {product.aboutTheAuthor}
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
