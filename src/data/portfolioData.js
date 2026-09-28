export const personalDetails = {
  name: "SHIVAJI C S",
  title: "Java Backend Developer & CS Engineering Student",
  location: "Tamil Nadu, India",
  email: "shivajichandramohan97@gmail.com",
  phone: "+91 9894180126",
  github: "https://github.com/shivaji-25",
  linkedin: "https://linkedin.com/in/shivaji-cs",
  leetcode: "https://leetcode.com/u/shivajics/",
  resume: "/resume.pdf",
  college: "Dr. N.G.P. Institute of Technology",
  year: "III Year B.E. Computer Science",
  cgpa: "7.45",
  bioShort:
    "Computer Science undergraduate specializing in backend architecture, Java, Spring Boot, MySQL, and Data Structures & Algorithms.",
  bioFull:
    "I am a Computer Science and Engineering undergraduate specializing in backend architecture, distributed systems, and algorithmic problem-solving. My core competencies center on Java, Spring Boot, relational database design with MySQL, and high-throughput RESTful API development. Through extensive problem-solving (127+ LeetCode DSA solutions) and industry internship experience, I focus on engineering dependable, fault-tolerant, and high-performance software systems.",
  roles: [
    "Java Backend Engineer",
    "Software Development Engineer (SDE)",
    "Distributed Systems & Database Architect",
    "Data Structures & Algorithms Specialist",
  ],
};

export const codeSnippets = {
  "BackendService.java": {
    filename: "BackendService.java",
    language: "java",
    code: `package com.shivaji.portfolio;

@RestController
@RequestMapping("/api/v1/services")
public class BackendService {

    @Autowired
    private RoutingEngine routingEngine;

    @GetMapping("/status")
    public ResponseEntity<ResponseMap> checkSystemHealth() {
        boolean isDatabaseConnected = true;
        int dsaProblemsSolved = 123;
        
        return ResponseEntity.ok(
            new ResponseMap("200 OK", "Shivaji's Backend Active", dsaProblemsSolved)
        );
    }
}`,
    output: `> COMPILING BackendService.java...
> SUCCESS (0ms)
[HTTP 200] Status: Active | Engineer: SHIVAJI C S | Solved: 123+ LeetCode`,
  },
  "DSA_Solver.java": {
    filename: "DSA_Solver.java",
    language: "java",
    code: `public class DijkstraShortestPath {
    public int findMinDistance(int[] dist, boolean[] visited) {
        int min = Integer.MAX_VALUE, minIndex = -1;
        for (int v = 0; v < dist.length; v++) {
            if (!visited[v] && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }
        return minIndex;
    }
}`,
    output: `> EXECUTING DijkstraShortestPath.java...
> Optimal Path Computed: [Vertex 0 -> Vertex 4 -> Target]
> Time Complexity: O((V + E) log V) using PriorityQueue`,
  },
  "SystemConfig.json": {
    filename: "SystemConfig.json",
    language: "json",
    code: `{
  "developer": "SHIVAJI C S",
  "role": "Software Development Engineer (SDE)",
  "education": "B.E. Computer Science (Dr. NGP IT)",
  "cgpa": 7.45,
  "skills": ["Java", "Spring Boot", "MySQL", "DSA", "REST APIs"],
  "status": "Open to Software Opportunities"
}`,
    output: `> PARSING SystemConfig.json...
> Config Validated: Developer SHIVAJI C S profile loaded successfully.`,
  },
};

export const leetcodeAnalytics = {
  totalSolved: 127,
  easy: 48,
  medium: 66,
  hard: 13,
  topTopics: [
    { topic: "Graph Algorithms (Dijkstra, BFS, DFS)", count: 28 },
    { topic: "Trees & Binary Search Trees", count: 24 },
    { topic: "Dynamic Programming & Recursion", count: 22 },
    { topic: "Arrays & Two Pointers", count: 32 },
    { topic: "Object-Oriented Design (OOP)", count: 17 },
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const quickFacts = [
  {
    label: "Academic Rank",
    value: "CGPA 7.45",
    desc: "Dr. N.G.P. IT • III Year",
    highlight: "#10B981",
  },
  {
    label: "Problem Solving",
    value: "123+ Solved",
    desc: "LeetCode DSA Focus",
    highlight: "#3B82F6",
  },
  {
    label: "Industry Practice",
    value: "Internship",
    desc: "Pinesphere Solution",
    highlight: "#06B6D4",
  },
  {
    label: "Core Focus",
    value: "Java & Backend",
    desc: "Spring Boot, REST, MySQL",
    highlight: "#6366F1",
  },
];

export const skillCategories = [
  {
    category: "Backend Engineering",
    icon: "FaServer",
    skills: [
      { name: "Java", level: "Core Expertise" },
      { name: "Spring Boot", level: "Microservices" },
      { name: "Node.js", level: "Runtime" },
      { name: "Express.js", level: "REST APIs" },
      { name: "PHP", level: "Web Scripts" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "FaDatabase",
    skills: [
      { name: "MySQL", level: "Relational Schemas" },
      { name: "MongoDB", level: "NoSQL Docs" },
      { name: "SQLite", level: "Embedded DB" },
      { name: "Query Optimization", level: "Indexing" },
    ],
  },
  {
    category: "Frontend & Interfaces",
    icon: "FaCode",
    skills: [
      { name: "React.js", level: "Component UI" },
      { name: "JavaScript (ES6+)", level: "Web Logic" },
      { name: "Tailwind CSS", level: "Utility Styling" },
      { name: "HTML5 / CSS3", level: "Layout Specs" },
    ],
  },
  {
    category: "Developer Tools & Core CS",
    icon: "FaTools",
    skills: [
      { name: "Git & GitHub", level: "Version Control" },
      { name: "Postman", level: "API Testing" },
      { name: "Data Structures & Algorithms", level: "127+ LeetCode" },
      { name: "OOP / DBMS / OS / Networks", level: "Core Foundation" },
    ],
  },
];

export const projects = [
  {
    id: "campus-nav",
    title: "Campus Navigation System",
    year: "2026",
    impact:
      "Engineered pathfinding algorithms for real-time university route calculation & building lookup.",
    image: "/assets/campus_nav.jpg",
    category: "Java & DSA Pathfinding",
    tech: ["Java", "DSA (Dijkstra)", "Graph Algorithms", "Data Structures"],
    architecture:
      "Java graph-based pathfinding engine utilizing adjacency lists and Dijkstra algorithm for calculating optimal campus walking routes.",
    bullets: [
      "Implemented Dijkstra and graph pathfinding algorithms in Java for computing shortest campus routes.",
      "Structured graph data structures for university buildings, landmarks, and connected walking paths.",
      "Optimized route calculation time complexity to deliver real-time directional responses.",
    ],
    github: "https://github.com/shivaji-25",
    demo: "#contact",
  },
  {
    id: "student-mgmt",
    title: "Student Management System",
    year: "2026",
    impact:
      "Developed a responsive web platform for managing student records, enrollment, and academic details.",
    image: "/assets/student_mgmt.jpg",
    category: "PHP & Web Stack",
    tech: ["PHP", "HTML5", "CSS3", "Web Interfaces", "CRUD Operations"],
    architecture:
      "Web-based management platform built using PHP backend scripts paired with semantically styled HTML5 and CSS3 user interfaces.",
    bullets: [
      "Built dynamic student record management and course registration web portals in PHP.",
      "Designed responsive and user-friendly administrative layouts using custom HTML5 & CSS3.",
      "Implemented server-side validation and database record handling for seamless administrative workflows.",
    ],
    github: "https://github.com/shivaji-25",
    demo: "#contact",
  },
  {
    id: "package-tracking",
    title: "Package Delivery Tracking System",
    year: "2026",
    impact:
      "Built real-time parcel tracking and logistics route optimization architecture.",
    image: "/assets/package_tracking.jpg",
    category: "Java & DSA Logistics",
    tech: ["Java", "DSA", "Logistics Algorithms", "Data Models"],
    architecture:
      "Java-powered logistics tracking system employing custom Data Structures & Algorithms for efficient transit checkpoint logging and path updates.",
    bullets: [
      "Engineered Java algorithms for real-time shipment dispatch, transit logging, and delivery status updates.",
      "Utilized custom data structures for managing package tracking IDs and checkpoint priority queues.",
      "Designed efficient memory algorithms for fast status lookups and order progress evaluation.",
    ],
    github: "https://github.com/shivaji-25",
    demo: "#contact",
  },
  {
    id: "online-voting",
    title: "Online Voting System",
    year: "2026",
    impact:
      "Designed a secure digital election platform with Spring Boot backend and real-time H2 database persistence.",
    image: "/assets/online_voting.jpg",
    category: "Spring Boot & H2 Database",
    tech: ["HTML5", "CSS3", "JavaScript", "Java Spring Boot", "H2 Console DB"],
    architecture:
      "Full-stack web application powered by Java Spring Boot backend, H2 in-memory database console persistence, and interactive HTML/CSS/JS frontend UI.",
    bullets: [
      "Constructed RESTful Spring Boot service managing secure voter authentication and ballot submissions.",
      "Configured in-memory H2 Database Console for persistent vote storage and administrative query inspection.",
      "Built interactive frontend election dashboard using HTML5, CSS3, and JavaScript.",
    ],
    github: "https://github.com/shivaji-25",
    demo: "#contact",
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Pinesphere Solution, Coimbatore",
    duration: "Internship Period",
    bullets: [
      "Developed web application features leveraging modern frontend and backend tech stacks.",
      "Gained hands-on experience in full-stack software development workflows and version control.",
      "Collaborated in team environments to design, test, and ship production-ready client solutions.",
      "Strengthened practical understanding of REST APIs, database queries, and clean code practices.",
    ],
  },
];

export const certifications = [
  {
    title: "Project Completion Certificate",
    issuer: "Pinesphere Solutions",
    date: "May 2026",
    description:
      "Completed an internship focused on Python and Django web development, including application development, database integration, testing, and deployment concepts.",
    image: "/assets/pinesphere-internship-certificate.png",
  },
  {
    title: "Full Stack with MERN Certificate",
    issuer: "Pinesphere Solutions",
    date: "Jan – Feb 2026",
    description:
      "Successfully completed the Full Stack with MERN additional-skills course conducted for the Computer Science and Engineering department.",
    image: "/assets/pinesphere-mern-certificate.png",
  },
];

export const achievements = [
  {
    icon: "FaCode",
    number: "123+",
    label: "LeetCode Solved",
    desc: "Proven problem-solving proficiency in Data Structures & Algorithms with Java.",
  },
  {
    icon: "FaJava",
    number: "Java DSA",
    label: "Core Mastery",
    desc: "Solid grasp of Object-Oriented Principles, Memory Management, and Data Structures.",
  },
  {
    icon: "FaLayerGroup",
    number: "4+",
    label: "Engineering Projects",
    desc: "End-to-end built applications using Java, Spring Boot, PHP, React, and MySQL.",
  },
  {
    icon: "FaTrophy",
    number: "Events",
    label: "Hackathons",
    desc: "Active participant in technical symposiums and university coding competitions.",
  },
];

export const education = {
  degree: "Bachelor of Engineering (Computer Science and Engineering)",
  institution: "Dr. N.G.P. Institute of Technology",
  year: "III Year (Current)",
  cgpa: "7.45",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
  ],
};
