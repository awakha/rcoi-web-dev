import { Box, Typography, Link } from '@mui/material';
import { GitHub, WhatsApp, Instagram, Telegram } from '@mui/icons-material';

import Boss from '../../assets/images/ourteam/Aidmar.jpg';
import Husein from '../../assets/images/ourteam/Husein.jpg';
import Zelem from '../../assets/images/ourteam/Zelem.jpg';
import Khava from '../../assets/images/ourteam/Khava.jpg';

interface TeamMember {
  id: number;
  imgUrl: string;
  fullName: string;
  rank: string;
  info: string;
  git: boolean;

  whatsapp?: string;
  instagram?: string;
  telegram?: string;
  github?: string;
}

export default function OurTeam() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      imgUrl: Boss,
      fullName: 'Бено Эйдмар',
      rank: 'Директор',
      info: 'Руководит стратегическим развитием и обеспечивает эффективную работу организации.',
      git: false,
    },
    {
      id: 2,
      imgUrl: Husein,
      fullName: 'Сулейманов Хусейн',
      rank: 'Начальник аналитического отдела',
      info: 'Организует аналитическую работу и отвечает за обработку и анализ данных ГИА.',
      git: false,
    },
    {
      id: 3,
      imgUrl: Zelem,
      fullName: 'Идрисов Зелемхан',
      rank: 'Тимлид',
      info: 'Формально не в штате, но навсегда в сердцах команды.',
      git: true,
      github: 'https://github.com/zelem',
    },
    {
      id: 4,
      imgUrl: Khava,
      fullName: 'Пагалова Хава',
      rank: 'Главный специалист по аналитике и фронтенд-разработке',
      info: 'Решает сложные задачи и делает так, что всё работает гладко.',
      git: true,
      github: 'https://github.com/khava',
    },
  ];

  const socialLinkStyle = {
    color: '#fff',
    transition: 'color 0.2s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all 0.2s ease',
    },
  } as const;

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Наша команда
      </Typography>

      <Box sx={{ pt: 5, py: 10 }}>
        <Box
          sx={{
            width: 'auto',
            height: '400px',
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          {teamMembers.map((member) => (
            <Box // карточка
              key={member.id}
              sx={{
                width: '100%',
                height: '400px',
                position: 'relative',
                overflow: 'hidden',
                mb: 2,
                borderRadius: '15px',
                '&:hover > :nth-of-type(1)': {
                  right: 0,
                },
              }}>
              <Box
                component="img"
                src={member.imgUrl}
                alt={`Фото ${member.fullName}`}
                sx={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '20px',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                  objectFit: 'cover',
                }}
              />
              <Box // тело карточки
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'start',
                  p: 3,
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  right: '-100%',
                  background: '#132a313d',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '15px',
                  color: '#fff',
                  transition: '.5s',
                }}>
                <Typography variant="h6" fontWeight="bold">
                  {member.fullName}
                </Typography>
                <Typography variant="subtitle1" sx={{ py: 1 }}>
                  {member.rank}
                </Typography>
                <Typography variant="body2">{member.info}</Typography>

                <Box
                  sx={{
                    height: '250px',
                    display: 'flex',
                    alignItems: 'end',
                    gap: '5px',
                  }}>
                  <Link
                    href={member.whatsapp || '#'}
                    target="_blank"
                    sx={{ display: 'inline-flex' }}>
                    <WhatsApp
                      sx={{
                        ...socialLinkStyle,
                        '&:hover': { color: 'green' },
                      }}
                    />
                  </Link>
                  <Link
                    href={member.instagram || '#'}
                    target="_blank"
                    sx={{ display: 'inline-flex' }}>
                    <Instagram
                      sx={{
                        ...socialLinkStyle,
                        '&:hover': { color: '#E4405F' },
                      }}
                    />
                  </Link>
                  <Link
                    href={member.telegram || '#'}
                    target="_blank"
                    sx={{ display: 'inline-flex' }}>
                    <Telegram
                      sx={{
                        ...socialLinkStyle,
                        '&:hover': { color: '#078dfaff' },
                      }}
                    />
                  </Link>
                  {member.git && (
                    <Link
                      href={member.github || '#'}
                      target="_blank"
                      sx={{ display: 'inline-flex' }}>
                      <GitHub
                        sx={{
                          ...socialLinkStyle,
                          '&:hover': { color: 'gray' },
                        }}
                      />
                    </Link>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
