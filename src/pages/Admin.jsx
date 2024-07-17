import FastfoodIcon from '@mui/icons-material/Fastfood'
import HotelIcon from '@mui/icons-material/Hotel'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import RepeatIcon from '@mui/icons-material/Repeat'
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

const BOX_HEIGH = 700

const columns = [
  { field: 'id', headerName: 'ID', width: 70, type: 'number' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    renderCell: (params) => (
      <img
        src={params.row.imageUrl}
        alt="Profile"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    )
  }
]

const rows = [
  {
    id: 1,
    age: 35,
    imageUrl:
      'https://th.bing.com/th/id/OIP.KdRE7KHqL-46M8nrvOX2CgHaHa?rs=1&pid=ImgDetMain'
  }
  //{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
]

function ControlledSelectionGrid() {
  return (
    <div style={{ height: 400, width: '600px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={(ids) => {
          //setSelectedRows(selectedRows)
        }}
      />
    </div>
  )
}

function AdminPage() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}
      >
        <Box
          sx={{
            height: BOX_HEIGH
          }}
        >
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                9:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        <Box
          sx={{
            height: BOX_HEIGH
          }}
        >
          <ControlledSelectionGrid />
        </Box>
      </Box>
    </Container>
  )
}

export default AdminPage
