/* eslint-disable react-refresh/only-export-components */
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { listBookInfo } from '~/publics'

const ProductDetail = React.memo(() => {
  const listBooks = listBookInfo

  return (
    <>
      {listBooks &&
        listBooks.map((props, index) => (
          <Box key={index}>
            <Box
              sx={{
                py: 2
              }}
            >
              <Typography
                className={props.title}
                id={props.id}
                sx={{
                  fontSize: '22px',
                  fontWeight: 600
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
                <strong>
                  <Typography
                    sx={{
                      fontSize: '50px',
                      color: '#C92127'
                    }}
                  >
                    {props.price}
                    {props.currency}
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
                  {props.originalPrice}
                  {props.currency}
                </Typography>
                <Typography
                  sx={{
                    bgcolor: '#C92127',
                    p: '3px',
                    borderRadius: '5px',
                    color: 'white'
                  }}
                >
                  <strong>{props.discount}</strong>
                </Typography>
              </Stack>
            </Box>
          </Box>
        ))}
    </>
  )
})

export default ProductDetail
