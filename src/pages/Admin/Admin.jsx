import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AdminPageProvider from '~/providers/AdminDataProvider'
import FormDialogAdmin from './Dialog/Dialog.admin'
import AdminProductManagementTable from './Table/Producs/Products.admin'

function AdminPage() {
  return (
    <Box>
      <AdminPageProvider>
        <FormDialogAdmin />
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexFlow: 'wrap',
              mt: 5
            }}
          >
            <Box>
              <AdminProductManagementTable />
            </Box>
          </Box>
        </Container>
      </AdminPageProvider>
    </Box>
  )
}

export default AdminPage
