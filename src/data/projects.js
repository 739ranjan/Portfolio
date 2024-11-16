import atm from '../images/atm.jpg';
import job from '../images/job-board.png';
import number from '../images/number.jpg';
import expense from '../images/expense-tracker.jpg';
import plant from '../images/plant.jpg';
import react from '../images/react.jpeg';
import rca from '../images/rca.jpg';

const projects = [
    {
        title:"Job Board",
        img: job,
        techUsed: ["MongoDB", "Nodejs"],
        features:[
            "Recruter and Job Seeker registration and login", 
            "Recruiter can Create Jobs, view applications, delete jobs, update jobs",  
            "Job Seeker can vie the listed jobs and apply to the jobs, view applied application.", 
        ],
        website: "https://job-board-delta-sooty.vercel.app/",
        github: "https://github.com/739ranjan/Job-Board.git",
    },
    {
        title:"Expense Tracker",
        img: expense,
        techUsed: ["HTML", "CSS", "Tailwind", "ReactJs", "MongoDB", "NodeJs"],
        features:[
            "User registration and login", 
            "Add, edit, and delete transactions",  
            "View expenses by category and time period",  
            "Graphical analysis of cash flow"
        ],
        website: "expense",
        github: "https://github.com/739ranjan/Expense-Tracker.git",
    },
    {
        title:"ATM Managemet System",
        img: atm,
        techUsed: ["Java", "JavaFx", "MySQL"],
        features:[
            "User registration and login.", 
            "View balance, withdraw, deposite, generate mini-statement features available.",  
            "Download Pdf of generated mini-statement",  
            "Update password is also available"
        ],
        github: "https://github.com/739ranjan/ATM-Management-System.git",
        youtube: "https://youtu.be/RbHwWRGZPdM?si=V47wZ0ZJE4o6XhCa"
    },
    {
        title:"Plant Disease Identification and Diagnosis",
        img: plant,
        techUsed: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Tenserflow", "Bootstrap"],
        features:[
            "User can click image or upload from device.", 
            "Based on image uploaded the model will predict the disease and gives more information about it ",  
            "Currently available for 34 disease of 8 crops",  
            "Model used: ALexNet"
        ],
        github: "https://github.com/739ranjan/Plant-Disease-Identification-and-Diagnosis.git",
    },
    {
        title:"Number Guessing Game",
        img: number,
        techUsed: ["Java", "JavaFX", "MySQL"],
        features:[
            "Set your Name", 
            "Guess a number between 0-10.",  
            "If your guessed number is correct awarded with points and if wrong few points will be deducted.",
            "In the end you will get your total score and chance to play again."
        ],
        github: "https://github.com/739ranjan/Number-Guessing-Game.git",
        youtube: "https://youtu.be/4Te_7Eq7_pQ?si=VZBy1XwWVm9QMx_o"
    },
    {
        title:"React Basic Projects",
        img: react,
        techUsed: ["Reactjs", "CSS", "Tailwind"],
        features:[
            "It consists of multiple basic projects for learning and implementing react concepts.", 
            "Projects includes Counter, Digital Clock, Background Changer, Calculator, Countdown Timer, Creating List.",  
            "Also Implemented Sidebar to learn the concepts of UseLocation."
        ],
        website: "react",
        github: "https://github.com/739ranjan/React-Basic-Projects.git",
    },
    
    {
        title:"Compressive Strength of RCA",
        img: rca,
        techUsed: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap", "Machine Learning"],
        features:[
            "User can fill out the parameters required to predict the RCA Strength.", 
            "On clicking Submit button they can view the RCA strength.",  
            "Accuracy of model is 73%.",  
            "Model used: Regression"
        ],
        website: "https://compressive-strength-of-rca-prediction.vercel.app/",
        github: "https://github.com/739ranjan/Compressive-Strength-Of-RCA-Prediction.git",
    },
    
];

export default projects;