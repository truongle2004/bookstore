import BoardBar from '~/components/BoardBar/BoardBar'
import BookCard from '~/components/BookCard'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function Home() {
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
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <BookCard />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Home
