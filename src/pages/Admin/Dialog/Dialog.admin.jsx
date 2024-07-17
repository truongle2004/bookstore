import { Typography } from '@mui/material'
import { formatNumber } from '~/utils/formatNumber'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import * as React from 'react'

function LabelTextField(productData) {
  return (
    <Box>
      <Typography>Title</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="title"
        name="title"
        label={productData.title}
        type="text"
        fullWidth
        variant="outlined"
      />
    </Box>
  )
}
function FormDialogAdmin(props) {
  const { openFormEdit, handleCloseFormEdit, productData } = props
  //const handleSetNewValue = (pre, new) => {
  //
  //}

  return (
    <React.Fragment>
      <Dialog open={openFormEdit}>
        <DialogTitle>Form Edit Product</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            gap: 3
          }}
        >
          {/* <Box> */}
          {/*   <Typography>Title</Typography> */}
          {/*   <TextField */}
          {/*     autoFocus */}
          {/*     margin="dense" */}
          {/*     id="title" */}
          {/*     name="title" */}
          {/*     label={productData.title} */}
          {/*     type="text" */}
          {/*     fullWidth */}
          {/*     variant="outlined" */}
          {/*   /> */}
          {/**/}
          {/*   <Typography>Publisher</Typography> */}
          {/*   <TextField */}
          {/*     autoFocus */}
          {/*     margin="dense" */}
          {/*     id="publisher" */}
          {/*     name="publisher" */}
          {/*     label={productData.publisher} */}
          {/*     type="text" */}
          {/*     fullWidth */}
          {/*     variant="outlined" */}
          {/*   /> */}
          {/*   <Typography>Publisher By</Typography> */}
          {/*   <TextField */}
          {/*     autoFocus */}
          {/*     margin="dense" */}
          {/*     id="publishedBy" */}
          {/*     name="publishedBy" */}
          {/*     label={productData.publisherBy} */}
          {/*     type="text" */}
          {/*     fullWidth */}
          {/*     variant="outlined" */}
          {/*   /> */}
          {/*   <Typography>Author</Typography> */}
          {/*   <TextField */}
          {/*     autoFocus */}
          {/*     margin="dense" */}
          {/*     id="author" */}
          {/*     name="author" */}
          {/*     label={productData.author} */}
          {/*     type="text" */}
          {/*     fullWidth */}
          {/*     variant="outlined" */}
          {/*   /> */}
          {/*   <Typography>Cover type</Typography> */}
          {/*   <TextField */}
          {/*     autoFocus */}
          {/*     margin="dense" */}
          {/*     id="coverType" */}
          {/*     name="coverType" */}
          {/*     label={productData.coverType} */}
          {/*     type="email" */}
          {/*     fullWidth */}
          {/*     variant="outlined" */}
          {/*   /> */}
          {/* </Box> */}
          <Box>
            <Typography>Price</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="price"
              name="price"
              label={formatNumber(productData.price)}
              type="text"
              fullWidth
              variant="outlined"
            />

            <Typography>originalPrice</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="publisher"
              name="publisher"
              label={productData.publisher}
              type="text"
              fullWidth
              variant="outlined"
            />
            <Typography>Publisher By</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="publishedBy"
              name="publishedBy"
              label={productData.publisherBy}
              type="text"
              fullWidth
              variant="outlined"
            />
            <Typography>Author</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="author"
              name="author"
              label={productData.author}
              type="text"
              fullWidth
              variant="outlined"
            />
            <Typography>Cover type</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="coverType"
              name="coverType"
              label={productData.coverType}
              type="email"
              fullWidth
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFormEdit}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default FormDialogAdmin
