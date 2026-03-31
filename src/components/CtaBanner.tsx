import { Box, Typography, Button } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import { scrollToSection } from '../utils/scrollTo';

export default function CtaBanner() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: '#fdd581' }}>
      <Box
        sx={{
          maxWidth: 1280,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CalculateIcon sx={{ fontSize: 36, color: '#041534', display: { xs: 'none', md: 'block' } }} />
          <Box>
            <Typography sx={{ fontFamily: '"Manrope"', fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.3rem' }, color: '#041534' }}>
              Дізнайтеся вартість ваших вікон за 2 хвилини
            </Typography>
            <Typography sx={{ color: '#5b4300', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
              Безкоштовний розрахунок + знижка 10% при замовленні сьогодні
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          size="large"
          onClick={() => scrollToSection('#calculator')}
          sx={{
            bgcolor: '#041534',
            color: '#fff',
            px: 4,
            py: 1.5,
            fontSize: '0.95rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            '&:hover': { bgcolor: '#1b2a4a' },
          }}
        >
          Розрахувати зараз
        </Button>
      </Box>
    </Box>
  );
}
