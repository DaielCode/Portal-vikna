import { Box, Typography, Button } from '@mui/material';
import { scrollToSection } from '../utils/scrollTo';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import TuneIcon from '@mui/icons-material/Tune';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const reasons = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 32 }} />,
    title: 'Досвід з 2009 року',
    desc: 'Понад 15 років на ринку. Тисячі задоволених клієнтів по всій Україні.',
    accent: false,
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    title: 'Власна команда',
    desc: 'Штатні сертифіковані бригади, а не випадкові субпідрядники.',
    accent: false,
  },
  {
    icon: <TuneIcon sx={{ fontSize: 32 }} />,
    title: 'Індивідуальний підхід',
    desc: 'Кожен проект — унікальний. Розрахунок під особливості вашого об\'єкта.',
    accent: false,
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 32 }} />,
    title: 'Безкоштовна доставка',
    desc: 'Доставка по Чернівцях та області при замовленні від 10 000 грн.',
    accent: false,
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 32 }} />,
    title: 'Гарантія 5 років',
    desc: 'Письмова гарантія на конструкції та всі монтажні роботи.',
    accent: true,
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
    title: 'Широкий асортимент',
    desc: 'REHAU, WDS, Winkhaus — рішення під будь-який бюджет та стиль.',
    accent: false,
  },
  {
    icon: <PriceCheckIcon sx={{ fontSize: 32 }} />,
    title: 'Прозорі ціни',
    desc: 'Фіксована ціна в договорі. Жодних прихованих доплат.',
    accent: false,
  },
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 32 }} />,
    title: 'Підтримка 24/7',
    desc: 'Сервіс, регулювання та консультації — безкоштовно протягом гарантії.',
    accent: false,
  },
];

export default function WhyUs() {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background shapes */}
      <Box sx={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, borderRadius: '50%', bgcolor: 'rgba(253,213,129,0.08)' }} />
      <Box sx={{ position: 'absolute', bottom: -80, left: -80, width: 250, height: 250, borderRadius: '50%', bgcolor: 'rgba(4,21,52,0.03)' }} />

      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            sx={{
              color: '#775a10',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              mb: 2,
            }}
          >
            Наші переваги
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              color: '#041534',
              mb: 2,
            }}
          >
            Чому обирають Portal
          </Typography>
          <Typography
            sx={{
              color: '#45464e',
              maxWidth: 520,
              mx: 'auto',
              fontSize: { xs: '0.9rem', md: '1.05rem' },
              lineHeight: 1.7,
            }}
          >
            Ми не просто встановлюємо вікна — ми створюємо комфорт, який відчувається щодня.
          </Typography>
        </Box>

        {/* Cards grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 2, md: 3 },
            mb: { xs: 5, md: 8 },
          }}
        >
          {reasons.map((r) => (
            <Box
              key={r.title}
              sx={{
                textAlign: 'center',
                p: { xs: 3, md: 3.5 },
                borderRadius: '20px',
                bgcolor: r.accent ? '#041534' : '#f8f9fb',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'default',
                border: '1px solid transparent',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: r.accent
                    ? '0 20px 40px rgba(4,21,52,0.3)'
                    : '0 16px 40px rgba(4,21,52,0.1)',
                  borderColor: r.accent ? 'transparent' : 'rgba(119,90,16,0.15)',
                },
                '&:hover .why-icon': {
                  bgcolor: r.accent ? '#fdd581' : '#775a10',
                  color: r.accent ? '#041534' : '#fff',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Box
                className="why-icon"
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '16px',
                  bgcolor: r.accent ? 'rgba(255,255,255,0.1)' : '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: r.accent ? '#fdd581' : '#775a10',
                  mx: 'auto',
                  mb: 2.5,
                  transition: 'all 0.3s',
                  boxShadow: r.accent ? 'none' : '0 2px 8px rgba(4,21,52,0.06)',
                }}
              >
                {r.icon}
              </Box>
              <Typography
                sx={{
                  fontFamily: '"Manrope"',
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  color: r.accent ? '#fff' : '#041534',
                  mb: 1,
                }}
              >
                {r.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: r.accent ? 'rgba(217,226,255,0.7)' : '#45464e',
                  lineHeight: 1.55,
                  fontSize: '0.82rem',
                }}
              >
                {r.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTA Banner */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #041534 0%, #1b2a4a 100%)',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 3, md: 4 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circle */}
          <Box sx={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(253,213,129,0.06)' }} />
          <Box sx={{ position: 'absolute', left: '30%', bottom: -60, width: 150, height: 150, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.03)' }} />

          <Box sx={{ position: 'relative', zIndex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              sx={{
                fontFamily: '"Manrope"',
                fontWeight: 800,
                fontSize: { xs: '1.3rem', md: '1.6rem' },
                color: '#fff',
                mb: 1,
              }}
            >
              Готові до змін? Отримайте безкоштовну консультацію!
            </Typography>
            <Typography sx={{ color: 'rgba(217,226,255,0.7)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
              Наш спеціаліст зателефонує вам протягом 15 хвилин та допоможе підібрати оптимальне рішення.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, flexShrink: 0, position: 'relative', zIndex: 1 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PhoneInTalkIcon />}
              onClick={() => scrollToSection('#contacts')}
              sx={{
                bgcolor: '#fdd581',
                color: '#041534',
                px: 4,
                py: 1.5,
                fontSize: '0.95rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                '&:hover': { bgcolor: '#fff', color: '#041534' },
              }}
            >
              Замовити дзвінок
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('#calculator')}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
                px: 4,
                py: 1.5,
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
                borderWidth: 2,
                '&:hover': { bgcolor: '#fff', color: '#041534', borderColor: '#fff' },
              }}
            >
              Розрахувати вартість
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
