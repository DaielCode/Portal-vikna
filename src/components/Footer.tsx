import { Box, Typography, Link } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { scrollToSection } from '../utils/scrollTo';

const footerSections = [
  {
    title: 'Продукція',
    links: [
      { label: 'Пластикові вікна', href: '#products' },
      { label: 'Розсувні системи', href: '#products' },
      { label: 'Балкони та лоджії', href: '#products' },
      { label: 'Двері та ролети', href: '#products' },
    ],
  },
  {
    title: 'Сервіс',
    links: [
      { label: 'Безкоштовний замір', href: '#order' },
      { label: 'Калькулятор вартості', href: '#calculator' },
      { label: 'Наші проекти', href: '#portfolio' },
      { label: 'Для бізнесу (B2B)', href: '#b2b' },
    ],
  },
  {
    title: 'Компанія',
    links: [
      { label: 'Про нас', href: '#products' },
      { label: 'Наші переваги', href: '#products' },
      { label: 'Портфоліо', href: '#portfolio' },
      { label: 'Контакти', href: '#contacts' },
    ],
  },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid rgba(226,232,240,0.5)', bgcolor: '#f8fafc' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 }, display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 3, md: 4 } }}>
        <Box sx={{ gridColumn: { xs: 'span 2', md: 'span 1' } }}>
          <Typography
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{ fontFamily: '"Manrope"', fontWeight: 700, fontSize: '1.5rem', color: '#1e3a5f', mb: 2, cursor: 'pointer' }}
          >
            Portal
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, mb: 2 }}>
            Проектування та встановлення преміальних віконних систем для вашого комфорту.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', cursor: 'pointer', color: '#041534', '&:hover': { color: '#775a10' } }}>
              <LeaderboardIcon fontSize="small" />
            </Box>
            <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', cursor: 'pointer', color: '#041534', '&:hover': { color: '#775a10' } }}>
              <CameraAltIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
        {footerSections.map((section) => (
          <Box key={section.title}>
            <Typography sx={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', fontWeight: 700, mb: 2 }}>
              {section.title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="hover"
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  sx={{ color: '#64748b', fontSize: { xs: '0.8rem', md: '0.9rem' }, '&:hover': { color: '#1e3a5f' }, cursor: 'pointer' }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 3, md: 4 }, borderTop: '1px solid rgba(226,232,240,0.5)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2 }}>
        <Typography variant="body2" sx={{ color: '#64748b', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
          © 2024 Portal. Архітектурні рішення для вашого дому.
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
          <Link href="#" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.75rem', '&:hover': { color: '#041534' } }}>
            Політика конфіденційності
          </Link>
          <Link href="#" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.75rem', '&:hover': { color: '#041534' } }}>
            Публічна оферта
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
