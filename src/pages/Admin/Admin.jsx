import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AdminProductManagementTable from './Table/Producs/Products.admin'
import FormDialogAdmin from './Dialog/Dialog.admin'
import AdminUserManagementTable from './Table/Users/Users.admin'
import AdminPageProvider from '~/providers/AdminDataProvider'

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
            <Box
              sx={{
                height: (theme) => theme.heightTableAdmin
              }}
            >
              <AdminUserManagementTable />
            </Box>
            <Box
              sx={{
                height: (theme) => theme.heightTableAdmin
              }}
            >
              <AdminProductManagementTable />
            </Box>
          </Box>
        </Container>
      </AdminPageProvider>
    </Box>
  )
}

export default AdminPage
