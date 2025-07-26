// Mock data for the portfolio website

export const personalInfo = {
  name: "Hitanshu Dhawan",
  title: "Senior Android Engineer",
  company: "PhonePe",
  location: "Pune, Maharashtra, India",
  tagline: "Android Engineer. Problem Solver. Life-long Learner.",
  bio: "A passionate software engineer who's always on a quest to learn technologies and make some awesome stuff using them. Problems always interest me and solving them gives an adrenaline rush.",
  email: "hitanshudhawan1996@gmail.com",
  phone: "+91 9818097025",
  website: "https://hitanshudhawan.com",
  linkedin: "https://linkedin.com/in/hitanshu-dhawan",
  github: "https://github.com/hitanshu-dhawan",
  medium: "https://medium.com/@hitanshudhawan",
  twitter: "@hitanshu_dhawan"
};

export const experience = [
  {
    id: 1,
    company: "PhonePe",
    position: "Senior Android Engineer",
    duration: "2023 - Present",
    location: "Pune, Maharashtra, India",
    description: "Working on India's leading digital payment platform, focusing on Android development and user experience optimization.",
    technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "RxJava", "Retrofit"],
    achievements: [
      "Leading Android development for key payment features",
      "Mentoring junior developers and establishing coding standards",
      "Contributing to app architecture decisions"
    ]
  },
  {
    id: 2,
    company: "Urban Company",
    position: "Software Engineer",
    duration: "Dec 2018 - 2023",
    location: "Gurgaon, India",
    description: "Full-time software engineer working on mobile applications and backend services.",
    technologies: ["Android", "Kotlin", "Java", "MVP", "MVVM", "Firebase"],
    achievements: [
      "Worked on a feature to upsell add-ons to customers, which increased AOV by 35%",
      "Developed an Android library for generating boilerplate code using annotation processors",
      "Implemented custom lint rules to ensure proper coding standards",
      "Designed and optimized new search screen, increasing conversion rate by 16%",
      "Created developer tools by forking Chucker library for better analytics inspection"
    ]
  },
  {
    id: 3,
    company: "Urban Company",
    position: "Software Engineer Intern",
    duration: "Jun 2018 - Nov 2018",
    location: "Gurgaon, India",
    description: "Internship focused on Android development and mobile app architecture.",
    technologies: ["Android", "Java", "MVP", "MVVM", "Payment Integration"],
    achievements: [
      "Used MVP and MVVM architecture to implement product features",
      "Integrated payment gateways like Juspay and Amazon Pay",
      "Reduced app's memory usage by 20% by detecting and fixing memory leaks"
    ]
  }
];

export const education = {
  institution: "Manav Rachna International University",
  degree: "B.Tech in Computer Science and Engineering",
  location: "Faridabad, India",
  duration: "2014 - 2018",
  achievements: [
    "Graduated with distinction",
    "Active in coding competitions and hackathons",
    "Member of the Computer Science Society"
  ]
};

export const skills = {
  primary: [
    "Android Development",
    "Kotlin",
    "Java",
    "Jetpack Compose",
    "Android SDK"
  ],
  secondary: [
    "SQL",
    "Room Database",
    "Firebase",
    "Retrofit",
    "RxJava",
    "Coroutines",
    "Git",
    "CI/CD"
  ],
  tools: [
    "Android Studio",
    "IntelliJ IDEA",
    "Git",
    "Jira",
    "Figma",
    "Postman"
  ],
  specialties: [
    "Annotation Processing",
    "Custom Lint Rules",
    "Performance Optimization",
    "Memory Management",
    "App Architecture"
  ]
};

