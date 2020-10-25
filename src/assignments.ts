export interface assignment {
    title: string;
    repo: string;
    demo?: string;
    tech: string;
    demoOrder: number;
}

export const assignments: Array<assignment> = [
    {
        title: "Graded Assignment #10: Tech Jobs (Persistent)",
        repo: "https://github.com/Cbuzzard/java-web-dev-techjobs-persistent",
        demo: "https://corwin-lc-101.herokuapp.com/",
        tech: "Java/Spring Boot/Thymeleaf/MySQL",
        demoOrder: 1
    },
    {
        title: "Graded Assignment #9: Tech Jobs (MVC)",
        repo: "https://github.com/Cbuzzard/java-web-dev-techjobs-mvc",
        demo: "https://corwin-lc-101.herokuapp.com/a3",
        tech: "Java/Spring Boot/Thymeleaf",
        demoOrder: 2
    },
    {
        title: "Graded Assignment #8: Tech Jobs (Object-Oriented Edition)",
        repo: "https://github.com/Cbuzzard/java-web-dev-techjobs-oo/tree/master/src/org/launchcode/techjobs_oo",
        tech: "Java",
        demoOrder: 28
    },
    {
        title: "Graded Assignment #7: Tech Jobs (Console Edition)",
        repo: "https://github.com/Cbuzzard/techjobs-console-java/tree/master/src/org/launchcode/techjobs/console",
        tech: "Java",
        demoOrder: 29
    },
    {
        title: "Graded Assignment #6: Orbit Report",
        repo: "https://github.com/Cbuzzard/orbit-report",
        demo: "https://cbuzzard.github.io/orbit-report/index.html",
        tech: "Angular/Typescript/HTML/CSS",
        demoOrder: 6
    },
    {
        title: "Graded Assignment #5: Launch Checklist Form",
        repo: "https://github.com/Cbuzzard/Launch-Checklist-Form",
        demo: "https://cbuzzard.github.io/Launch-Checklist-Form/",
        tech: "Javascript/HTML/CSS",
        demoOrder: 7
    },
    {
        title: "Graded Assignment #4: HTML Me Something",
        repo: "https://github.com/Cbuzzard/LC101Num4",
        demo: "https://cbuzzard.github.io/LC101Num4/",
        tech: "HTML/CSS",
        demoOrder: 12
    },
    {
        title: "Graded Assignment #3: Mars Rover",
        repo: "https://repl.it/@Corwin1998/mars-rover-starter",
        demo: "https://repl.it/@Corwin1998/mars-rover-starter",
        tech: "Nodejs/Javascript/Jasmine",
        demoOrder: 20
    },
    {
        title: "Graded Assignment #2: Scrabble Scorer",
        repo: "https://repl.it/@Corwin1998/Graded-Assignment-2-Scrabble-Scorer#index.js",
        demo: "https://repl.it/@Corwin1998/Graded-Assignment-2-Scrabble-Scorer#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 21
    },
    {
        title: "Graded Assignment #1: Candidate Testing",
        repo: "https://repl.it/@Corwin1998/Graded-Assignment-1-Candidate-Testing#index.js",
        demo: "https://repl.it/@Corwin1998/Graded-Assignment-1-Candidate-Testing#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 23
    },
    {
        title: "Class 41 Studio: Tech Jobs Authentication",
        repo: "https://github.com/Cbuzzard/java-web-dev-techjobs-authentication",
        demo: "https://corwin-lc-101.herokuapp.com/s5",
        tech: "Java/Spring Boot/Thymeleaf/MySQL",
        demoOrder: 3
    },
    {
        title: "Class 36 Studio: Creating an AbstractEntity",
        repo: "https://github.com/Cbuzzard/coding-events/tree/abstract-entity-studio",
        demo: "https://corwin-lc-101.herokuapp.com/s4",
        tech: "Java/Spring Boot/Thymeleaf/MySQL",
        demoOrder: 4
    },
    {
        title: "Class 34 Studio: Spa User Validation",
        repo: "https://github.com/Cbuzzard/spa-day-starter-code/tree/user-signup-pt2",
        demo: "https://corwin-lc-101.herokuapp.com/s3/user/add",
        tech: "Java/Spring Boot/Thymeleaf",
        demoOrder: 8
    },
    {
        title: "Class 32 Studio: Spa Day!",
        repo: "https://github.com/Cbuzzard/spa-day-starter-code",
        demo: "https://corwin-lc-101.herokuapp.com/s2",
        tech: "Java/Spring Boot/Thymeleaf",
        demoOrder: 9
    },
    {
        title: "Class 30 Studio: Skills Tracker",
        repo: "https://github.com/Cbuzzard/skills-tracker",
        demo: "https://corwin-lc-101.herokuapp.com/s1",
        tech: "Java/Spring Boot/HTML",
        demoOrder: 10
    },
    {
        title: "Class 29 Studio: Spinning the Discs",
        repo: "https://github.com/Cbuzzard/java-web-dev-studio7",
        tech: "Java",
        demoOrder: 30
    },
    {
        title: "Class 28 Studio: Inheritance",
        repo: "https://github.com/Cbuzzard/quiz_app",
        tech: "Java",
        demoOrder: 31
    },
    {
        title: "Class 27 Studio: Unit Testing",
        repo: "https://github.com/Cbuzzard/junit-studio-lc101",
        tech: "Java/Junit",
        demoOrder: 32
    },
    {
        title: "Class 26 Studio: Classes and Objects Part 2",
        repo: "https://github.com/Cbuzzard/java-web-dev-exercises/tree/restaurant",
        tech: "Java",
        demoOrder: 33
    },
    {
        title: "Class 24 Studio: Control Flow and Collections",
        repo: "https://github.com/Cbuzzard/java-web-dev-exercises/tree/master/src/org/launchcode/java/studios/collections",
        tech: "Java",
        demoOrder: 34
    },
    {
        title: "Class 23 Studio: Data Types",
        repo: "https://github.com/Cbuzzard/java-web-dev-exercises/tree/master/src/org/launchcode/java/studios/areaofacircle",
        tech: "Java",
        demoOrder: 35
    },
    {
        title: "Class 20 Studio: Angular, Part 3",
        repo: "https://github.com/Cbuzzard/Class-20-studio",
        demo: "https://cbuzzard.github.io/Class-20-studio/index.html",
        tech: "Angular/Typescript/HTML/CSS",
        demoOrder: 5
    },
    {
        title: "Class 19 Studio: Angular, Part 2",
        repo: "https://github.com/Cbuzzard/Class-19-Studio",
        demo: "https://cbuzzard.github.io/Class-19-Studio/",
        tech: "Angular/Typescript/HTML/CSS",
        demoOrder: 13
    },
    {
        title: "Class 18 Studio: Angular, Part 1",
        repo: "https://github.com/Cbuzzard/angular-lc101-mission-planner",
        demo: "https://cbuzzard.github.io/angular-lc101-mission-planner/",
        tech: "Angular/Typescript/HTML/CSS",
        demoOrder: 14
    },
    {
        title: "Class 17 Studio: TypeScript",
        repo: "https://github.com/Cbuzzard/typescript-lc101-projects",
        tech: "Typescript",
        demoOrder: 36
    },
    {
        title: "Class 16 Studio: Fetch & JSON",
        repo: "https://github.com/Cbuzzard/Fetch-and-JSON-Studio",
        demo: "https://cbuzzard.github.io/Fetch-and-JSON-Studio/",
        tech: "HTML/CSS",
        demoOrder: 15
    },
    {
        title: "Class 15 Studio: HTTP and Forms",
        repo: "https://github.com/cbuzzard/HTTP-and-Forms-Studio/",
        demo: "https://cbuzzard.github.io/HTTP-and-Forms-Studio/",
        tech: "HTML/CSS",
        demoOrder: 16
    },
    {
        title: "Class 14 Studio: The DOM and Events",
        repo: "https://github.com/cbuzzard/DOM-and-Events-Studio/",
        demo: "https://cbuzzard.github.io/DOM-and-Events-Studio/",
        tech: "Javascript/HTML/CSS",
        demoOrder: 11
    },
    {
        title: "Class 11 Studio: Classes",
        repo: "https://repl.it/@Corwin1998/Class-11-Studio-Classes-1#index.js",
        demo: "https://repl.it/@Corwin1998/Class-11-Studio-Classes-1#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 17
    },
    {
        title: "Class 9 Studio: Unit Testing",
        repo: "https://repl.it/@Corwin1998/UnitTestingStudio01#index.js",
        demo: "https://repl.it/@Corwin1998/UnitTestingStudio01#index.js",
        tech: "Nodejs/Javascript/Jasmine",
        demoOrder: 18
    },
    {
        title: "Class 7 Studio: Objects & Math",
        repo: "https://repl.it/@Corwin1998/Class-7-Studio-Objects-and-Math#index.js",
        demo: "https://repl.it/@Corwin1998/Class-7-Studio-Objects-and-Math#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 19
    },
    {
        title: "Class 6 Studio: More Functions",
        repo: "https://repl.it/@Corwin1998/Class-6-Studio-More-Functions#index.js",
        demo: "https://repl.it/@Corwin1998/Class-6-Studio-More-Functions#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 22
    },
    {
        title: "Class 5 Studio: Functions",
        repo: "https://repl.it/@Corwin1998/Class-5-Studio-Functions#index.js",
        demo: "https://repl.it/@Corwin1998/Class-5-Studio-Functions#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 24
    },
    {
        title: "Class 4 Studio: Loops",
        repo: "https://repl.it/@Corwin1998/Class-4-Studio-Loops#index.js",
        demo: "https://repl.it/@Corwin1998/Class-4-Studio-Loops#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 25
    },
    {
        title: "Class 3 Studio: Strings & Arrays",
        repo: "https://repl.it/@Corwin1998/Class-3-Studio-Strings-and-Arrays#index.js",
        demo: "https://repl.it/@Corwin1998/Class-3-Studio-Strings-and-Arrays#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 26
    },
    {
        title: "Class 1 Studio: Data & Variables",
        repo: "https://repl.it/@Corwin1998/Class-1-Studio-Data-and-Variables#index.js",
        demo: "https://repl.it/@Corwin1998/Class-1-Studio-Data-and-Variables#index.js",
        tech: "Nodejs/Javascript",
        demoOrder: 27
    },
]