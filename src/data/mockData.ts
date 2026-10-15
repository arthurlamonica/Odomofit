import type { WorkoutRoutine, SocialPost, ChallengeItem, PlanItem, TestimonialItem, FAQItem } from '../types';

export const INITIAL_WORKOUT_ROUTINE: WorkoutRoutine = {
  id: 'routine-hipertrofia-a',
  title: 'Superiores & Força: Foco Peito e Ombros',
  category: 'Hipertrofia & Força',
  muscleGroups: ['Peitoral Maior', 'Deltoides', 'Tríceps'],
  estimatedMinutes: 55,
  exercises: [
    {
      id: 'ex-1',
      name: 'Supino Reto com Barra',
      muscle: 'Peitoral Maior',
      sets: 4,
      reps: '8 - 10 reps',
      weight: 84,
      restSeconds: 90,
      completed: true,
      history: 'Última sessão: 80kg x 8 reps (+4kg de evolução)'
    },
    {
      id: 'ex-2',
      name: 'Supino Inclinado com Halteres',
      muscle: 'Peitoral Superior',
      sets: 4,
      reps: '10 - 12 reps',
      weight: 28,
      restSeconds: 75,
      completed: true,
      history: 'Última sessão: 26kg x 10 reps'
    },
    {
      id: 'ex-3',
      name: 'Crucifixo na Polia Média (Crossover)',
      muscle: 'Peitoral',
      sets: 3,
      reps: '12 - 15 reps',
      weight: 18,
      restSeconds: 60,
      completed: false,
      history: 'Última sessão: 16kg x 14 reps'
    },
    {
      id: 'ex-4',
      name: 'Desenvolvimento Militar com Halteres',
      muscle: 'Deltoide Anterior / Lateral',
      sets: 4,
      reps: '8 - 10 reps',
      weight: 22,
      restSeconds: 90,
      completed: false,
      history: 'Última sessão: 20kg x 10 reps'
    },
    {
      id: 'ex-5',
      name: 'Elevação Lateral na Polia',
      muscle: 'Deltoide Lateral',
      sets: 4,
      reps: '12 - 15 reps',
      weight: 10,
      restSeconds: 60,
      completed: false,
      history: 'Última sessão: 9kg x 12 reps'
    },
    {
      id: 'ex-6',
      name: 'Tríceps Corda na Polia Alta',
      muscle: 'Tríceps Braquial',
      sets: 3,
      reps: '12 reps',
      weight: 25,
      restSeconds: 60,
      completed: false,
      history: 'Última sessão: 22.5kg x 12 reps'
    }
  ]
};

