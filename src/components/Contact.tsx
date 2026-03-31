import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Snackbar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ScheduleIcon from '@mui/icons-material/Schedule';

const inputSx = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': { border: 'none', borderBottom: '2px solid #e7e8ea' },
    '&:hover fieldset': { borderBottom: '2px solid #c5c6cf' },
    '&.Mui-focused fieldset': { border: 'none', borderBottom: '2px solid #775a10' },
    borderRadius: 0,
  },
};

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: boolean; phone?: boolean } = {};
    if (!name.trim()) newErrors.name = true;
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setShowSuccess(true);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <Box id="contacts" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#fff' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, lg: 10 } }}>
          <Box>
            <Typography variant="h3" sx={{ color: '#041534', mb: { xs: 3, md: 6 }, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
              Залишилися питання?
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 2, md: 3 } }}>
                <Box>
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#45464e', mb: 1 }}>
                    Ваше ім'я *
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Олександр"
                    variant="outlined"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: false })); }}
                    error={errors.name}
                    helperText={errors.name ? 'Введіть ваше ім\'я' : ''}
                    sx={inputSx}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#45464e', mb: 1 }}>
                    Телефон *
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="+38 (0__) ___-__-__"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: false })); }}
                    error={errors.phone}
                    helperText={errors.phone ? 'Введіть коректний номер' : ''}
                    sx={inputSx}
                  />
                </Box>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#45464e', mb: 1 }}>
                  Повідомлення
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Напишіть ваші побажання..."
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={inputSx}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#041534', color: '#fff',
                  py: { xs: 1.5, md: 2.5 },
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  '&:hover': { bgcolor: '#775a10' },
                }}
              >
                Надіслати запит
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography variant="h3" sx={{ color: '#041534', mb: { xs: 3, md: 6 }, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
              Наші контакти
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 }, mb: { xs: 4, md: 6 } }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#775a10', fontSize: { xs: 24, md: 30 } }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>Головний офіс</Typography>
                  <Typography sx={{ color: '#45464e', fontSize: { xs: '0.85rem', md: '1rem' } }}>м. Чернівці, вул. Ентузіастів, 5а</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <PhoneInTalkIcon sx={{ color: '#775a10', fontSize: { xs: 24, md: 30 } }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>Контакт-центр</Typography>
                  <Typography sx={{ color: '#45464e', fontSize: { xs: '0.85rem', md: '1rem' } }}>+38 (044) 123-45-67</Typography>
                  <Typography sx={{ color: '#45464e', fontSize: { xs: '0.85rem', md: '1rem' } }}>+38 (067) 890-12-34</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <ScheduleIcon sx={{ color: '#775a10', fontSize: { xs: 24, md: 30 } }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>Графік роботи</Typography>
                  <Typography sx={{ color: '#45464e', fontSize: { xs: '0.85rem', md: '1rem' } }}>Пн-Пт: 09:00 – 19:00, Сб: 10:00 – 16:00</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: '100%', height: { xs: 220, md: 256 }, borderRadius: '16px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.5!2d25.9518802!3d48.2587333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340f2bac9e2065%3A0xe12f3c85ef635e80!2z0LLRg9C7LiDQldC90YLRg9C30ZbQsNGB0YLRltCyLCA10LAsINCn0LXRgNC90ZbQstGG0ZY!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Наш офіс на карті"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={5000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success" variant="filled" sx={{ width: '100%', bgcolor: '#775a10' }}>
          Дякуємо! Ваш запит надіслано. Ми зв'яжемось з вами найближчим часом.
        </Alert>
      </Snackbar>
    </Box>
  );
}
