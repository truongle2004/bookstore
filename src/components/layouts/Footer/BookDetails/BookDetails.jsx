import { Box, Button, Container, Typography } from '@mui/material'
import { bookInfo } from '~/publics'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Stack from '@mui/material/Stack'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import theme from '~/theme'
import { useState } from 'react'
import React from 'react'

const DetailtInformations = React.memo((props) => {
  return (
    <Box>
      <Box
        sx={{
          py: 2
        }}
      >
        <Typography
          className={props.title}
          sx={{
            fontSize: '22px',
            fontWeight: '600px'
          }}
        >
          <strong>{props.title}</strong>
        </Typography>
      </Box>
      <Stack direction="row" alignItems="center" spacing={5}>
        <Box>
          <Typography
            className={props.publisher}
            sx={{
              py: 1
            }}
          >
            Publisher:&nbsp;
            <strong>{props.publisher}</strong>
          </Typography>
          <Typography>
            PublishedBy:&nbsp;
            <strong>{props.publishedBy}</strong>
          </Typography>
        </Box>
        <Box>
          <Typography
            className={props.author}
            sx={{
              py: 1
            }}
          >
            Author:&nbsp;
            <strong>{props.author}</strong>
          </Typography>
          <Typography className={props.coverType}>
            CoverType:&nbsp;
            <strong>{props.coverType}</strong>
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          py: 3
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography
            sx={{
              fontSize: 50,
              color: '#C92127'
            }}
          >
            <strong>
              {props.price}
              {props.currency}
            </strong>
          </Typography>
          <Typography
            sx={{
              textDecoration: 'line-through'
            }}
          >
            {props.originalPrice}
            {props.currency}
          </Typography>
          <Typography
            sx={{
              bgcolor: '#C92127',
              padding: '3px',
              borderRadius: '5px',
              color: 'white'
            }}
          >
            <strong>{props.discount}</strong>
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
})

const Quantity = (props) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <strong>Quantity:</strong>
        <Button onClick={props.handleReduce}>
          <RemoveIcon />
        </Button>
        <Typography>{props.quantity}</Typography>
        <Button onClick={props.handleIncrease}>
          <AddIcon />
        </Button>
      </Stack>
    </Box>
  )
}
const ButtonGroup = React.memo(() => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="error"
          sx={theme.buttonStyle}
          startIcon={<ShoppingCartIcon />}
        >
          Add to cart
        </Button>
        <Button variant="contained" color="error" sx={theme.buttonStyle}>
          Buy now
        </Button>
      </Stack>
    </>
  )
})

function BookDetails() {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleReduce = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))

  return (
    <Container
      maxWidth={'xl'}
      sx={{
        marginTop: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          height: '590px',
          width: '1230px',
          padding: '16px 16px 25px 16px',
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
          boxShadow: 10
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              marginRight: 3
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
              <ButtonGroup />
            </Stack>
          </Box>
          <Box>
            <DetailtInformations
              title={bookInfo.title}
              publisher={bookInfo.publisher}
              publishedBy={bookInfo.publishedBy}
              author={bookInfo.author}
              coverType={bookInfo.coverType}
              price={bookInfo.price}
              originalPrice={bookInfo.originalPrice}
              currency={bookInfo.currency}
              discount={bookInfo.discount}
            />
            <Quantity
              quantity={quantity}
              handleIncrease={handleIncrease}
              handleReduce={handleReduce}
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default BookDetails
