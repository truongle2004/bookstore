import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function Info(props) {
  const { formValues, handleChange } = props

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
          label={formValues.title}
          onChange={handleChange}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Publisher</Typography>
        <TextField
          margin="dense"
          id="publisher"
          name="publisher"
          label={formValues.publisher}
          onChange={handleChange}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Published By</Typography>
        <TextField
          margin="dense"
          id="publishedBy"
          name="publishedBy"
          label={formValues.publisherBy}
          onChange={handleChange}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Author</Typography>
        <TextField
          margin="dense"
          id="author"
          name="author"
          label={formValues.author}
          onChange={handleChange}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Number of Pages</Typography>
        <TextField
          margin="dense"
          id="numberOfPages"
          name="numberOfPages"
          label={formValues.numberOfPages}
          onChange={handleChange}
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
        <Typography>Cover Type</Typography>
        <TextField
          margin="dense"
          id="coverType"
          name="coverType"
          onChange={handleChange}
          label={formValues.coverType}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Publishing Year</Typography>
        <TextField
          margin="dense"
          id="publishingYear"
          name="publishingYear"
          onChange={handleChange}
          label={formValues.publishingYear}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Language</Typography>
        <TextField
          margin="dense"
          id="language"
          name="language"
          label={formValues.language}
          onChange={handleChange}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Supplier</Typography>
        <TextField
          margin="dense"
          id="supplier"
          name="supplier"
          label={formValues.supplier}
          onChange={handleChange}
          type="text"
          fullWidth
          variant="outlined"
        />

        <Typography>Packaging Size</Typography>
        <TextField
          margin="dense"
          id="packagingSize"
          name="packagingSize"
          label={formValues.packagingSize}
          onChange={handleChange}
          type="text"
          fullWidth
          variant="outlined"
        />
      </Box>
    </Box>
  )
}
