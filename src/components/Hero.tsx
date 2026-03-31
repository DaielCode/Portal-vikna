import { Box, Typography, Button, Chip } from '@mui/material';
import { scrollToSection } from '../utils/scrollTo';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 'auto', md: 870 },
        minHeight: { xs: 500, md: 870 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        py: { xs: 8, md: 0 },
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box
          component="img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEuSZvjGF6Nu8HflUOpW7HP8lVvbj6uaC-l8ohbMJAxd6xRhXic9OR-4b5gpH1qWyndWHfHRviwyNDBwNfBSM_IfX0fK2I7mkZXYOZ5zzeuFGe0ZGpM3Ot6hfKouOy8nmGsTU-XRiHMqSSEzzUfVWEDn9y0b4YAejWNMaTdNK5v7tTQzVIkX8nTT_LNfyFgPU3i45jyydomSd0iTZtKmZKIuHFtp-dAUndYxIVnoBw5lCdMETBqXV6Bx4A1zi662CpgNV74qGdSvFq"
          alt="Modern luxury house with floor-to-ceiling glass windows"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(4,21,52,0.4)', backdropFilter: 'brightness(0.75)' }} />
      </Box>
      <Box sx={{ position: 'relative', zIndex: 10, maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, width: '100%' }}>
        <Box sx={{ maxWidth: { xs: '100%', md: 720 } }}>
          <Chip
            label="Преміум рішення"
            sx={{
              bgcolor: '#fdd581',
              color: '#5b4300',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              mb: { xs: 2, md: 3 },
              borderRadius: '4px',
            }}
          />
          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
              lineHeight: 1.1,
              mb: { xs: 2, md: 4 },
            }}
          >
            Якісні вікна, двері та балкони —{' '}
            <Box component="span" sx={{ color: '#ffdf9e' }}>
              продаж та монтаж
            </Box>
          </Typography>
          <Typography
            sx={{
              color: '#d9e2ff',
              fontSize: { xs: '0.95rem', md: '1.35rem' },
              mb: { xs: 4, md: 6 },
              maxWidth: 540,
              lineHeight: 1.6,
            }}
          >
            Професійний монтаж та безкоштовний замір. Створюємо затишок та енергоефективність вашого дому.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              fullWidth={false}
              onClick={() => scrollToSection('#calculator')}
              sx={{
                bgcolor: '#775a10',
                color: '#fff',
                px: { xs: 3, md: 4 },
                py: 1.5,
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                boxShadow: '0 12px 24px rgba(119,90,16,0.2)',
                '&:hover': { bgcolor: '#8a6a1a', filter: 'brightness(1.1)' },
              }}
            >
              Розрахувати вартість
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('#order')}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
                px: { xs: 3, md: 4 },
                py: 1.5,
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                backdropFilter: 'blur(12px)',
                borderWidth: 2,
                '&:hover': { bgcolor: '#fff', color: '#041534', borderColor: '#fff' },
              }}
            >
              Замовити замір
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
