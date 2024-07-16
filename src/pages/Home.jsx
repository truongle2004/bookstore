import BoardBar from '~/components/BoardBar/BoardBar'
import BookCard from '~/components/BookCard'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { handleGetToken } from '~/axios/handleUserServices'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Home() {
  const existUser = !!handleGetToken()
  console.log(useSelector((state) => state.buyItem.isBought));
  return (
    <>
      <Container
        sx={{
          mt: '20px'
        }}
      >
        <BoardBar />
        <Box
          sx={{
            height: '827px',
            position: 'relative'
          }}
        >
          {existUser ? (
            <Box
              sx={{
                position: 'absolute',
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              <BookCard />
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                flexDirection: 'column'
              }}
            >
              <img
                src="https://todoist.b-cdn.net/assets/images/e01356d33ed3b6dc6f3f5da94e8f83fc.png"
                srcSet="https://todoist.b-cdn.net/assets/images/5e5a51ce77124700bc4fb8822718efd9.png 2x, https://todoist.b-cdn.net/assets/images/a41cf82fe81c10c19faa4b0e1819deba.png 3x"
                alt="Placeholder"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
              <Typography>Có tiền thì vô không thì ra chỗ khác 👌</Typography>

              <Typography>
                <strong>You need to login</strong>
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </>
  )
}

export default Home
