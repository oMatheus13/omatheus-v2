import type { Fragmento } from '@/types/fragmento'

export const fragmentos: Fragmento[] = [
  {
    id: 'o-que-o-mundo-deveria-saber',
    slug: 'o-que-o-mundo-deveria-saber',
    titulo: 'O Que o Mundo Deveria Saber',
    subtitulo: 'Design editorial e ilustracao',
    ano: 2024,
    categoria: 'editorial',
    descricao: 'Livro fisico com identidade editorial e narrativa visual.',
    thumbnail:
      '/fragments/o-que-o-mundo-deveria-saber/assets/fotos-livro-fisico/Book_Dust_Jacket_Mockup_1.png',
    destaque: true,
    tema: {
      bgColor: '#0f1219',
      textColor: '#f0ebe0',
      accentColor: '#b97d52'
    },
    // TODO: confirmar URL com cliente
    links: {
      live: '#'
    }
  },
  {
    id: 'o-fracasso-e-seu-melhor-amigo',
    slug: 'o-fracasso-e-seu-melhor-amigo',
    titulo: 'O Fracasso e Seu Melhor Amigo',
    subtitulo: 'Identidade e narrativa',
    ano: 2023,
    categoria: 'design',
    descricao: 'Projeto grafico que transforma erro em narrativa visual.',
    thumbnail:
      '/fragments/o-fracasso-e-seu-melhor-amigo/assets/capa/Capa_Principal.png',
    destaque: false,
    tema: {
      bgColor: '#0f1219',
      textColor: '#f0ebe0',
      accentColor: '#3d4f3c'
    }
  },
  {
    id: 'umoya-os',
    slug: 'umoya-os',
    titulo: 'Umoya OS',
    subtitulo: 'Sistema interno',
    ano: 2024,
    categoria: 'produto',
    descricao: 'ERP e PDV criados para a rotina da Umoya.',
    thumbnail: '/fragments/umoya-os/assets/preview.png',
    destaque: true,
    tema: {
      bgColor: '#0f1219',
      textColor: '#f0ebe0',
      accentColor: '#b97d52'
    }
  }
]
