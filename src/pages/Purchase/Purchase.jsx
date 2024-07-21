import {
  default as Check,
  default as CheckIcon
} from '@mui/icons-material/Check'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Step from '@mui/material/Step'
import StepConnector, {
  stepConnectorClasses
} from '@mui/material/StepConnector'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4'
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  }
}))

function QontoStepIcon(props) {
  const { active, completed, className } = props

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  )
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1
  }
}))

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  })
}))

function ColorlibStepIcon(props) {
  const { active, completed, className } = props

  const icons = {
    1: <Inventory2Icon />,
    2: <LocalShippingIcon />,
    3: <DeliveryDiningIcon />
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
}

const steps = ['Are preparing', 'Are delivering', 'Are shipping']

export default function Purchase() {
  const listProduct = useSelector((state) => state.ListProducts.productsBuyNow)

  if (!listProduct) {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    )
  }

  return (
    <Container
      maxWidth={'xl'}
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {listProduct.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Stack sx={{ width: '100%', py: 10 }} spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={0}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Bill</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listProduct.map((value) => (
                  <TableRow
                    key={value.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={`${value.img}`}
                        style={{
                          width: '80px',
                          height: '80px'
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">{value.quantity}</TableCell>
                    <TableCell align="right">{value.price}</TableCell>
                    <TableCell align="right">
                      {value.quantity * value.price}
                    </TableCell>
                    <TableCell align="right">Processing</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Container>
  )
}