export const projects = [
  {
    id: 1,
    title: "McCompose",
    description: "A McDonald's app built with Jetpack Compose, featuring animations, custom layouts, light/dark theme, and state management.",
    longDescription: "McCompose is a complete McDonald's application clone built entirely with Jetpack Compose. It demonstrates modern Android development practices, including state management, navigation, animations, and theming. The project showcases advanced Compose techniques and serves as a reference for developers learning the framework.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzUzNTQ4NjQ4fDA&ixlib=rb-4.1.0&q=85",
    github: "https://github.com/hitanshu-dhawan/McCompose",
    demo: null,
    technologies: ["Jetpack Compose", "Kotlin", "Android", "Material Design", "Navigation"],
    features: [
      "Complete UI built with Jetpack Compose",
      "Custom animations and transitions",
      "Light and dark theme support",
      "State management best practices",
      "Modern Android architecture"
    ],
    recognition: "Featured in Android Weekly Issue #453",
    stars: 371,
    forks: 24,
    category: "mobile"
  },
  {
    id: 2,
    title: "SpannableStringParser",
    description: "An Android library for easily styling text with formatted strings that can come from backend servers.",
    longDescription: "SpannableStringParser is a powerful Android library that allows developers to style text using formatted strings that can be received from backend servers. It performs lexical analysis followed by parsing using finite automata to process strings and converts them to spannable strings with proper styling.",
    image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTM1NDg2NDR8MA&ixlib=rb-4.1.0&q=85",
    github: "https://github.com/hitanshu-dhawan/SpannableStringParser",
    demo: null,
    technologies: ["Android", "Kotlin", "Text Processing", "Library Development", "Finite Automata"],
    features: [
      "Server-side text formatting support",
      "Lexical analysis and parsing",
      "Finite automata implementation",
      "Easy integration with existing apps",
      "Comprehensive documentation"
    ],
    recognition: "Featured in Android Weekly Issue #396",
    stars: 218,
    forks: 17,
    category: "library"
  },
  {
    id: 3,
    title: "FirebaseMLKit",
    description: "Firebase ML Kit 101 Series - comprehensive tutorial project covering all ML Kit APIs.",
    longDescription: "A comprehensive tutorial project that demonstrates the usage of all Firebase ML Kit APIs. This project serves as a complete guide for developers looking to integrate machine learning features into their Android applications using Firebase ML Kit.",
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxhbmRyb2lkJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNTM1NDg2NDh8MA&ixlib=rb-4.1.0&q=85",
    github: "https://github.com/hitanshu-dhawan/FirebaseMLKit",
    demo: null,
    technologies: ["Firebase ML Kit", "Kotlin", "Android", "Machine Learning", "Computer Vision"],
    features: [
      "Text Recognition implementation",
      "Face Detection with landmarks",
      "Barcode Scanning functionality",
      "Image Labeling capabilities",
      "Landmark Recognition features",
      "Language Identification tools",
      "Smart Reply suggestions"
    ],
    recognition: "Complete tutorial series published on Medium",
    stars: 108,
    forks: 43,
    category: "tutorial"
  },
  {
    id: 4,
    title: "PopCorn",
    description: "Movies and TV Shows app powered by TMDb API with modern Android architecture.",
    longDescription: "PopCorn is a comprehensive movies and TV shows application that demonstrates modern Android development practices. Built with clean architecture principles, it provides users with a smooth experience for discovering and exploring entertainment content.",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTM1NDg2NDR8MA&ixlib=rb-4.1.0&q=85",
    github: "https://github.com/hitanshu-dhawan/PopCorn",
    demo: null,
    technologies: ["Java", "Android", "TMDb API", "RecyclerView", "Retrofit", "Glide", "SQLite"],
    features: [
      "Movie and TV show discovery",
      "Detailed information screens",
      "Search functionality",
      "Favorites management",
      "Offline caching with SQLite",
      "Modern UI with RecyclerView"
    ],
    recognition: "Popular project demonstrating Android fundamentals",
    stars: 86,
    forks: 26,
    category: "mobile"
  }
];

