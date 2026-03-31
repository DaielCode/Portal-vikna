import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { scrollToSection } from '../utils/scrollTo';

const products = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQ32DgCZ56ap7U39qlHmCH8YMrsXu7rkrPADtGhisC6639aJkUU_1ygh8SkwophaQJcvGg8udUFQspkHc3Vz8ZnBi2RGdadprCKD6zeymApFOiH8dgIiA7KFeQtqle9uvnJ8yT5GLeeXBD8Xps75TnBdZrBdjUoIGdFDZn_AJfjt8MW4JvQzPj0yJTaBdu5T32zi2kVQQTPiNr-CIewoFPpFgyuZdfbSU33LraJNG1BUwwpGLhXE-5IWAeX1sEqOFFKpN86QhsYXu',
    title: 'Вікна',
    desc: 'Максимальна енергоефективність та шумоізоляція з преміальними профільними системами.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzmf4g-fm1fADVXF_dXLZlYXr2HZR89bnLrw2UHFuLObEl0SMXDeAfcl-KRmOsl0ugB6P3FTBGRoVP-cqtb9KKACdnAV2kTjT4nRL2pUocQiqSDIit9siq0g9XNb0awy9ow46cJoG0M3ZXzRgMws26epj11eU69jo7l7bDDeBs49t9vrf8FoRI9N3PVt78UHjVq8vRxbL22PvYg0Z-qPc9AY3GePPSQJg-OLpy378nvDtcE2CdTpsJLOp12tDqbrKpQCHZPIyOU4M',
    title: 'Двері',
    desc: 'Вхідні групи, що поєднують ультимативну безпеку та сучасний дизайн.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtUcxY5uwJS8IsyxtuiNaiPEQ9MpZ1GxgTjiFVqGpa8-N1Gpr8KZVZvh2mZB1Ji94xkadEd3LJgJEaLufVY0fYtlMyPGEY9UGd0y2s3cDHAgAWqK1QVeaoqniwNERRlR7HYcbHbONYJT-8evUmCUGb_hBnGlh1-ME5Gy43qqLdNZ3OzbcKsIba5ixvH6MNFnfOV74o1yQy5nY0incBGVNIAZDrBz9ToOs-2y-UtDDAkFXlqinssgUx6HOVw_A5Uo94WnXUf2QELzNr',
    title: 'Балкони',
    desc: 'Створення додаткового житлового простору з комплексним утепленням.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPpTOU2AvOJ2HL85LNzGKOs9S03VIYMjh4XMY9-0wdpLbolrWYoRrp4bYsBx5DlsETKn0_vhlVKbinO3p066qnZO48EbB5-DejzT51LSFGHG0i0Bpvo94pQd7jWusj5akifI42dx3_iqNtWB0-YckVYoFO9XdM2Sq8ebQgXLrvSgtXQwoQqoAXAPJF4bSK36x4kGHR4d4BW0vqYfsv-SfBJS7aB4luuXJ20YmoR1_TGT8FTljqTCKlmwg_Dp_UKJvhyEjCY91F0h3f',
    title: 'Ролети',
    desc: 'Захисні та сонцезахисні ролетні системи для максимального комфорту.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvRXr6Fj98EPgXTuKEtjVcsWixyjiZAA4DyDEvpH9D6FfETpcPvvhyvKIEWJ0_JLF05jbUPV7An1T9uzrxZaz6vE1OWzCghI8z7kzlK09webLdilwUU03IRFTA4lrNNf0lM8QbIaugtfy-_U9RooU_KE3yovYq6oX8MUlD-vQPtUNct53_ZOXhza5jgu-IVIJpoEwAMI1zSmCSqi54jCN_83rejWGCtr54s3Zd5eeKKONd6Ev3f7ofx0quzJeBD1XLBJao8WYPQfCw',
    title: 'Розсувні системи',
    desc: 'Панорамні розсувні конструкції для максимального світла та простору.',
  },
];

export default function Products() {
  return (
    <Box id="products" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#f3f4f6' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: { xs: 4, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, color: '#041534', mb: 2 }}>
            Наші рішення
          </Typography>
          <Typography sx={{ color: '#45464e', maxWidth: 450, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Оберіть категорію конструкцій, що відповідає вашим потребам та архітектурному стилю.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
            gap: 3,
          }}
        >
          {products.map((p) => (
            <Card
              key={p.title}
              elevation={0}
              sx={{
                bgcolor: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'box-shadow 0.4s',
                boxShadow: '0 2px 8px rgba(4,21,52,0.04)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                '&:hover': { boxShadow: '0 12px 32px rgba(4,21,52,0.1)' },
                '&:hover .product-link-line': { width: 32 },
              }}
            >
              <Box sx={{ height: 180, overflow: 'hidden', m: 1.5, borderRadius: '12px', flexShrink: 0 }}>
                <CardMedia
                  component="img"
                  image={p.img}
                  alt={p.title}
                  sx={{
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    transition: 'transform 0.5s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
              </Box>
              <CardContent sx={{ px: 2.5, pb: 2.5, pt: 1.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography
                  sx={{
                    fontFamily: '"Manrope"',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    color: '#041534',
                    mb: 1,
                  }}
                >
                  {p.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#45464e',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    mb: 2.5,
                    flexGrow: 1,
                  }}
                >
                  {p.desc}
                </Typography>
                <Box
                  onClick={() => scrollToSection('#models')}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mt: 'auto',
                    cursor: 'pointer',
                  }}
                >
                  <Typography sx={{ color: '#775a10', fontWeight: 700, fontSize: '0.85rem' }}>
                    Детальніше
                  </Typography>
                  <Box
                    className="product-link-line"
                    sx={{
                      width: 24,
                      height: '2px',
                      bgcolor: '#775a10',
                      transition: 'width 0.3s',
                    }}
                  />
                  <ArrowForwardIcon sx={{ fontSize: 16, color: '#775a10' }} />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
