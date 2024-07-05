import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import BookCard from '~/components/BookCard'

function BoardBar() {
  return (
    <Container
      sx={{
        marginTop: '20px'
      }}
    >
      <Box
        sx={{
          bgcolor: 'primary.light',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          height: '50px'
        }}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <img
            src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/icon_dealhot_new.png"
            style={{
              height: '32px',
              width: '32px',
              marginTop: '7px',
              marginLeft: '10px'
            }}
          />
          <Typography
            sx={{
              paddingTop: '10px',
              fontSize: '18px',
              fontWeight: '700'
            }}
          >
            Kho Hang
          </Typography>
        </Stack>
      </Box>
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
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Box>
      </Box>
    </Container>
  )
}

export default BoardBar