export const otherProjects = [
  {
    id: 1,
    title: "Image Steganography",
    description: "C++ implementation of image steganography using LSB algorithm",
    technologies: ["C++", "Image Processing", "Cryptography"],
    github: "https://github.com/hitanshu-dhawan/ImageSteganography",
    stars: 74,
    category: "algorithm"
  },
  {
    id: 2,
    title: "CircularProgressBar-Compose",
    description: "Circular progress bar component for Jetpack Compose",
    technologies: ["Jetpack Compose", "Kotlin", "Android"],
    github: "https://github.com/hitanshu-dhawan/CircularProgressBar-Compose",
    stars: 45,
    category: "library"
  },
  {
    id: 3,
    title: "JsonDSL",
    description: "Domain Specific Language for JSON in Kotlin",
    technologies: ["Kotlin", "DSL", "JSON"],
    github: "https://github.com/hitanshu-dhawan/JsonDSL",
    stars: 32,
    category: "library"
  },
  {
    id: 4,
    title: "Ultimate TicTacToe",
    description: "Unbeatable Tic-Tac-Toe game using MinMax algorithm",
    technologies: ["AI", "Game Development", "MinMax Algorithm"],
    github: "https://github.com/hitanshu-dhawan/TicTacToeAI",
    stars: 28,
    category: "game"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Writing your own Annotation Processors in Android",
    slug: "annotation-processors-android",
    excerpt: "Deep dive into Annotation Processors and how to write custom ones for Android development. Learn how to generate boilerplate code and improve developer productivity.",
    content: "Annotation processors are powerful tools in Android development that can help reduce boilerplate code and improve developer productivity. In this comprehensive guide, we'll explore how to create custom annotation processors from scratch...",
    date: "2018-09-17",
    readTime: "12 min read",
    tags: ["Android", "Annotation Processing", "Code Generation", "Productivity"],
    featured: true,
    recognition: "Featured in Android Weekly Issue #329",
    image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTM1NDg2NDR8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "How I made my own LiveData! Internals of LiveData explained",
    slug: "custom-livedata-implementation",
    excerpt: "Understanding LiveData internals by building a custom implementation from scratch. Learn about observer patterns, lifecycle awareness, and reactive programming.",
    content: "LiveData is one of the most important components in Android Architecture Components. But have you ever wondered how it works internally? In this article, we'll build our own LiveData implementation...",
    date: "2019-05-04",
    readTime: "10 min read",
    tags: ["Android", "Architecture Components", "LiveData", "Reactive Programming"],
    featured: true,
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTM1NDg2NDR8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    title: "Firebase ML Kit 101: Text Recognition",
    slug: "firebase-ml-kit-text-recognition",
    excerpt: "Complete guide to implementing text recognition in Android apps using Firebase ML Kit. Learn about OCR, text processing, and practical implementations.",
    content: "Text recognition is one of the most useful features of Firebase ML Kit. In this tutorial, we'll implement text recognition from scratch and explore all the possibilities...",
    date: "2018-10-15",
    readTime: "8 min read",
    tags: ["Firebase", "ML Kit", "Text Recognition", "OCR", "Machine Learning"],
    featured: false,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzUzNTQ4NjQ4fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    title: "Firebase ML Kit 101: Face Detection",
    slug: "firebase-ml-kit-face-detection",
    excerpt: "Implementing face detection features in Android apps using Firebase ML Kit. Learn about face landmarks, expressions, and real-time detection.",
    content: "Face detection opens up numerous possibilities for mobile applications. In this comprehensive guide, we'll implement face detection using Firebase ML Kit...",
    date: "2018-11-12",
    readTime: "9 min read",
    tags: ["Firebase", "ML Kit", "Face Detection", "Computer Vision"],
    featured: false,
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxhbmRyb2lkJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNTM1NDg2NDh8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 5,
    title: "Modern Android Development with Jetpack Compose",
    slug: "modern-android-jetpack-compose",
    excerpt: "Exploring the future of Android UI development with Jetpack Compose. Learn about declarative UI, state management, and modern practices.",
    content: "Jetpack Compose represents a paradigm shift in Android UI development. In this article, we'll explore the key concepts and build a real application...",
    date: "2023-03-15",
    readTime: "15 min read",
    tags: ["Jetpack Compose", "Modern Android", "Declarative UI", "State Management"],
    featured: true,
    image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTM1NDg2NDR8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 6,
    title: "Performance Optimization in Android Apps",
    slug: "android-performance-optimization",
    excerpt: "Comprehensive guide to optimizing Android app performance. Learn about memory management, UI optimization, and profiling techniques.",
    content: "Performance is crucial for user experience in mobile applications. In this detailed guide, we'll cover various techniques to optimize Android app performance...",
    date: "2023-01-20",
    readTime: "18 min read",
    tags: ["Performance", "Optimization", "Memory Management", "Profiling"],
    featured: false,
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTM1NDg2NDR8MA&ixlib=rb-4.1.0&q=85"
  }
];

export const openSourceStats = {
  totalRepos: 30,
  totalStars: 1200,
  totalForks: 245,
  contributionsLastYear: 282,
  followers: 234,
  following: 75
};

export const talks = [
  {
    id: 1,
    title: "Writing your own Annotation Processors in Android",
    event: "Android Developer Meetup",
    date: "2019-03-15",
    location: "Gurgaon, India",
    description: "Deep dive into annotation processing, covering the fundamentals and practical implementation.",
    slides: "https://example.com/slides",
    video: "https://example.com/video",
    code: "https://github.com/hitanshu-dhawan/annotation-processing-talk"
  },
  {
    id: 2,
    title: "Writing DSLs in Kotlin",
    event: "Kotlin User Group",
    date: "2019-07-20",
    location: "Delhi, India",
    description: "Exploring Domain Specific Languages in Kotlin and how to build them effectively.",
    slides: "https://example.com/slides",
    video: "https://example.com/video",
    code: "https://github.com/hitanshu-dhawan/kotlin-dsl-talk"
  },
  {
    id: 3,
    title: "Writing Custom Lint Rules",
    event: "Android Dev Summit",
    date: "2020-02-10",
    location: "Bangalore, India",
    description: "Creating custom lint rules to maintain code quality and enforce team standards.",
    slides: "https://example.com/slides",
    podcast: "https://example.com/podcast",
    code: "https://github.com/hitanshu-dhawan/custom-lint-rules"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Google Certified Android Developer",
    date: "2019",
    description: "Successfully completed Google's Android Developer Certification program"
  },
  {
    id: 2,
    title: "Android Weekly Features",
    date: "2018-2020",
    description: "Multiple projects and articles featured in Android Weekly issues #329, #396, and #453"
  },
  {
    id: 3,
    title: "Open Source Contributor",
    date: "2017-Present",
    description: "Active contributor to open source projects with 1200+ GitHub stars across repositories"
  }
];