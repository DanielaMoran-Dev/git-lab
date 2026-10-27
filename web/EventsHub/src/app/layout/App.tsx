import { Box, Container, CssBaseline, Typography } from '@mui/material'
import { useState } from 'react'
import NavBar from './NavBar'
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard'
import { useActivities } from '../../lib/hooks/useActivities'

function App() {
  const [selectedActivityId, setSelectedActivityId] = useState<string>()
  const [editMode, setEditMode] = useState(false)
  const { activities, isPending } = useActivities()

  const selectedActivity = activities?.find(
    (activity) => activity.id === selectedActivityId,
  )

  const handleSelectActivity = (id: string) => {
    setSelectedActivityId(id)
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivityId(undefined)
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id)
    else handleCancelSelectActivity()
    setEditMode(true)
  }

  const handleFormClose = () => {
    setEditMode(false)
  }

  return (
    <Box sx={{ bgcolor: '#dff2eb', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ marginTop: 3.5 }}>
        {!activities || isPending ? (
          <Typography>loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
          />
        )}
      </Container>
    </Box>
  )
}

export default App
