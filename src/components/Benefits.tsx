import { Box, Typography, Button } from '@mui/material';
import { scrollToSection } from '../utils/scrollTo';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SpeedIcon from '@mui/icons-material/Speed';
import SavingsIcon from '@mui/icons-material/Savings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const benefits = [
  { icon: <VerifiedIcon sx={{ fontSize: 28 }} />, title: 'Офіційний дилер', desc: 'Напряму від заводів REHAU, WDS та Winkhaus.' },
  { icon: <SecurityIcon sx={{ fontSize: 28 }} />, title: '5 років гарантії', desc: 'На конструкції та монтажні роботи.' },
  { icon: <EngineeringIcon sx={{ fontSize: 28 }} />, title: 'Власний монтаж', desc: 'Досвід понад 10 років, регулярна сертифікація.' },
  { icon: <SpeedIcon sx={{ fontSize: 28 }} />, title: 'Від 5 днів', desc: 'Виготовлення стандартних конструкцій.' },
  { icon: <SavingsIcon sx={{ fontSize: 28 }} />, title: 'Чесна ціна', desc: 'Прозора система без прихованих платежів.' },
  { icon: <SupportAgentIcon sx={{ fontSize: 28 }} />, title: 'Сервіс 24/7', desc: 'Завжди на зв\'язку для вашого комфорту.' },
];

export default function Benefits() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(180deg, #f8f9fb 0%, #eef0f4 100%)', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, color: '#041534', mb: 1.5 }}>
            Що ви отримуєте
          </Typography>
          <Typography sx={{ color: '#45464e', maxWidth: 460, mx: 'auto', fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Кожен клієнт Portal отримує повний комплекс послуг та увагу до деталей.
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: { xs: 2, md: 3 }, mb: { xs: 4, md: 6 } }}>
          {benefits.map((b) => (
            <Box key={b.title} sx={{ display: 'flex', gap: 2.5, p: { xs: 2.5, md: 3 }, borderRadius: '16px', bgcolor: '#fff', transition: 'all 0.3s', border: '1px solid transparent', '&:hover': { boxShadow: '0 8px 24px rgba(4,21,52,0.08)', borderColor: 'rgba(119,90,16,0.12)', transform: 'translateY(-2px)' }, '&:hover .benefit-icon': { bgcolor: '#775a10', color: '#fff' } }}>
              <Box className="benefit-icon" sx={{ flexShrink: 0, width: 52, height: 52, bgcolor: '#f3f4f6', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#775a10', transition: 'all 0.3s' }}>
                {b.icon}
              </Box>
              <Box>
                <Typography sx={{ fontFamily: '"Manrope"', fontWeight: 700, fontSize: '0.95rem', color: '#041534', mb: 0.5 }}>{b.title}</Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.5 }}>{b.desc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: '#45464e', mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Хочете дізнатися більше? Ми відповімо на всі ваші запитання.
          </Typography>
          <Button variant="contained" onClick={() => scrollToSection('#contacts')} sx={{ bgcolor: '#041534', color: '#fff', px: 4, py: 1.5, fontSize: '0.95rem', '&:hover': { bgcolor: '#775a10' } }}>
            Отримати консультацію
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
