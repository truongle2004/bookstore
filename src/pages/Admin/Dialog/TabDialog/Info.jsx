import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

export default function Info(props) {
  const { productData } = props
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5
      }}
    >
      <Box
        sx={{
          width: (theme) => theme.widthTextField
        }}
      >
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

        <Typography>Publisher</Typography>
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

        <Typography>Number of Pages</Typography>
        <TextField
          autoFocus
          margin="dense"
          id="coverType"
          name="coverType"
          label={productData.numberOfPages}
          type="text"
          fullWidth
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          width: (theme) => theme.widthTextField
        }}
      >
        <Typography>Cover type</Typography>
        <TextField
          autoFocus
          margin="dense"
          id="coverType"
          name="coverType"
          label={productData.coverType}
          type="text"
          fullWidth
          variant="outlined"
        />
        <Typography>Publishing Year</Typography>
        <TextField
          autoFocus
          margin="dense"
          id="price"
          name="price"
          label={productData.publishingYear}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Language</Typography>
        <TextField
          autoFocus
          margin="dense"
          id="publisher"
          name="publisher"
          label={productData.language}
          type="text"
          fullWidth
          variant="outlined"
        />
        <Typography>Supplier</Typography>
        <TextField
          autoFocus
          margin="dense"
          id="publishedBy"
          name="publishedBy"
          label={productData.supplier}
          type="text"
          fullWidth
          variant="outlined"
        />
        <Typography>Packaging Size</Typography>
        <TextField
          autoFocus
          margin="dense"
          id="author"
          name="author"
          label={productData.packagingSize}
          type="text"
          fullWidth
          variant="outlined"
        />
      </Box>
    </Box>
  )
}
