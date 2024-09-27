import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    tailwind,
    git,
    meta,
    starbucks,
    tesla,
    carrent,
    jobit,
    tripguide,
    threejs,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "work",
    //   title: "Work",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const   services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    // {
    //   name: "Php",
    //   icon: php ,
    // },
    // {
    //   name: "Laravel",
    //   icon: laravel ,
    // },
    // {
    //   name: "MYSQL",
    //   icon: mysql ,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Freelance",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2021 - Apr 2022",
      points: [
        "Developing and maintaining web applications using JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "I have contributed in many projects for IT students.",
        "Designed many websites useing HTML, CSS ( with Bootstrap Framework ), and Javascript. Also worked onmany project's and assignments using C, C++ , Python, Java basic knowledge.",
        "I applied the skills I learned through the Internet to a successful application using HTML, CSS, Bootstrap andJavaScript.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Back-end Developer",
      company_name: "FuturLabY",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - Jul 2022",
      points: [
        "Developing Laravel software products.",
        "Troubleshoot and debug applications.",
        "Participate in the entire application lifecycle mainly focusing on coding, debugging, and testing.",
        "Editing blade files to add the needed functionality (like ajax requests).",
        "Generating Localization files.",
      ],
    },
    {
      title: "Back-end Developer",
      company_name: "Anjroo",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Jul 2023",
      points: [
        "Participate in the entire application lifecycle mainly focusing on coding, debugging, and testing.",
        "Building Restful APIs for mobile applications.",
        "Worked with Google Map APIs to create an efficient business locations management system.",
        "payment gateways (PayPal, Stripe).",
        "Handling applications for a prestigious client, which involves incident resolving and code enhancements onchange requests.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };