import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Link, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';

const navItems = [
  { label: 'Продукція', href: '#products' },
  { label: 'Калькулятор', href: '#calculator' },
  { label: 'Портфоліо', href: '#portfolio' },
  { label: 'B2B', href: '#b2b' },
  { label: 'Замір', href: '#order' },
  { label: 'Контакти', href: '#contacts' },
];

// Map section IDs to nav hrefs for scroll spy
const sectionIds = ['contacts', 'order', 'b2b', 'portfolio', 'calculator', 'products'];

export default function Navbar() {
  const [active, setActive] = useState('#products');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll spy using IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive('#' + entry.target.id);
        }
      }
    };

    // Observe from bottom to top so topmost visible wins
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const navbarHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 1px 3px rgba(4,21,52,0.06)',
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, mx: 'auto', width: '100%', px: { xs: 2, md: 4 }, py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 6 }, flexGrow: 1 }}>
            <Typography
              variant="h5"
              sx={{ fontFamily: '"Manrope"', fontWeight: 800, color: '#041534', letterSpacing: '-0.03em', cursor: 'pointer', fontSize: { xs: '1.2rem', md: '1.5rem' } }}
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}
            >
              Portal
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  onClick={(e) => handleClick(e, item.href)}
                  sx={{
                    color: active === item.href ? '#041534' : '#64748b',
                    fontWeight: active === item.href ? 700 : 400,
                    fontSize: '0.85rem',
                    borderBottom: active === item.href ? '2px solid #fdd581' : '2px solid transparent',
                    pb: 0.5,
                    '&:hover': { color: '#041534' },
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
            <Link
              href="tel:+380441234567"
              underline="none"
              sx={{
                display: { xs: 'none', lg: 'block' },
                color: '#041534',
                fontFamily: '"Manrope"',
                fontWeight: 700,
              }}
            >
              +38 (044) 123-45-67
            </Link>
            <IconButton
              href="tel:+380441234567"
              sx={{ display: { xs: 'flex', lg: 'none' }, color: '#041534' }}
            >
              <PhoneIcon />
            </IconButton>
            <Button
              variant="contained"
              onClick={() => scrollTo('#contacts')}
              sx={{
                bgcolor: '#041534',
                color: '#fff',
                px: { xs: 2, md: 3 },
                py: 1,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                display: { xs: 'none', sm: 'inline-flex' },
                '&:hover': { bgcolor: '#775a10' },
              }}
            >
              Замовити дзвінок
            </Button>
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#041534' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 280, bgcolor: '#fff' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #f3f4f6' }}>
          <Typography sx={{ fontFamily: '"Manrope"', fontWeight: 800, color: '#041534', fontSize: '1.2rem' }}>
            Portal
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => scrollTo(item.href)}
                sx={{
                  py: 1.5,
                  px: 3,
                  bgcolor: active === item.href ? '#f3f4f6' : 'transparent',
                  borderLeft: active === item.href ? '3px solid #fdd581' : '3px solid transparent',
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: active === item.href ? 700 : 400,
                    color: active === item.href ? '#041534' : '#64748b',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 3, mt: 'auto' }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => scrollTo('#contacts')}
            sx={{ bgcolor: '#041534', color: '#fff', py: 1.5, '&:hover': { bgcolor: '#775a10' } }}
          >
            Замовити дзвінок
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
