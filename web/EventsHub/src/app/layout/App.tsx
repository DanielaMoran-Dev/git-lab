import { Box, Container, CssBaseline } from '@mui/material'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

function App() {
  return (
    <Box sx={{ bgcolor: '#dff2eb', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ marginTop: 3.5 }}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default App
