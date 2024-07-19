import { CardMedia } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleGetToken } from '~/axios/handleUserServices'
import { fetchAllProduct } from '~/axios/services'
import { setProductId } from '~/redux/features/utils/StoreProductId'
import { formatNumber } from '~/utils/formatNumber'


function BookCard() {
  const [listBooks, setListBooks] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const existUser = Boolean(handleGetToken())
  const handleGetListBook = async () => {
    try {
      const res = await fetchAllProduct()
      if (res.status === 200 && res.data) {
        setListBooks(res.data)
      }
    } catch (error) {
      throw new Error('error', error)
    }
  }
  const handleStoreProduct = (id) => {
    dispatch(setProductId(id))
    navigate(`/product/${id}`)
  }

  useEffect(() => {
    handleGetListBook()
  }, [existUser])

  return (
    <>
      {listBooks && listBooks.length > 0 ? (
        listBooks.map((product, index) => (
          <Card
            onClick={() => handleStoreProduct(product.id)}
            variant="outlined"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              mx: '20px',
              height: '360px',
              width: '225px',
              margin: '0 2px 8px 2px',
              justifyContent: 'space-around',
              position: 'relative',
              my: '9px',
              border: 'none',
              ':hover': {
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
              }
            }}
            key={index}
          >
            <CardMedia
              component="img"
              src={`${product.img}`}
              sx={{
                width: '226px',
                height: '250px',
                objectFit: 'cover'
              }}
            />
            <CardContent>
              <Typography>
                <strong>{product.title}</strong>
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  sx={{
                    color: 'red'
                  }}
                >
                  {formatNumber(product.price)}
                  {product.currency}
                </Typography>
                <Typography
                  sx={{
                    borderRadius: '8px',
                    width: '30px',
                    color: 'green'
                  }}
                  fontSize="small"
                >
                  -{product.discount}%
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: 'gray',
                  textDecoration: 'line-through'
                }}
                fontSize="small"
              >
                {formatNumber(product.originalPrice)}
                {product.currency}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <img
            src="https://todoist.b-cdn.net/assets/images/e01356d33ed3b6dc6f3f5da94e8f83fc.png"
            srcSet="https://todoist.b-cdn.net/assets/images/5e5a51ce77124700bc4fb8822718efd9.png 2x, https://todoist.b-cdn.net/assets/images/a41cf82fe81c10c19faa4b0e1819deba.png 3x"
            alt="Placeholder"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Box>
      )}
    </>
  )
}

export default BookCard
