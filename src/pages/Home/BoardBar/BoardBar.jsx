import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

function BoardBar() {
  return (
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
            pt: '10px',
            fontSize: '18px',
            fontWeight: '700'
          }}
        >
          WareHouse
        </Typography>
      </Stack>
    </Box>
  )
}

export default BoardBar