export const INITIAL_SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'post-1',
    authorName: 'Camila Rodriguez',
    authorHandle: '@camila.fit',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    roleTag: 'Atleta Intermediária',
    workoutType: 'Leg Day • Agachamento & Posteriores',
    timestamp: 'Há 2 horas',
    image: '/images/hero.jpg',
    caption: 'Treino de pernas concluído. Mais uma semana mantendo a consistência e aumentando 5kg no agachamento livre! O foco continua 100%. 🔥🏋️‍♀️',
    likes: 148,
    commentsCount: 19,
    saved: false,
    userLiked: true,
    workoutStats: {
      volumeTotal: '8.450 kg',
      duration: '62 min',
      prRecord: 'PR Agachamento 110kg'
    },
    commentsList: [
      {
        id: 'c-1',
        author: 'Lucas Personal',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        text: 'Postura impecável na descida! A evolução na mobilidade do tornozelo fez toda a diferença.',
        timestamp: 'Há 1 hora'
      },
      {
        id: 'c-2',
        author: 'Mariana Lima',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        text: 'Você é pura inspiração Camila!! Parabéns pelo novo PR!',
        timestamp: 'Há 45 min'
      }
    ]
  },
  {
    id: 'post-2',
    authorName: 'Rodrigo Santoro',
    authorHandle: '@rodrigo.power',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    roleTag: 'Powerlifting & Força',
    workoutType: 'Peito & Deltoides • Supino Pesado',
    timestamp: 'Há 4 horas',
    image: '/images/feed_bench.jpg',
    caption: 'Hoje foi dia de superar minha última marca no supino. 140kg subiram limpos sem ajuda na última série. A planilha do coach está dando frutos! 🚀⚡',
    likes: 284,
    commentsCount: 34,
    saved: true,
    userLiked: false,
    workoutStats: {
      volumeTotal: '11.200 kg',
      duration: '54 min',
      prRecord: 'Novo Recorde Supino 140kg'
    },
    commentsList: [
      {
        id: 'c-3',
        author: 'Felipe Coach',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        text: 'Execução muito sólida, pausa perfeita no peito. Semana que vem vamos consolidar essa carga!',
        timestamp: 'Há 3 horas'
      }
    ]
  },
  {
    id: 'post-3',
    authorName: 'Beatriz Vasconcelos',
    authorHandle: '@bia.saudavel',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    roleTag: 'Iniciante Consistente',
    workoutType: 'Full Body Funcional & Cardio',
    timestamp: 'Há 6 horas',
    image: '/images/feed_progress.jpg',
    caption: 'Primeiro mês de treino completo. Um passo de cada vez. De alguém que nunca pisou numa academia para 20 treinos no mês registrados no Gymstagram! Gratidão ao meu personal!',
    likes: 312,
    commentsCount: 42,
    saved: false,
    userLiked: false,
    workoutStats: {
      volumeTotal: '4.800 kg',
      duration: '48 min',
      prRecord: 'Streak: 30 Dias Ativos'
    },
    commentsList: [
      {
        id: 'c-4',
        author: 'Diego Personal',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
        text: 'O segredo é a constância, Bia! Muito orgulhoso do seu foco nestas 4 semanas.',
        timestamp: 'Há 5 horas'
      }
    ]
  }
];

export const PROGRESS_DATA = {
  semana: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    benchPress: [80, 80, 82, 82, 84, 84, 84],
    squat: [100, 100, 105, 105, 110, 110, 110],
    deadlift: [120, 120, 125, 125, 130, 130, 130],
    volumeTotal: '28.400 kg',
    frequency: '5 de 5 treinos concluídos',
    streak: '18 dias seguidos',
    activeMinutes: 320
  },
  mes: {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    benchPress: [76, 78, 82, 84],
    squat: [95, 100, 105, 110],
    deadlift: [115, 120, 125, 130],
    volumeTotal: '114.800 kg',
    frequency: '21 treinos no mês',
    streak: '24 dias no ritmo',
    activeMinutes: 1240
  },
  trimestre: {
    labels: ['Mês 1 (Jul)', 'Mês 2 (Ago)', 'Mês 3 (Set)'],
    benchPress: [70, 78, 84],
    squat: [85, 98, 110],
    deadlift: [100, 115, 130],
    volumeTotal: '342.000 kg',
    frequency: '62 treinos realizados',
    streak: 'Melhor sequência: 32 dias',
    activeMinutes: 3820
  }
};

export const TRAINER_CLIENTS_PREVIEW = [
  {
    name: 'Camila Rodriguez',
    plan: 'Hipertrofia Avançada',
    adherence: 96,
    lastWorkout: 'Hoje, 07:30',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    status: 'Em dia'
  },
  {
    name: 'Rodrigo Santoro',
    plan: 'Periodização de Força',
    adherence: 100,
    lastWorkout: 'Hoje, 09:15',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    status: 'PR Batido'
  },
  {
    name: 'Beatriz Vasconcelos',
    plan: 'Condicionamento & Saúde',
    adherence: 92,
    lastWorkout: 'Ontem, 18:40',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    status: 'Em dia'
  },
  {
    name: 'Gabriel Martins',
    plan: 'Emagrecimento Ativo',
    adherence: 84,
    lastWorkout: 'Há 2 dias',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    status: 'Atenção'
  }
];

