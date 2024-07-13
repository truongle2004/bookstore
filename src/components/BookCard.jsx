import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardMedia } from '@mui/material'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'


function BookCard() {
  const listBooks = useSelector((state) => state.ListProducts.products)
  return (
    <>
      {listBooks && listBooks.length > 0 ? (
        listBooks.map((props, index) => (
          <Card
            variant="outlined"
            sx={{
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
            <CardMedia component="img" src={`${props.images}`} />
            <CardContent>
              <Typography>{props.title}</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  sx={{
                    color: 'red'
                  }}
                >
                  {props.price}
                  {props.currency}
                </Typography>
                <Typography
                  sx={{
                    bgcolor: '#C92127',
                    borderRadius: '8px',
                    width: '30px',
                    color: 'primary.light'
                  }}
                  fontSize="small"
                >
                  {props.discount}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: 'gray',
                  textDecoration: 'line-through'
                }}
                fontSize="small"
              >
                {props.originalPrice}
                {props.currency}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  )
}

export default BookCard
