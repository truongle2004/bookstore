import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TimeLine from './Timeline/Timeline'
import AdminTable from './Table/Table'
import { useState } from 'react'
import FormDialogAdmin from './Dialog/Dialog.admin'

const BOX_HEIGH = 700

function AdminPage() {
  const [openFormEdit, setOpenFormEdit] = useState(false)
  const [data, setData] = useState({})

  const handleSetProductData = (data) => {
    setData(data)
  }

  const handleRemoveProduct = (id) => {
    // TODO remove logic
  }

  const handleOpenFormEdit = () => {
    setOpenFormEdit(true)
  }

  const handleCloseFormEdit = () => {
    setOpenFormEdit(false)
  }
  return (
    <Box>
      <FormDialogAdmin
        openFormEdit={openFormEdit}
        handleCloseFormEdit={handleCloseFormEdit}
        productData={data}
      />
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
            <AdminTable
              handleOpenFormEdit={handleOpenFormEdit}
              handleSetProductData={handleSetProductData}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AdminPage
