import { Group } from '@mui/icons-material'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import styles from './HomePage.module.scss'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundSize: '200% 200%',
        animation: 'purpleGlow 18s ease-in-out infinite alternate',
        '@keyframes purpleGlow': {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '100% 50%' },
        },
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        backgroundImage: 'linear-gradient(135deg, #31205b, #713b9c, #493078)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          color: 'white',
          gap: 3,
        }}
      >
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant="h1">Activities Hub</Typography>
      </Box>
      <Typography variant="h2">Welcome</Typography>
      <Box
        className={styles.haloButton}
        sx={{ display: 'inline-block', borderRadius: 1 }}
      >
        <Button
          onClick={() => navigate('/activities')}
          size="large"
          variant="contained"
          sx={{ height: 80, borderRadius: 4, fontSize: '1.5rem' }}
        >
          Let's go to the activities!
        </Button>
      </Box>
    </Paper>
  )
}
