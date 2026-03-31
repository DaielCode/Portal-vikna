import { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, Alert, Snackbar } from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';

const productTypes = [
  'Вікна ПВХ',
  'Двері вхідні',
  'Двері міжкімнатні',
  'Балкон під ключ',
  'Ролети захисні',
  'Розсувні системи',
  'Скління тераси/веранди',
];

const housingTypes = [
  'Квартира в новобудові',
  'Квартира (вторинний фонд)',
  'Приватний будинок',
  'Котедж / таунхаус',
  'Офіс / комерційне приміщення',
];

const inputSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: '#fff',
    borderRadius: '12px',
    '& fieldset': { borderColor: '#e1e2e4' },
    '&:hover fieldset': { borderColor: '#c5c6cf' },
    '&.Mui-focused fieldset': { borderColor: '#775a10' },
  },
};

const selectSx = {
  bgcolor: '#fff',
  borderRadius: '12px',
  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e1e2e4' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#c5c6cf' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#775a10' },
};

export default function OrderMeasurement() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [product, setProduct] = useState('');
  const [housing, setHousing] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!name.trim()) newErrors.name = true;
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) newErrors.phone = true;
    if (!address.trim()) newErrors.address = true;
    if (!product) newErrors.product = true;
    if (!housing) newErrors.housing = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setShowSuccess(true);
    setName('');
    setPhone('');
    setAddress('');
    setProduct('');
    setHousing('');
  };

  return (
    <Box id="order" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#f3f4f6' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 4, lg: 8 },
            alignItems: { lg: 'center' },
          }}
        >
          {/* Left - info */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Box sx={{ width: 56, height: 56, borderRadius: '16px', bgcolor: '#fdd581', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <StraightenIcon sx={{ fontSize: 28, color: '#041534' }} />
              </Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#041534' }}>
                Замовити замір
              </Typography>
            </Box>
            <Typography sx={{ color: '#45464e', lineHeight: 1.7, mb: 3, fontSize: { xs: '0.9rem', md: '1rem' } }}>
              Наш спеціаліст приїде до вас у зручний час, проведе точні виміри та надасть професійну консультацію — абсолютно безкоштовно.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                'Виїзд майстра протягом 24 годин',
                'Точний розрахунок вартості на місці',
                'Рекомендації щодо оптимального рішення',
              ].map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#775a10', flexShrink: 0 }} />
                  <Typography sx={{ color: '#45464e', fontSize: '0.9rem' }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right - form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              bgcolor: '#fff',
              borderRadius: '24px',
              p: { xs: 3, md: 5 },
              boxShadow: '0 8px 32px rgba(4,21,52,0.06)',
            }}
          >
            <Typography sx={{ fontFamily: '"Manrope"', fontWeight: 700, fontSize: '1.2rem', color: '#041534', mb: 3, textAlign: 'center' }}>
              Заповніть форму — ми зателефонуємо
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Ваше ім'я *"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: false })); }}
                  error={errors.name}
                  helperText={errors.name ? 'Обов\'язкове поле' : ''}
                  sx={inputSx}
                />
                <TextField
                  fullWidth
                  placeholder="Телефон *"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: false })); }}
                  error={errors.phone}
                  helperText={errors.phone ? 'Введіть коректний номер' : ''}
                  sx={inputSx}
                />
              </Box>

              <TextField
                fullWidth
                placeholder="Адреса об'єкта *"
                value={address}
                onChange={(e) => { setAddress(e.target.value); setErrors((p) => ({ ...p, address: false })); }}
                error={errors.address}
                helperText={errors.address ? 'Вкажіть адресу' : ''}
                sx={inputSx}
              />

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                <FormControl fullWidth error={errors.product}>
                  <Select
                    value={product}
                    onChange={(e) => { setProduct(e.target.value); setErrors((p) => ({ ...p, product: false })); }}
                    displayEmpty
                    sx={selectSx}
                  >
                    <MenuItem value="" disabled>Що замовляєте? *</MenuItem>
                    {productTypes.map((t) => (
                      <MenuItem key={t} value={t}>{t}</MenuItem>
                    ))}
                  </Select>
                  {errors.product && <Typography sx={{ color: '#d32f2f', fontSize: '0.75rem', mt: 0.5, ml: 1.5 }}>Оберіть тип</Typography>}
                </FormControl>

                <FormControl fullWidth error={errors.housing}>
                  <Select
                    value={housing}
                    onChange={(e) => { setHousing(e.target.value); setErrors((p) => ({ ...p, housing: false })); }}
                    displayEmpty
                    sx={selectSx}
                  >
                    <MenuItem value="" disabled>Тип приміщення *</MenuItem>
                    {housingTypes.map((t) => (
                      <MenuItem key={t} value={t}>{t}</MenuItem>
                    ))}
                  </Select>
                  {errors.housing && <Typography sx={{ color: '#d32f2f', fontSize: '0.75rem', mt: 0.5, ml: 1.5 }}>Оберіть тип</Typography>}
                </FormControl>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#775a10',
                  color: '#fff',
                  py: 2,
                  fontSize: '1rem',
                  mt: 1,
                  '&:hover': { bgcolor: '#041534' },
                }}
              >
                Замовити безкоштовний замір
              </Button>
              <Typography sx={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem' }}>
                Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbar open={showSuccess} autoHideDuration={5000} onClose={() => setShowSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setShowSuccess(false)} severity="success" variant="filled" sx={{ width: '100%', bgcolor: '#775a10' }}>
          Дякуємо! Замір оформлено. Очікуйте дзвінок протягом 15 хвилин.
        </Alert>
      </Snackbar>
    </Box>
  );
}
