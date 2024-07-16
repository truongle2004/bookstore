import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function ReadMoreAndLess({ desc }) {
  const [expanded, setExpanded] = useState(false)

  const showFullDescriptionHandler = () => {
    setExpanded((prev) => !prev)
  }

  const description = expanded ? desc : desc.slice(0, 1000)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      <Typography
        sx={{
          maxHeight: expanded ? 'none' : '100px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease'
        }}
      >
        {description}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        onClick={showFullDescriptionHandler}
        style={{ marginTop: '8px', alignSelf: 'center' }}
      >
        Read {expanded ? 'Less' : 'More'}
      </Button>
    </Box>
  )
}

export default ReadMoreAndLess
