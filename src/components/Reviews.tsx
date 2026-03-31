import { Box, Typography, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const reviews = [
  {
    text: '"Замовляли скління всього будинку. Робота виконана на найвищому рівні. Майстри приїхали вчасно, працювали дуже акуратно. Вікна REHAU просто супер!"',
    name: 'Олександр Марченко',
    city: 'м. Київ',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFAIhjEJ2iAjBWF3JoGcxZWuWlNO98V9LvewlGM2FkWl3VbD6bMLEBkPJLd_RNaMjnxe9o13KG6CB6L1Y-wgdm6i7LhQmvmZwQ-QrAnTZSyPmTngXTTlcM58paV5Ojz4I1LT0Q9gh6_sN5T3uFBRTw4BFKXGLwf8tCkVZWxJ4ccq7doTfeTeuT0PS_F8LYXw_FpmnJft2MnJchk2hBiYMRQF9gRrWaqoyik7Ts6GSjyWN2xxi1VtG_TFQvGjLKC3bvVC69qrQoP4GV',
  },
  {
    text: '"Дуже задоволена балконом \'під ключ\'. Менеджер допоміг підібрати колір ламінації під фасад, монтажники за собою все прибрали. Рекомендую!"',
    name: 'Марія Ткаченко',
    city: 'м. Бровари',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHjprGeU7baYAbeyWNlBV0ALJf-aFjHT-vMrpQx28xL7oGBMXLNTloihBCWAnRx9-67J7PoEXDf03ajDjoVLls4IYvSBrz1jLkhLxtvkvUqxg-_FJtlY4yOt-H5GfwzVP-pefMbzGtSgtWmYkhtwjB0sBgbuIuEQQKW5-fkBd2f9bH7TqWu2BG7pOpnj4haw53scNdVKKb2Fpsg0hB2Nrd5oR26-PVWxg1_V5pbAMxg-P-Sd5oUnZXobGwT5kiynYWniKTD2czS1Zn',
  },
];

export default function Reviews() {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: '#f3f4f6', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 4, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2.25rem' }, color: '#041534' }}>
            Відгуки клієнтів
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <IconButton sx={{ border: '1px solid #c5c6cf', '&:hover': { bgcolor: '#fff' } }}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton sx={{ border: '1px solid #c5c6cf', '&:hover': { bgcolor: '#fff' } }}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, md: 4 },
            overflowX: 'auto',
            pb: 2,
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {reviews.map((r) => (
            <Box
              key={r.name}
              sx={{
                minWidth: { xs: 280, sm: 350, md: 400 },
                bgcolor: '#fff',
                p: { xs: 3, md: 5 },
                borderRadius: '16px',
                boxShadow: '0 1px 3px rgba(4,21,52,0.06)',
                border: '1px solid transparent',
                transition: 'all 0.3s',
                scrollSnapAlign: 'start',
                '&:hover': { borderColor: '#fdd581' },
              }}
            >
              <Box sx={{ display: 'flex', color: '#775a10', mb: 2 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} sx={{ fontSize: { xs: 20, md: 24 } }} />
                ))}
              </Box>
              <Typography sx={{ color: '#191c1e', mb: 3, fontStyle: 'italic', lineHeight: 1.6, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                {r.text}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={r.img}
                  alt={r.name}
                  sx={{ width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 }, borderRadius: '50%', objectFit: 'cover' }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.9rem', md: '1rem' } }}>{r.name}</Typography>
                  <Typography variant="caption" sx={{ color: '#45464e' }}>{r.city}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
