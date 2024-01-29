const kts = './images/kts-landing-page.png'
const vidya = './images/Vidya.png'
const fitness = './images/fitness_app.png'
const employee = './images/Employee-Management.png'
const inventory = './images/Inventory-MAnagement.png'

const works = [
    {
        id: 0,
        title: "Kraken The Stack",
        description: "A React website converted from a static website.",
        image: kts,
        url: 'https://krakenthestack.com',
    },
    {
        id: 1,
        title: "Group Project 1: Vidya",
        description: "A single page videogame search and review application with JavaScript DOM rendering.",
        image: vidya,
        url: 'https://luis00809.github.io/Group-3-project/',
        repoUrl: 'https://github.com/jacobrkovacs/Group-3-project'
    },
    {
        id: 2,
        title: "Group Project 2: Fitness App",
        description: "A full-stack fitness application with authentication, MySQL and hosted on Heroku",
        image: fitness,
        url: 'https://get-your-fit-on-92db4f8ac46c.herokuapp.com/signup',
        repoUrl: 'https://github.com/jacobrkovacs/GET-YOUR-FIT-ON'
    },
    {
        id: 3,
        title: "Employee Database Management CLI",
        description: "A JavaScript command-line content management system for an employee database.",
        image: employee,
        url: 'https://drive.google.com/file/d/1cttTJQeP4KIEExvGQub_a8JdyBJn6TyN/view',
        repoUrl: 'https://github.com/jacobrkovacs/employee-database-manager'
    },
    {
        id: 4,
        title: "Inventory Management Backend",
        description: "A JavaScript inventory management system using express and sequelize",
        image: inventory,
        url: 'https://drive.google.com/file/d/1YSUP71cv-35VWFsSdA4IDieUMIzWEZ-P/view',
        repoUrl: 'https://github.com/jacobrkovacs/e-commerce'
    },
];

export default works;