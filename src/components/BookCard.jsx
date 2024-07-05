import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardMedia } from '@mui/material'

const card = (
  <React.Fragment>
    <CardMedia
      component="img"
      src="https://cdn0.fahasa.com/media/catalog/product/z/5/z5569703671543_9999563d8928c9cca25d572ab6764328.jpg"
    />
    <CardContent>
      <Typography>Giải thích ngữ pháp tiếng anh(tái bản 2024)</Typography>
      <Typography
        sx={{
          color: 'red',
          textDecoration: 'line-through'
        }}
      >
        134.000 đ
      </Typography>
    </CardContent>
  </React.Fragment>
)

export default function BookCard() {
  return (
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
            'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
        }
      }}
    >
      {card}
    </Card>
  )
}
