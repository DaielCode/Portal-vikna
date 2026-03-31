import { useState } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, IconButton, Chip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Model {
  name: string;
  img: string;
  badge?: string;
  specs: string[];
  price: string;
}

const allModels: Record<string, Model[]> = {
  'Вікна': [
    {
      name: 'REHAU Euro-Design 70',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQ32DgCZ56ap7U39qlHmCH8YMrsXu7rkrPADtGhisC6639aJkUU_1ygh8SkwophaQJcvGg8udUFQspkHc3Vz8ZnBi2RGdadprCKD6zeymApFOiH8dgIiA7KFeQtqle9uvnJ8yT5GLeeXBD8Xps75TnBdZrBdjUoIGdFDZn_AJfjt8MW4JvQzPj0yJTaBdu5T32zi2kVQQTPiNr-CIewoFPpFgyuZdfbSU33LraJNG1BUwwpGLhXE-5IWAeX1sEqOFFKpN86QhsYXu',
      badge: 'Хіт продажів',
      specs: ['5 камер, 70 мм глибина', 'Подвійне ущільнення', 'Німецька фурнітура Winkhaus'],
      price: '4 850 грн',
    },
    {
      name: 'REHAU Synego',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtUcxY5uwJS8IsyxtuiNaiPEQ9MpZ1GxgTjiFVqGpa8-N1Gpr8KZVZvh2mZB1Ji94xkadEd3LJgJEaLufVY0fYtlMyPGEY9UGd0y2s3cDHAgAWqK1QVeaoqniwNERRlR7HYcbHbONYJT-8evUmCUGb_hBnGlh1-ME5Gy43qqLdNZ3OzbcKsIba5ixvH6MNFnfOV74o1yQy5nY0incBGVNIAZDrBz9ToOs-2y-UtDDAkFXlqinssgUx6HOVw_A5Uo94WnXUf2QELzNr',
      specs: ['7 камер, 80 мм глибина', 'Максимальне енергозбереження', 'Звукоізоляція до 47 дБ'],
      price: '6 200 грн',
    },
    {
      name: 'WDS 8 Series',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzmf4g-fm1fADVXF_dXLZlYXr2HZR89bnLrw2UHFuLObEl0SMXDeAfcl-KRmOsl0ugB6P3FTBGRoVP-cqtb9KKACdnAV2kTjT4nRL2pUocQiqSDIit9siq0g9XNb0awy9ow46cJoG0M3ZXzRgMws26epj11eU69jo7l7bDDeBs49t9vrf8FoRI9N3PVt78UHjVq8vRxbL22PvYg0Z-qPc9AY3GePPSQJg-OLpy378nvDtcE2CdTpsJLOp12tDqbrKpQCHZPIyOU4M',
      specs: ['6 камер, 82 мм глибина', 'Українська ціна, євро-якість', 'Посилене армування'],
      price: '4 100 грн',
    },
  ],
  'Двері': [
    {
      name: 'REHAU Euro-Design Двері',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzmf4g-fm1fADVXF_dXLZlYXr2HZR89bnLrw2UHFuLObEl0SMXDeAfcl-KRmOsl0ugB6P3FTBGRoVP-cqtb9KKACdnAV2kTjT4nRL2pUocQiqSDIit9siq0g9XNb0awy9ow46cJoG0M3ZXzRgMws26epj11eU69jo7l7bDDeBs49t9vrf8FoRI9N3PVt78UHjVq8vRxbL22PvYg0Z-qPc9AY3GePPSQJg-OLpy378nvDtcE2CdTpsJLOp12tDqbrKpQCHZPIyOU4M',
      badge: 'Новинка',
      specs: ['Панель 48 мм товщина', 'Тришарове ущільнення', '5-точкове замикання'],
      price: '12 500 грн',
    },
    {
      name: 'WDS Двері Преміум',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPpTOU2AvOJ2HL85LNzGKOs9S03VIYMjh4XMY9-0wdpLbolrWYoRrp4bYsBx5DlsETKn0_vhlVKbinO3p066qnZO48EbB5-DejzT51LSFGHG0i0Bpvo94pQd7jWusj5akifI42dx3_iqNtWB0-YckVYoFO9XdM2Sq8ebQgXLrvSgtXQwoQqoAXAPJF4bSK36x4kGHR4d4BW0vqYfsv-SfBJS7aB4luuXJ20YmoR1_TGT8FTljqTCKlmwg_Dp_UKJvhyEjCY91F0h3f',
      specs: ['Протизламна конструкція', 'Шумоізоляція до 42 дБ', 'Антикорозійне покриття'],
      price: '9 800 грн',
    },
    {
      name: 'Алюмінієві вхідні',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvRXr6Fj98EPgXTuKEtjVcsWixyjiZAA4DyDEvpH9D6FfETpcPvvhyvKIEWJ0_JLF05jbUPV7An1T9uzrxZaz6vE1OWzCghI8z7kzlK09webLdilwUU03IRFTA4lrNNf0lM8QbIaugtfy-_U9RooU_KE3yovYq6oX8MUlD-vQPtUNct53_ZOXhza5jgu-IVIJpoEwAMI1zSmCSqi54jCN_83rejWGCtr54s3Zd5eeKKONd6Ev3f7ofx0quzJeBD1XLBJao8WYPQfCw',
      specs: ['Алюмінієвий профіль', 'Скло-пакет з триплексом', 'Smart-замок опція'],
      price: '18 900 грн',
    },
  ],
  'Балкони': [
    {
      name: 'Балкон "Стандарт"',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtUcxY5uwJS8IsyxtuiNaiPEQ9MpZ1GxgTjiFVqGpa8-N1Gpr8KZVZvh2mZB1Ji94xkadEd3LJgJEaLufVY0fYtlMyPGEY9UGd0y2s3cDHAgAWqK1QVeaoqniwNERRlR7HYcbHbONYJT-8evUmCUGb_hBnGlh1-ME5Gy43qqLdNZ3OzbcKsIba5ixvH6MNFnfOV74o1yQy5nY0incBGVNIAZDrBz9ToOs-2y-UtDDAkFXlqinssgUx6HOVw_A5Uo94WnXUf2QELzNr',
      specs: ['Холодне скління', 'Алюмінієвий профіль', 'Оздоблення під ключ'],
      price: '8 500 грн',
    },
    {
      name: 'Балкон "Комфорт"',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQ32DgCZ56ap7U39qlHmCH8YMrsXu7rkrPADtGhisC6639aJkUU_1ygh8SkwophaQJcvGg8udUFQspkHc3Vz8ZnBi2RGdadprCKD6zeymApFOiH8dgIiA7KFeQtqle9uvnJ8yT5GLeeXBD8Xps75TnBdZrBdjUoIGdFDZn_AJfjt8MW4JvQzPj0yJTaBdu5T32zi2kVQQTPiNr-CIewoFPpFgyuZdfbSU33LraJNG1BUwwpGLhXE-5IWAeX1sEqOFFKpN86QhsYXu',
      badge: 'Популярний',
      specs: ['Тепле скління REHAU', 'Утеплення стін та підлоги', 'Внутрішнє оздоблення'],
      price: '14 200 грн',
    },
    {
      name: 'Балкон "Преміум"',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPpTOU2AvOJ2HL85LNzGKOs9S03VIYMjh4XMY9-0wdpLbolrWYoRrp4bYsBx5DlsETKn0_vhlVKbinO3p066qnZO48EbB5-DejzT51LSFGHG0i0Bpvo94pQd7jWusj5akifI42dx3_iqNtWB0-YckVYoFO9XdM2Sq8ebQgXLrvSgtXQwoQqoAXAPJF4bSK36x4kGHR4d4BW0vqYfsv-SfBJS7aB4luuXJ20YmoR1_TGT8FTljqTCKlmwg_Dp_UKJvhyEjCY91F0h3f',
      specs: ['Французьке скління', 'Тепла підлога', 'Дизайнерське оздоблення'],
      price: '22 000 грн',
    },
  ],
  'Ролети': [
    {
      name: 'Ролети захисні',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvRXr6Fj98EPgXTuKEtjVcsWixyjiZAA4DyDEvpH9D6FfETpcPvvhyvKIEWJ0_JLF05jbUPV7An1T9uzrxZaz6vE1OWzCghI8z7kzlK09webLdilwUU03IRFTA4lrNNf0lM8QbIaugtfy-_U9RooU_KE3yovYq6oX8MUlD-vQPtUNct53_ZOXhza5jgu-IVIJpoEwAMI1zSmCSqi54jCN_83rejWGCtr54s3Zd5eeKKONd6Ev3f7ofx0quzJeBD1XLBJao8WYPQfCw',
      badge: 'Безпека',
      specs: ['Алюмінієві ламелі', 'Автоматичний привід', 'Захист від злому'],
      price: '5 600 грн',
    },
    {
      name: 'Ролети сонцезахисні',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB9f62QvYxyFa_fs2aFQNcrPvcZ0duF29wGUngxS6fNyn9sDAqITramLNpLe-BD6uiCzCD057VGcStNHn4id3Y0og8FFnzD9k_4Cvvq10SaT7YudKbtQMub6fLHUTiZ_qnnVq1SCYC9C-yg6Pc73O9Fnt4aJfT_wpz0-f-dXVZ6f18udGXqdp-so1TSwERodnKl49DoiWgY686Nt9k_X4hbQJTRkcQ2aPKR21GJYVhGsj8tKGmToTjs5RxmFMHfpBFwwU1lIAeO8I4',
      specs: ['Тканинні ламелі', 'Захист від УФ 95%', 'Ручне або автоматичне керування'],
      price: '3 200 грн',
    },
    {
      name: 'Ролети день-ніч',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBTlmdLn5ZyA2osvkkYmaA4uXXJAOzlVl07GSFAYcWgLxl0PsdLSTPKvwlUDjgUuVFlAtqE3HBfn_TnKoJpOn2urb7WUp5E8A1P54Amg0lSzoYXT1mSliEyz7yPtSkww2XQmb0ilxGRtdr7ONPJ96GrdwafKvpUFYW8xAHwlyN4hY-rauwj6YWZ-NIR_ikzOkG4_ans_AFhilxn6ZIjH_NyZNADGn8bYNqodlEY8mJo739k2lmdBXbCrNPLNwevys-JA1sxUsQ1guC',
      specs: ['Подвійна тканина', 'Плавне регулювання світла', 'Монтаж без свердління'],
      price: '2 800 грн',
    },
  ],
};

