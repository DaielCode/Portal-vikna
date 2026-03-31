import { Box, Typography } from '@mui/material';

const projects = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPpTOU2AvOJ2HL85LNzGKOs9S03VIYMjh4XMY9-0wdpLbolrWYoRrp4bYsBx5DlsETKn0_vhlVKbinO3p066qnZO48EbB5-DejzT51LSFGHG0i0Bpvo94pQd7jWusj5akifI42dx3_iqNtWB0-YckVYoFO9XdM2Sq8ebQgXLrvSgtXQwoQqoAXAPJF4bSK36x4kGHR4d4BW0vqYfsv-SfBJS7aB4luuXJ20YmoR1_TGT8FTljqTCKlmwg_Dp_UKJvhyEjCY91F0h3f',
    subtitle: 'Котедж в Конча-Заспі',
    title: 'Панорамне скління тераси',
    span: { gridColumn: { xs: 'span 1', md: 'span 2' }, gridRow: { md: 'span 2' } },
    large: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBTlmdLn5ZyA2osvkkYmaA4uXXJAOzlVl07GSFAYcWgLxl0PsdLSTPKvwlUDjgUuVFlAtqE3HBfn_TnKoJpOn2urb7WUp5E8A1P54Amg0lSzoYXT1mSliEyz7yPtSkww2XQmb0ilxGRtdr7ONPJ96GrdwafKvpUFYW8xAHwlyN4hY-rauwj6YWZ-NIR_ikzOkG4_ans_AFhilxn6ZIjH_NyZNADGn8bYNqodlEY8mJo739k2lmdBXbCrNPLNwevys-JA1sxUsQ1guC',
    title: 'ЖК "RiverStone"',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB9f62QvYxyFa_fs2aFQNcrPvcZ0duF29wGUngxS6fNyn9sDAqITramLNpLe-BD6uiCzCD057VGcStNHn4id3Y0og8FFnzD9k_4Cvvq10SaT7YudKbtQMub6fLHUTiZ_qnnVq1SCYC9C-yg6Pc73O9Fnt4aJfT_wpz0-f-dXVZ6f18udGXqdp-so1TSwERodnKl49DoiWgY686Nt9k_X4hbQJTRkcQ2aPKR21GJYVhGsj8tKGmToTjs5RxmFMHfpBFwwU1lIAeO8I4',
    title: 'Квартира в ЖК "Skyline"',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvRXr6Fj98EPgXTuKEtjVcsWixyjiZAA4DyDEvpH9D6FfETpcPvvhyvKIEWJ0_JLF05jbUPV7An1T9uzrxZaz6vE1OWzCghI8z7kzlK09webLdilwUU03IRFTA4lrNNf0lM8QbIaugtfy-_U9RooU_KE3yovYq6oX8MUlD-vQPtUNct53_ZOXhza5jgu-IVIJpoEwAMI1zSmCSqi54jCN_83rejWGCtr54s3Zd5eeKKONd6Ev3f7ofx0quzJeBD1XLBJao8WYPQfCw',
    title: 'Офісний центр "Vector"',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsM5_b4Ph7We74BA41WEvzrCNLbtQrKWtu2MDhqQBooGa4NiYrb7vOGT_GJ4uuNPqZYYycS-d0AS-reMJR_LgmS5oz7zlqMZVWxPNnC5UHZ_q7iPz2t36cVRzQ9Fao_RYYnpfXibZBIBew3sn7yZnqVBvSMqMdIuijjteEXTDvL7uvbw0SFarMmc7Aya77unYekYJVKTJCS0KcLfsTSR64cMwFuC4S39fNR5bteou-AQ0fdmf8jqe1lME_a7kH4vuwGnNZw4fZTx11',
    subtitle: 'Приватна вілла',
    title: 'Системи REHAU Geneo',
    span: { gridColumn: { xs: 'span 1', md: 'span 2' } },
    large: true,
  },
];

export default function Portfolio() {
  return (
    <Box id="portfolio" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#fff' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, color: '#041534', mb: { xs: 4, md: 8 } }}>
          Наші проекти
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 3 },
            gridAutoRows: { xs: '220px', md: '300px' },
          }}
        >
          {projects.map((p, i) => (
            <Box
              key={i}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                cursor: 'pointer',
                ...p.span,
                '&:hover img': { transform: 'scale(1.05)' },
                '&:hover .overlay': { opacity: 1 },
              }}
            >
              <Box
                component="img"
                src={p.img}
                alt={p.title}
                sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(4,21,52,0.8), transparent)',
                  opacity: { xs: 1, md: 0 },
                  transition: 'opacity 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: { xs: 2, md: p.large ? 4 : 3 },
                }}
              >
                {p.subtitle && (
                  <Typography sx={{ color: '#775a10', fontWeight: 700, fontSize: { xs: '0.75rem', md: '0.875rem' }, textTransform: 'uppercase', mb: 0.5 }}>
                    {p.subtitle}
                  </Typography>
                )}
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1rem', md: p.large ? '1.5rem' : '1.1rem' } }}>
                  {p.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
