export interface PortfolioData {
  hero: {
    badge: string;
    title: string;
    summary: string;
    modalDetail: {
      description: string;
      links: { name: string; url: string; icon: string }[];
    };
  };
  experience: {
    badge: string;
    summary: string;
    timeline: {
      role: string;
      company: string;
      period: string;
      location: string;
      description: string;
    }[];
  };
  techStack: {
    title: string;
    summary: string;
    categories: {
      name: string;
      skills: string[];
    }[];
  };
  education: {
    summary: string;
    details: {
      degree: string;
      institution: string;
      period: string;
      location: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    email: string;
    phone: string;
  };
}

export const usePortfolioData = () => {
  const data: PortfolioData = {
    hero: {
      badge: 'Full-Stack & UI/UX Developer',
      title: 'Rafi Athallah Nabil',
      summary: 'Translating complex Figma prototypes into fast, scalable web applications using modern JS frameworks, Go, and Python.',
      modalDetail: {
        description: 'I possess a hybrid superpower: understanding user-centered design principles while engineering robust backend architecture. My goal is to build digital experiences that are not only visually striking but structurally sound.',
        links: [
          { name: 'GitHub', url: 'https://github.com/RafiAthallahN', icon: 'Github' },
          { name: 'Dribbble', url: 'https://dribbble.com/ItsMeRafi', icon: 'Dribbble' },
          { name: 'LinkedIn', url: 'https://linkedin.com/in/rafi-athallah-nabil', icon: 'Linkedin' },
        ],
      },
    },
    experience: {
      badge: '⚡ 40% Load Time Boost',
      summary: 'Proven track record at Telkomsigma and Aksamedia building production-ready apps and APIs.',
      timeline: [
        {
          role: 'Programmer',
          company: 'PT Sigma Cipta Caraka (Telkomsigma)',
          period: 'Jul 2023 – Present',
          location: 'Yogyakarta',
          description: 'Developed responsive web apps using Vue/Nuxt and React/Next from Figma prototypes. Built frontend components and robust backend REST APIs with Go and Python. Optimized application performance by reducing page load times by 40% via code splitting and lazy loading. Mentored junior developers in Agile/Scrum.',
        },
        {
          role: 'UI/UX Designer Intern',
          company: 'PT Aksamedia Mulia Digital',
          period: 'Jun 2022 – Nov 2022',
          location: 'Surabaya',
          description: 'Designed responsive websites and mobile apps using Figma. Collaborated with frontend devs to ensure 100% design-to-code implementation fidelity.',
        },
      ],
    },
    techStack: {
      title: 'Tech Stack & Technical Arsenal',
      summary: 'Bridging frontend aesthetics with backend logic seamlessly.',
      categories: [
        {
          name: 'Frontend Engineering',
          skills: ['Vue.js', 'Nuxt.js', 'React', 'Next.js', 'HTML5/CSS3', 'State Management'],
        },
        {
          name: 'Backend Solutions',
          skills: ['Go (Golang)', 'Python', 'REST APIs', 'Database Management'],
        },
        {
          name: 'UI/UX Design',
          skills: ['Figma Mastery', 'Wireframing', 'Prototyping', 'Design Systems', 'Developer Handoff'],
        },
        {
          name: 'Workflow & Methods',
          skills: ['Git', 'Agile/Scrum', 'Code Splitting & Lazy Loading'],
        },
      ],
    },
    education: {
      summary: 'Computer Science & Software Engineering background.',
      details: [
        {
          degree: 'Bachelor of Computer Science',
          institution: 'Universitas Siber Asia',
          period: 'Apr 2024 – Apr 2028, Expected',
          location: 'Jakarta',
          description: 'Currently Semester 5. Coursework in Digital Technology and Web Development.',
        },
        {
          degree: 'Software Engineering Diploma',
          institution: 'SMKS Telkom Sandhy Putra Malang',
          period: 'Jul 2020 – May 2023',
          location: 'Malang',
          description: 'Graduated with 87.39/100.00. Specialized online coursework in UI/UX and Web Dev.',
        },
      ],
    },
    contact: {
      title: 'Have a project or open role? Let\'s build together.',
      email: 'rafiathallahnabil@gmail.com',
      phone: '+62 878-5909-8443',
    },
  };

  return { portfolioData: data };
};
