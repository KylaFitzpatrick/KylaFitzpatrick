export const PROFILE = {
    name: "Kyla Fitzpatrick",
    role: "Web Developer",
    tagline: "I build fast, modern websites",
    email: "kfitzpatrick44@gmail.com",
    phone: "704.748.3653",
    linkedin: "https://www.linkedin.com/in/kylaannefitzpatrick",
    github: "https://github.com/KylaFitzpatrick",
    repo: "https://github.com/KylaFitzpatrick/KylaFitzpatrick",
    portfolioSite: "https://kylafitzpatrick.github.io/KylaFitzpatrick/",
    resumePdf: "/KylaFitzpatrick_Resume.pdf",
};

export const PROJECTS = [
    {
        id: "chillflows",
        name: "Chill Flows",
        domain: "chillflows.com",
        url: "https://chillflows.com",
        tag: "Wellness Community Platform",
        description:
            "A social wellness community for mind, body and soul — journaling with an AI Ayurvedic guide, dosha-matched yoga flows, meditations and a shared ritual feed. Shipped with iOS & Android app onboarding.",
        tech: ["React", "Tailwind CSS", "AI Integration", "Mobile-First"],
        image: "/assets/chillflows.webp",
    },
    {
        id: "gracreation",
        name: "Grá Creation",
        domain: "gracreation.com",
        url: "https://gracreation.com",
        tag: "Creative Studio & Art E-Commerce",
        description:
            "An independent Irish atelier for music, photography and visual artwork — artist accounts, a shoppable collection, watermarking and hand-released pieces sold directly from the artist.",
        tech: ["React", "E-Commerce", "Authentication", "Digital Assets"],
        image: "/assets/gracreation.webp",
    },
    {
        id: "bloomerslkn",
        name: "Bloomers LKN",
        domain: "bloomerslkn.com",
        url: "https://bloomerslkn.com",
        tag: "Local Business Website",
        description:
            "A warm, conversion-focused site for a woman-owned plantscape design & installation studio in Lake Norman — services, project gallery and a consult inquiry flow that turns visitors into clients.",
        tech: ["React", "Lead Capture", "Gallery System", "SEO"],
        image: "/assets/bloomerslkn.webp",
    },
];

export const CHAPTERS = [
    {
        n: "01",
        title: "Speed is a feature",
        body: "Sub-second loads, instant feedback and zero visual lag. Fast sites feel native, rank higher and convert better — so performance is designed in from the first commit, not patched in later.",
    },
    {
        n: "02",
        title: "Craft is the message",
        body: "Code is the medium, experience is the product. Precise grids, deliberate typography and micro-interactions that make an interface feel alive — every pixel earns its place.",
    },
    {
        n: "03",
        title: "Modern tools, 10x output",
        body: "An AI-augmented workflow with Emergent and Claude, paired with Adobe Photoshop and Express, compresses weeks of production into days — without sacrificing an ounce of craft.",
    },
];

export const SKILL_GROUPS = [
    {
        name: "Languages & Frameworks",
        skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C#", "SQL", "HTML5 & CSS3", "React", "Node.js", "Express", "GraphQL"],
    },
    {
        name: "Testing & Platforms",
        skills: ["Cypress", "TestCafe", "Selenium", "Pytest", "Postman", "Docker", "AWS", "Jenkins", "MongoDB", "Git & GitHub"],
    },
    {
        name: "AI & Design Craft",
        skills: ["Emergent", "Claude", "Adobe Photoshop", "Adobe Express", "Figma", "Prompt Engineering"],
        highlight: true,
    },
];

export const EXPERIENCE = [
    {
        role: "Software Engineer III",
        company: "Walmart Global Tech",
        where: "Sunnyvale, CA",
        when: "2024 — Present",
        points: [
            "Contributed to creating end-to-end test scripts with TypeScript and TestCafe",
            "Owned end-to-end testing for new features in collaboration with cross-functional teams",
            "Utilized Sauce Labs for mobile test execution on iOS and Android devices",
        ],
    },
    {
        role: "Software Development Test Engineer",
        company: "Encoura",
        where: "Remote",
        when: "2021 — 2022",
        points: [
            "Created REST API and GraphQL automated test scripts with Python and Pytest",
            "Learned load testing with Locust and Blazemeter in collaboration with colleagues",
            "Built Python test scripts and framework to verify GraphQL queries and mutations",
        ],
    },
    {
        role: "Software Development Engineer in Test",
        company: "Koupon",
        where: "Remote",
        when: "2020 — 2021",
        points: [
            "Created and maintained Cypress end-to-end automated test scripts",
            "Deployed builds to QA environments with Jenkins",
            "Assisted in creating API automated test scripts in JavaScript, TypeScript and Mocha",
        ],
    },
    {
        role: "Software Engineer in Test",
        company: "CoStar Group",
        where: "Austin, TX",
        when: "2019",
        points: [
            "Created and maintained UI automated test scripts in an Agile SDLC",
            "Built automated test suites with Visual Studio and Selenium",
            "Documented and tracked bugs in TFS with developers and product on an agile team",
        ],
    },
    {
        role: "Junior Software Development Engineer in Test",
        company: "ESO",
        where: "Austin, TX",
        when: "2018",
        points: [
            "Executed functional and regression tests for fire department applications in an Agile SDLC",
            "Leveraged Postman for API testing and Sauce Labs for cross-browser and device testing",
            "Documented bugs in Jira in collaboration with developers and product",
        ],
    },
    {
        role: "Quality Assurance Engineer",
        company: "CoStar Group",
        where: "Austin, TX",
        when: "2016 — 2018",
        points: [
            "Created and maintained UI automated test scripts in an Agile SDLC",
            "Learned automation testing with Visual Studio, Selenium, SpecFlow, Git Extensions and C#",
            "Created SQL statements to validate data in a SQL database",
        ],
    },
    {
        role: "Associate Quality Assurance Engineer",
        company: "CoStar Group",
        where: "San Francisco, CA",
        when: "2016",
        points: [
            "Created and executed test cases per business requirements in an Agile SDLC",
            "Collaborated with developers and designers to document and resolve bugs in TFS",
            "Functional testing in Firefox, Internet Explorer and Chrome, plus iOS and Android devices",
        ],
    },
    {
        role: "Junior Quality Assurance Analyst",
        company: "CITCO",
        where: "Charlotte, NC",
        when: "2014 — 2015",
        points: [
            "Analyzed test scenarios and cases in HP Quality Center and logged defects during functional testing",
            "Liaised with developers to ensure testing accuracy for over four hedge fund applications",
            "Developed and executed ad hoc and regression tests across all stages of an Agile SDLC",
        ],
    },
];

export const EDUCATION = [
    {
        title: "Bootcamp in Full Stack Web Development",
        school: "University of Texas — Austin, TX",
        note: "A 6-month program focused on learning technical programming skills",
    },
    {
        title: "B.S. Business Administration, International Business",
        school: "The University of North Carolina at Charlotte — Charlotte, NC",
        note: "",
    },
];

export const MARQUEE_ITEMS = [
    "Fast & Modern Websites",
    "React + Tailwind",
    "AI-Augmented Workflow",
    "Emergent × Claude",
    "Pixel-Perfect Craft",
    "Production-Ready Builds",
];
