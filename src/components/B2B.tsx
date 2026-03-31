import { Box, Typography, Button } from '@mui/material';
import { scrollToSection } from '../utils/scrollTo';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  {
    title: 'Спеціальне ціноутворення',
    desc: 'Індивідуальні об\'єктні знижки залежно від обсягу замовлення.',
  },
  {
    title: 'Технічний супровід',
    desc: 'Проектування конструкцій та підготовка технічної документації.',
  },
];

export default function B2B() {
  return (
    <Box
      id="b2b"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#041534',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, position: 'relative', zIndex: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: 6, lg: 10 }, alignItems: 'center' }}>
          {/* Left - text content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: '#fdd581',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                mb: 3,
              }}
            >
              Партнерство
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 3,
                lineHeight: 1.15,
              }}
            >
              Для забудовників та будівельних компаній
            </Typography>
            <Typography
              sx={{
                color: 'rgba(217,226,255,0.8)',
                fontSize: '1rem',
                mb: 5,
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              Пропонуємо спеціальні умови співпраці для професійних учасників ринку. Комплексне скління об'єктів будь-якої складності з дотриманням термінів та стандартів якості.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 5 }}>
              {features.map((f) => (
                <Box key={f.title} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 24, mt: 0.3 }} />
                  <Box>
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem', mb: 0.5 }}>
                      {f.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(217,226,255,0.7)', fontSize: '0.9rem' }}>
                      {f.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('#contacts')}
              sx={{
                borderColor: '#fff',
                color: '#fff',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderWidth: 2,
                borderRadius: '12px',
                '&:hover': { bgcolor: '#fff', color: '#041534', borderColor: '#fff' },
              }}
            >
              Стати партнером
            </Button>
          </Box>

          {/* Right - image with badge */}
          <Box sx={{ flex: 1, position: 'relative', width: '100%' }}>
            <Box
              component="img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvRXr6Fj98EPgXTuKEtjVcsWixyjiZAA4DyDEvpH9D6FfETpcPvvhyvKIEWJ0_JLF05jbUPV7An1T9uzrxZaz6vE1OWzCghI8z7kzlK09webLdilwUU03IRFTA4lrNNf0lM8QbIaugtfy-_U9RooU_KE3yovYq6oX8MUlD-vQPtUNct53_ZOXhza5jgu-IVIJpoEwAMI1zSmCSqi54jCN_83rejWGCtr54s3Zd5eeKKONd6Ev3f7ofx0quzJeBD1XLBJao8WYPQfCw"
              alt="Modern house with premium windows"
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
            {/* Badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 24,
                right: 24,
                bgcolor: 'rgba(4,21,52,0.85)',
                backdropFilter: 'blur(16px)',
                borderRadius: '16px',
                px: 4,
                py: 3,
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Typography sx={{ color: '#fff', fontFamily: '"Manrope"', fontWeight: 800, fontSize: '2.2rem', lineHeight: 1 }}>
                15+
              </Typography>
              <Typography sx={{ color: 'rgba(217,226,255,0.8)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mt: 0.5 }}>
                років досвіду в B2B
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
