import { Box, Typography } from '@mui/material';

const steps = [
  { num: '01', title: 'Консультація', desc: 'Детальний розбір ваших побажань та підбір систем.' },
  { num: '02', title: 'Замір', desc: 'Безкоштовний виїзд майстра для точних вимірів.' },
  { num: '03', title: 'Виготовлення', desc: 'Виробництво конструкцій на автоматизованих лініях.' },
  { num: '04', title: 'Монтаж', desc: 'Професійна установка за стандартами ДСТУ.' },
];

export default function HowWeWork() {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: '#fff', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography variant="h2" sx={{ textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' }, color: '#041534', mb: { xs: 5, md: 10 } }}>
          Як ми працюємо
        </Typography>
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' }, gap: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: 40,
              left: 0,
              width: '100%',
              height: 2,
              bgcolor: '#e1e2e4',
              zIndex: 0,
            }}
          />
          {steps.map((step) => (
            <Box
              key={step.num}
              sx={{
                flex: 1,
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                width: { xs: '100%', md: 'auto' },
                '&:hover .step-circle': { borderColor: '#775a10' },
                '&:hover .step-num': { color: '#775a10' },
              }}
            >
              <Box
                className="step-circle"
                sx={{
                  mx: 'auto',
                  width: { xs: 64, md: 80 },
                  height: { xs: 64, md: 80 },
                  bgcolor: '#fff',
                  border: '4px solid #e1e2e4',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  transition: 'border-color 0.3s',
                }}
              >
                <Typography className="step-num" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 900, color: '#041534', transition: 'color 0.3s' }}>
                  {step.num}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#45464e', px: { xs: 0, md: 2 }, maxWidth: { xs: 280, md: 'none' }, mx: 'auto' }}>
                {step.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
