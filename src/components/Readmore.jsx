import makeStyles from '@mui/styles/makeStyles'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  content: {
    maxHeight: (props) => (props.expanded ? 'none' : '100px'),
    overflow: 'hidden',
    transition: 'max-height 0.3s ease'
  },
  button: {
    marginTop: theme.spacing(1),
    alignSelf: 'center'
  }
}))

function ReadMore({ text }) {
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles({ expanded })

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.content}>
        {text}
      </Typography>
      <Button onClick={handleToggle} className={classes.button}>
        {expanded ? 'Read Less' : 'Read More'}
      </Button>
    </div>
  )
}

export default ReadMore