export const CHALLENGES_LIST: ChallengeItem[] = [
  {
    id: 'ch-1',
    title: 'Desafio 30 Dias de Consistência',
    badge: '🏆 Constância de Ferro',
    description: 'Registre pelo menos 4 treinos por semana durante 30 dias corridos e ganhe o selo de atleta consistente.',
    duration: '30 dias • Termina em 12 dias',
    participants: 1420,
    progressPercent: 78,
    joined: true,
    reward: 'Badge Exclusivo + Destaque na Comunidade'
  },
  {
    id: 'ch-2',
    title: 'Meta de Volume Semanal (25 Toneladas)',
    badge: '⚡ Levanta Tudo',
    description: 'Atinja 25.000 kg acumulados de volume de treino somando todas as séries de musculação da semana.',
    duration: 'Semanal • Faltam 3 dias',
    participants: 890,
    progressPercent: 64,
    joined: false,
    reward: 'Insígnia de Força Semanal'
  },
  {
    id: 'ch-3',
    title: 'Desafio de Frequência Mensal 20+',
    badge: '🔥 Fogo nos Treinos',
    description: 'Complete 20 sessões de treino registradas no mês corrente para provar que nada para você.',
    duration: 'Mensal • Dia 15 de 30',
    participants: 2150,
    progressPercent: 50,
    joined: false,
    reward: 'Troféu Digital Ouro'
  }
];

