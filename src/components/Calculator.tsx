import { useState, useRef, useCallback } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, FormControl, Slider } from '@mui/material';
import { scrollToSection } from '../utils/scrollTo';

const windowTypes = ['Одностулкове', 'Двостулкове', 'Трьохстулкове'];

const STEP = 50;
const WIDTH_MIN = 400;
const WIDTH_MAX = 3000;
const HEIGHT_MIN = 400;
const HEIGHT_MAX = 2500;

const inputFieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: '#1b2a4a', color: '#fff', borderRadius: '12px',
    '& fieldset': { border: 'none' },
    '&:hover fieldset': { border: 'none' },
    '&.Mui-focused fieldset': { border: '2px solid #775a10' },
  },
  '& input': { color: '#fff', textAlign: 'center' as const, fontWeight: 700, fontSize: '1.1rem' },
};

const sliderSx = {
  color: '#775a10',
  mt: 1.5,
  '& .MuiSlider-thumb': {
    width: 18,
    height: 18,
    bgcolor: '#fff',
    border: '3px solid #775a10',
    '&:hover, &.Mui-focusVisible': { boxShadow: '0 0 0 6px rgba(119,90,16,0.2)' },
  },
  '& .MuiSlider-track': { height: 4 },
  '& .MuiSlider-rail': { height: 4, bgcolor: 'rgba(255,255,255,0.15)' },
};

export default function Calculator() {
  const [selectedType, setSelectedType] = useState(1);
  const [width, setWidth] = useState(1300);
  const [height, setHeight] = useState(1400);

  const widthRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: React.WheelEvent, setter: React.Dispatch<React.SetStateAction<number>>, min: number, max: number) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? STEP : -STEP;
    setter((prev: number) => Math.min(max, Math.max(min, prev + delta)));
  }, []);

  return (
    <Box id="calculator" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#f3f4f6' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            bgcolor: '#041534',
            borderRadius: { xs: '16px', md: '24px' },
            overflow: 'hidden',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            boxShadow: '0 25px 50px rgba(4,21,52,0.2)',
          }}
        >
          <Box sx={{ p: { xs: 3, md: 6 }, flex: 1 }}>
            <Typography variant="h3" sx={{ color: '#fff', mb: { xs: 3, md: 4 }, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
              Онлайн-калькулятор
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
              <Box>
                <Typography sx={{ color: '#d9e2ff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1.5 }}>
                  Тип вікна
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1.5 }}>
                  {windowTypes.map((type, i) => (
                    <Button
                      key={type}
                      onClick={() => setSelectedType(i)}
                      sx={{
                        bgcolor: i === selectedType ? '#fff' : '#1b2a4a',
                        color: i === selectedType ? '#041534' : '#fff',
                        fontWeight: i === selectedType ? 700 : 400,
                        py: 1.5,
                        border: i === selectedType ? 'none' : '1px solid rgba(255,255,255,0.1)',
                        '&:hover': { borderColor: '#775a10', bgcolor: i === selectedType ? '#fff' : '#1b2a4a' },
                        fontSize: { xs: '0.75rem', md: '0.8rem' },
                      }}
                    >
                      {type}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* Width + Height with sliders */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: { xs: 2, md: 3 } }}>
                <Box
                  ref={widthRef}
                  onWheel={(e) => handleWheel(e, setWidth, WIDTH_MIN, WIDTH_MAX)}
                >
                  <Typography sx={{ color: '#d9e2ff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1.5 }}>
                    Ширина (мм)
                  </Typography>
                  <TextField
                    type="number"
                    value={width}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      if (!isNaN(v) && v >= 0) setWidth(v);
                      if (e.target.value === '') setWidth(0);
                    }}
                    fullWidth
                    slotProps={{ htmlInput: { min: 0, step: STEP } }}
                    sx={inputFieldSx}
                  />
                  <Slider
                    value={width}
                    onChange={(_, v) => setWidth(v as number)}
                    min={WIDTH_MIN}
                    max={WIDTH_MAX}
                    step={STEP}
                    sx={sliderSx}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: 'rgba(217,226,255,0.4)', fontSize: '0.65rem' }}>{WIDTH_MIN}</Typography>
                    <Typography sx={{ color: 'rgba(217,226,255,0.4)', fontSize: '0.65rem' }}>{WIDTH_MAX}</Typography>
                  </Box>
                </Box>
                <Box
                  ref={heightRef}
                  onWheel={(e) => handleWheel(e, setHeight, HEIGHT_MIN, HEIGHT_MAX)}
                >
                  <Typography sx={{ color: '#d9e2ff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1.5 }}>
                    Висота (мм)
                  </Typography>
                  <TextField
                    type="number"
                    value={height}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      if (!isNaN(v) && v >= 0) setHeight(v);
                      if (e.target.value === '') setHeight(0);
                    }}
                    fullWidth
                    slotProps={{ htmlInput: { min: 0, step: STEP } }}
                    sx={inputFieldSx}
                  />
                  <Slider
                    value={height}
                    onChange={(_, v) => setHeight(v as number)}
                    min={HEIGHT_MIN}
                    max={HEIGHT_MAX}
                    step={STEP}
                    sx={sliderSx}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: 'rgba(217,226,255,0.4)', fontSize: '0.65rem' }}>{HEIGHT_MIN}</Typography>
                    <Typography sx={{ color: 'rgba(217,226,255,0.4)', fontSize: '0.65rem' }}>{HEIGHT_MAX}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography sx={{ color: '#d9e2ff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1.5 }}>
                  Профільна система
                </Typography>
                <FormControl fullWidth>
                  <Select
                    defaultValue="rehau-synego"
                    sx={{
                      bgcolor: '#1b2a4a', color: '#fff', borderRadius: '12px',
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '2px solid #775a10' },
                      '& .MuiSvgIcon-root': { color: '#fff' },
                    }}
                  >
                    <MenuItem value="rehau-synego">REHAU Synego (80 мм)</MenuItem>
                    <MenuItem value="rehau-euro">REHAU Euro 70 (70 мм)</MenuItem>
                    <MenuItem value="wds-8">WDS 8 Series</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: '#e1e2e4',
              p: { xs: 3, md: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: '#45464e', fontWeight: 500, mb: 1 }}>Орієнтовна вартість:</Typography>
            <Typography sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontFamily: '"Manrope"', fontWeight: 800, color: '#041534', mb: 1 }}>
              7 400 – 9 200 <Box component="span" sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>грн</Box>
            </Typography>
            <Typography variant="body2" sx={{ color: '#45464e', mb: { xs: 3, md: 5 }, maxWidth: 300 }}>
              Ціна включає профіль, склопакет, фурнітуру та базовий монтаж.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={() => scrollToSection('#contacts')}
              sx={{
                maxWidth: 360,
                bgcolor: '#775a10',
                color: '#fff',
                py: { xs: 1.5, md: 2.5 },
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                '&:hover': { filter: 'brightness(1.1)', bgcolor: '#775a10' },
              }}
            >
              Отримати точний розрахунок
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
