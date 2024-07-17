import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TimeLine from './Timeline/Timeline'
import AdminTable from './Table/Table'

const BOX_HEIGH = 700

function AdminPage() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexFlow: 'wrap'
        }}
      >
        <Box
          sx={{
            height: BOX_HEIGH
          }}
        >
          <TimeLine />
        </Box>
        <Box
          sx={{
            height: BOX_HEIGH
          }}
        >
          <AdminTable />
        </Box>
      </Box>
    </Container>
  )
}

export default AdminPage
