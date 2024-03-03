import arte from '../assets/arte-de-caderno.jpeg'
import brFinancas from '../assets/br-finanças.jpeg'
import patinhasFelizes from '../assets/patinhas-felizes.jpeg'
import advice from '../assets/advice.jpeg'
import splitter from '../assets/splitter.jpeg'


export const projects = [
    {
        title: "Arte de Caderno",
        subtitle: {
            pt: "Um site para um campeonato local de desenho e pintura por alunos de escolas públicas.",
            en: "A website for a local drawing and painting championship by public school students."
        },
        technologies: ["React", "Styled-Components"],
        path: "https://artedecaderno.ifsuldeminas.edu.br",
        git: "https://github.com/ArtedeCaderno-IFSULDEMINAS/Arte-de-Caderno",
        img: arte
    },
    {
        title: "BR Finanças",
        subtitle: {
            pt: "Um aplicativo para controle financeiro. Como este projeto foi feito como projeto interdisciplinar, o link do deploy não está disponível.",
            en: "A financial control app. As this project was made as an interdisciplinary project, the deploy link is not available."
        },
        technologies: ["HandleBars", "Express", "MySQL"],
        path: null,
        git: "https://github.com/BeatrizNeaime/BR-financas",
        img: brFinancas
    },
    {
        title: "Patinhas Felizes",
        subtitle: {
            pt: "Um site de gerenciamento e controle de animais de um abrigo fictício. Como este projeto foi feito como projeto interdisciplinar, o link do deploy não está disponível.",
            en: "A management and control website for animals in a fictitious shelter. As this project was made as an interdisciplinary project, the deploy link is not available."
        },
        technologies: ["HandleBars", "Express", "MySQL"],
        path: null,
        git: "https://github.com/BeatrizNeaime/PatinhasFelizes",
        img: patinhasFelizes
    },
    {
        title: "Advice",
        subtitle: {
            pt: "Um aplicativo para conselhos.",
            en: "An advice app."
        },
        technologies: ["React", "TailwindCSS"],
        path: "https://imaginative-paletas-b1d609.netlify.app",
        git: "https://github.com/BeatrizNeaime/advice.github.io",
        img: advice
    },
    {
        title: "Splitter",
        subtitle: {
            pt: "Um aplicativo para dividir a conta.",
            en: "A bill splitter app."
        },
        technologies: ["React", "TailwindCSS"],
        path: "https://fm-tip-calculator-pi.vercel.app",
        git: "https://github.com/BeatrizNeaime/FM-tip-calculator",
        img: splitter
    }
]