const tabs = Object.keys(allModels);

export default function PopularModels() {
  const [activeTab, setActiveTab] = useState(0);
  const models = allModels[tabs[activeTab]];

  return (
    <Box id="models" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#f8f9fb' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' }, color: '#041534', mb: { xs: 3, md: 5 } }}
        >
          Популярні моделі
        </Typography>

        {/* Tabs - scrollable on mobile */}
        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, gap: 1.5, mb: { xs: 4, md: 8 }, overflowX: 'auto', pb: 1, '&::-webkit-scrollbar': { display: 'none' } }}>
          {tabs.map((tab, i) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(i)}
              variant={i === activeTab ? 'contained' : 'outlined'}
              sx={{
                px: { xs: 3, md: 4 },
                py: 1.2,
                borderRadius: '50px',
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                minWidth: { xs: 'auto', md: 100 },
                whiteSpace: 'nowrap',
                flexShrink: 0,
                ...(i === activeTab
                  ? { bgcolor: '#041534', color: '#fff', '&:hover': { bgcolor: '#1b2a4a' } }
                  : { borderColor: '#c5c6cf', color: '#191c1e', bgcolor: 'transparent', '&:hover': { bgcolor: '#f3f4f6', borderColor: '#041534' } }),
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: 2, md: 4 } }}>
          {models.map((model) => (
            <Card
              key={model.name}
              elevation={0}
              sx={{
                bgcolor: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s',
                boxShadow: '0 2px 8px rgba(4,21,52,0.06)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                '&:hover': { boxShadow: '0 12px 32px rgba(4,21,52,0.12)' },
              }}
            >
              <Box sx={{ position: 'relative', height: { xs: 200, md: 240 }, overflow: 'hidden', m: 2, borderRadius: '12px', flexShrink: 0 }}>
                <CardMedia
                  component="img"
                  image={model.img}
                  alt={model.name}
                  sx={{ height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
                {model.badge && (
                  <Chip
                    label={model.badge.toUpperCase()}
                    sx={{
                      position: 'absolute', top: 12, right: 12,
                      bgcolor: '#fdd581', color: '#041534', fontWeight: 700,
                      fontSize: '0.65rem', letterSpacing: '0.05em', height: 28,
                    }}
                  />
                )}
              </Box>
              <CardContent sx={{ px: 3, pb: 3, pt: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography sx={{ fontFamily: '"Manrope"', fontWeight: 800, fontSize: '1.15rem', color: '#041534', mb: 2 }}>
                  {model.name}
                </Typography>
                <Box sx={{ mb: 3, flexGrow: 1 }}>
                  {model.specs.map((spec) => (
                    <Box key={spec} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: '#041534', flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#45464e', fontSize: '0.85rem' }}>{spec}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', pt: 1, mt: 'auto' }}>
                  <Box>
                    <Typography sx={{ color: '#75777f', fontSize: '0.75rem', mb: 0.3 }}>Ціна від</Typography>
                    <Typography sx={{ fontFamily: '"Manrope"', fontWeight: 800, fontSize: '1.5rem', color: '#041534', lineHeight: 1 }}>
                      {model.price}
                    </Typography>
                  </Box>
                  <IconButton sx={{ width: 44, height: 44, borderRadius: '10px', bgcolor: '#f3f4f6', color: '#041534', '&:hover': { bgcolor: '#775a10', color: '#fff' }, transition: 'all 0.2s' }}>
                    <AddShoppingCartIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
