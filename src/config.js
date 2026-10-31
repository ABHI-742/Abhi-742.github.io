module.exports = {
  siteTitle: 'Abhi Venkata Sri Krishna Devarayalu Anumanchi | Software Engineer',
  siteDescription:
    'Abhi Venkata Sri Krishna Devarayalu Anumanchi is a Software Engineer building Generative AI, cloud-native, and full-stack software. M.S. in Computer Science from George Mason University and 4x AWS Certified.',
  siteKeywords:
    'Abhi Venkata Sri Krishna Devarayalu, Software Developer, Software Engineer, Generative AI, RAG, AWS, Java Developer, Application Developer, Montefiore Einstein, George Mason University, GMU',
  siteUrl: 'http://abhi-742.github.io/',
  siteLanguage: 'en_US',
  name: 'Abhi Venkata Sri Krishna Devarayalu Anumanchi',
  location: 'Fairfax, Virginia',
  email: 'avsk742@gmail.com',
  github: 'https://github.com/ABHI-742',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ABHI-742',
    },

    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/devarayalu-anumanchi/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact ',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