export const PRICING_PLANS: PlanItem[] = [
  {
    id: 'plano-gratuito',
    name: 'Gratuito',
    tagline: 'Para quem deseja começar e se conectar',
    priceNote: '100% Gratuito',
    features: [
      'Perfil social fitness completo',
      'Acesso total à comunidade e feed',
      'Publicações, fotos e interações ilimitadas',
      'Registro diário básico de treinos',
      'Histórico dos últimos 30 dias',
      'Participação em desafios públicos'
    ],
    ctaText: 'Criar conta gratuita',
    targetAudience: 'Iniciantes & Entusiastas'
  },
  {
    id: 'plano-plus',
    name: 'Gymstagram Plus',
    tagline: 'Para quem quer acompanhar sua evolução com mais profundidade',
    badge: 'Recomendado',
    isPopular: true,
    priceNote: 'Condição Especial de Lançamento',
    features: [
      'Tudo do plano Gratuito',
      'Estatísticas e gráficos avançados de cargas',
      'Histórico ilimitado e comparativo de exercícios',
      'Calculadora de 1RM e volume semanal total',
      'Metas personalizadas e relatórios de progresso',
      'Selo exclusivo Plus no perfil',
      'Recursos extras de personalização de treinos'
    ],
    ctaText: 'Garantir Acesso Plus Antecipado',
    targetAudience: 'Praticantes & Atletas Dedicados'
  },
  {
    id: 'plano-pro',
    name: 'Gymstagram Pro',
    tagline: 'Para Personal Trainers e Profissionais de Educação Física',
    badge: 'Para Treinadores',
    priceNote: 'Planos flexíveis por número de alunos',
    features: [
      'Painel de Gestão Completa de Alunos',
      'Prescrição e envio de fichas de treino digitais',
      'Acompanhamento em tempo real da execução dos alunos',
      'Histórico e alertas de adesão / faltas aos treinos',
      'Canal direto de mensagens e feedback de treinos',
      'Canal de contratação e visibilidade para novos alunos',
      'Exportação de relatórios de evolução física'
    ],
    ctaText: 'Cadastrar como Personal Trainer',
    targetAudience: 'Personal Trainers & Consultorias'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Lucas Ferreira',
    role: 'Praticante há 2 anos',
    category: 'Intermediário',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    comment: 'Pela primeira vez consigo ver de verdade se estou progredindo as cargas ou só repetindo os mesmos pesos. O feed também me mantém muito motivado nos dias em que bate preguiça.',
    stats: '+18kg no agachamento em 3 meses'
  },
  {
    id: 't-2',
    name: 'Prof. Rafael Albuquerque',
    role: 'Personal Trainer & Especialista em Força',
    category: 'Personal Trainer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    comment: 'A união de rede social com prescrição de treino é genial. Meus alunos adoram postar o treino concluído e eu consigo monitorar o volume e o descanso de cada um num único lugar.',
    stats: 'Mais de 30 alunos monitorados'
  },
  {
    id: 't-3',
    name: 'Mariana Duarte',
    role: 'Iniciante no mundo fitness',
    category: 'Iniciante',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    comment: 'Eu tinha vergonha de ir para a academia sem saber o que fazer. Ter a ficha organizada no celular e ver outras pessoas na mesma fase que eu me deu a confiança que faltava.',
    stats: '100% de frequência no 1º mês'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'O que é o Gymstagram?',
    answer: 'O Gymstagram é uma plataforma fitness inovadora que combina a experiência de uma rede social dinâmica (como Instagram) com ferramentas de alta precisão para registro de treinos, evolução de cargas e acompanhamento profissional (como Hevy e Trainerize). É o ponto de encontro entre quem treina para evoluir e profissionais que orientam resultados.'
  },
  {
    question: 'O Gymstagram é gratuito?',
    answer: 'Sim! O Gymstagram oferece um plano gratuito completo com perfil fitness, acesso à comunidade, publicação de treinos e registro das suas sessões. Para usuários que desejam análises avançadas de métricas e personal trainers que desejam gerenciar carteira de alunos, existirão planos com recursos adicionais.'
  },
  {
    question: 'Posso registrar meus próprios treinos?',
    answer: 'Com certeza. Você pode criar suas próprias rotinas, escolher exercícios de uma biblioteca completa, ajustar séries, repetições, registrar o peso utilizado e cronometrar descansos entre séries. Todas as suas anotações ficam salvas no seu histórico de evolução.'
  },
  {
    question: 'É possível acompanhar minha evolução de cargas?',
    answer: 'Sim! A plataforma gera gráficos automáticos de sobrecarga progressiva, volume total levantado por treino e estimativas de 1RM (repetição máxima), permitindo que você visualize seu progresso semana a semana de forma clara.'
  },
  {
    question: 'Como funciona a comunidade?',
    answer: 'Assim como nas principais redes sociais, você pode seguir amigos, outros atletas e treinadores, curtir e comentar nas postagens de treinos, trocar dicas e se motivar com a evolução real de pessoas que têm os mesmos objetivos que você.'
  },
  {
    question: 'Personal trainers podem utilizar a plataforma?',
    answer: 'Sim! Desenvolvemos uma área exclusiva para personal trainers e consultorias online, permitindo prescrever fichas personalizadas, acompanhar a execução dos alunos em tempo real, monitorar adesão e receber novos contatos de alunos interessados.'
  },
  {
    question: 'Posso contratar acompanhamento profissional dentro do Gymstagram?',
    answer: 'Esse recurso está no nosso roadmap de lançamento! Alunos poderão encontrar personal trainers certificados na comunidade, visualizar seus métodos de treino e contratar consultorias e aulas diretamente pela plataforma.'
  },
  {
    question: 'O Gymstagram possui aplicativo móvel?',
    answer: 'A versão web atual foi construída com tecnologia moderna e responsiva (PWA), adaptada para qualquer smartphone. O aplicativo nativo para iOS e Android está em fase final de preparação para lançamento nas lojas oficiais.'
  },
  {
    question: 'Como meus dados são protegidos?',
    answer: 'Tratamos a privacidade e segurança com rigor. Seus dados de treino, métricas físicas e informações de contato são protegidos com criptografia moderna e seguem as melhores práticas da LGPD (Lei Geral de Proteção de Dados).'
  }
];
