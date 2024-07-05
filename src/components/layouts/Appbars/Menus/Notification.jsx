import NotificationsIcon from '@mui/icons-material/Notifications'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

function Notification() {
  return (
    <Stack direction="column" alignItems="center">
      <NotificationsIcon
        sx={{
          cursor: 'pointer'
        }}
      />
      <Typography
        sx={{
          fontSize: '12px'
        }}
      >
        Notification
      </Typography>
    </Stack>
  )
}

export default Notification
