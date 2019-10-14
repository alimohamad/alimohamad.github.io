class Involvement{
    
    constructor(title, tagline, items){
        this.title = title;
        this.tagline = tagline;
        this.items = items;
    }
    
}

function setDiv(x){
    document.getElementById("container-title").innerHTML = x.title;
    document.getElementById("container-tagline").innerHTML = x.tagline;
    document.getElementById("container-details").innerHTML = "";
    buildList(x.items);
}

function buildList(list){
    
    let ul = document.getElementById("container-details");
  
    for(let i = 0; i < list.length; i++){
    
        let h3 = document.createElement("h3");
        let li = document.createElement("li");
        li.setAttribute("class", "container-detail bio");
        li.innerHTML = list[i];
        h3.appendChild(li);
        ul.appendChild(h3);
      
    }
    
    console.log(ul);
  
}


let internshipDetails = [ 
    "In the summer of 2020, I'll be interning at Microsoft, on the COSINE DEV team which works on the core operating system and its functions.",
    
    "In the summer of 2019, I interned for Pearson again, working on their DevOps team, then with another intern on a proof of concept. At the beginning of the summer I worked with AWS Systems Manager and Python to write various scripts to check and correct the environment tags on  their EC2 instances bringing them to 99% compliance to standard. Later in the summer, the other intern and I used Express.js, React Native, and Google Cloud Platform to create an image recognition app that returns relevant supplemental learning resources when you take a photo of a textbook page.",
    
    "In the summer of 2018, I was an intern for Learning Services Technology Department at Pearson, working on their Realize Backbone Services team. I built an internal developer tool with Java, Spring, Python, Docker, and Jenkins that streamlined the workflow for creating a new microservice - before, developers needed to interact with 30 classes to start a project. After, they only needed to interact with 4." 
];

const internships = new Involvement("internships", "here's where i've worked!", internshipDetails);

document.getElementById("internships").addEventListener("click", function(){
     setDiv(internships);
})





let usacsDetails = [
    "In Fall 2019, I oversaw the organization of 25+ events for the academic semester, established an Advisory Board of Computer Scientists with all of the the other CS org presidents on campus, and worked on developing a well oiled machine of a community that is upheld by all of these organizations together. I'm also working on establishing for-credit student-led seminars on topics in computer science, an NJ-wide tech meetup in collaboration with Princeton University's CS orgs, and much much more.",
    "In Fall 2018, I coordinated several \"speed dating\" sessions in order to help underclassmen find a mentor in our 200+ student-large undergraduate mentorship program, with the help of our <a href = \"https://maravichandran.github.io\" target=\"_blank\">Education Director.</a>",
    "USACS's Tech Director and I work together to organize Hack Nights every two weeks so that novice students can learn new skills by contributing to social good projects USACS sources from third-party organizations. I also started a Self-Guided Project repository, of open source introductory guides to React, Flask, SQL, and various other APIs and libraries, like Twilio and pandas.",
    "USACS's <a href = \"http://benyang.me/\" target=\"_blank\">Outreach Director</a> and I collaborate throughout the year to organize several events with companies looking to recruit, in addition to installments of our CS Speaker Series.",
    "I help our <a href = \"https://goldencarrots72.github.io/\" target=\"_blank\"><b>Community Director</b></a> run fun social events for Rutgers CS students!",
    "I worked with the President of the Rutgers Cognitive Science Club to establish a research pipeline for students interested in REUs, by pairing professors in the CogSci department with undergrads with specific skillsets.",
    "I created a sponsorship document for companies interested in becoming more involved with USACS to buy events packages, which also include sponsorship in HackRU.",
    "I help coordinate new articles for the USACS blog!"
];

const usacs = new Involvement("usacs", "In 2018, I became events coordinator for the rutgers undergraduate student alliance of computer scientists. at the end of 2019, i was elected president!", usacsDetails);

document.getElementById("usacs").addEventListener("click", function(){
     setDiv(usacs);
})




let hackathonDetails = [
    "In January 2019, I became a Coach for Major League Hacking. Now I travel the country to empower student hackers and organizers at their events, host Localhost workshops, and write for the MLH Content Launchpad. Say hi at my next event!",
    "In November 2018, I became an organizer for HackRU, Rutgers's premiere 24-hour hackathon. Since then, I've served on the Volunteer and Hacker Experience (VHX) team, the Logistics Team, and the Marketing and Design (MnD) team.",
    "In September 2016, I organized a data science hackathon for high school students in NYC in collaboration with NASA's Office of     Innovation called Space Apps Next Generation: NYC.",
];

const hackathons = new Involvement("hackathons", "since my sophomore year of high school, i've been to about 30 hackathons as a hacker, volunteer, mentor or organizer.", hackathonDetails);

document.getElementById("hackathons").addEventListener("click", function(){
     setDiv(hackathons);
})






let spDetails = [
    "Throughout fall 2019, I stood up a small data center in the Rutgers CS lab the Hackrspace called Ali Web Services (or AWS for short) - the idea is that people rent from a public cloud like Amazon Web Services because paying for servers, power, and internet 24/7, as well as people to maintain and set up the infrastructure is infinitely more expensive than using a public cloud. However, college students can't rent from a public cloud, either, because it's expensive - so what can they do? Well, if Rutgers keeps power running to the buildings at all time and has a 24/7 network, as well as a budget for new hardware every year, it seemed pretty intutitive to just stand up my own data center. The servers all run CentOS,  Docker, Kubernetes, and Chef.",
    "Throughout summer and fall 2019, I used Flask,  React.js, and MongoDB to build an internal Rutgers Job Board to help students keep track of their internship applications, with a centralized list of companies with data about whether or not they hire kids from Rutgers, what year in school they like to hire, and information about their interview process.",
    "In summer 2019, I built a simple Flask Twilio bot and dashboard that keeps track to the number of USACS meetings a student has attended, verifying whether or not they're elligble to vote in elections in the Spring.",
    "In summer 2018, I created an interpreter for <a href = \"https://alimohamad.github.io/Screenplaytex/\" target=\"_blank\">a LaTeX-like markup language that I built to generate screenplays.</a> Using basic DOM event listeners, I watched for changes in a textbox, separated the string value of the textbox line by line and pushed each line to a stack, then popped and rendered a given line of markup (if it was character dialogue, a \“slugline\” to identify setting, etc.) inside an iframe.",
    "In summer 2018, I wrote a Python script to simplify my workflow while programming. It runs os.system() commands executing git add, commit, and push functions, while using the emoji library to print out a guy hitting the whip, since the commit message was always \"wip\", which is short for work-in-progress. I built this on a bus ride from Boston to New Jersey in order to get better at Python which I was using at work.",
    "In 2017, I won <a href=\"https://youtu.be/5IFfr-ggy-8?t=23m11s\" target=\"_blank\">3rd Place Overall at PennApps XV!</a> My team and I built a desktop accessibility tool for Parkinson's disease patients called TactEYEle - we used OpenCV to track the movement of the user's head and move the cursor accordingly, and correspond winks and blinks to clicks. Using IBM Watson's Speech-to-Text API for voice recognition, voice commands such as \"select\", \"copy / paste\", and so on correspond to the keyboard shortcuts being carried out, whereas \"transcribe\" followed by a phrase types that phrase out.",
    "In summer 2017, I was the sole backend developer for a leaderboard for the GaryVee Flip Challenge, an internet challenge Gary Vaynerchuck posed to his YouTube audience to go out and flip items they got at garage sales in order to make $20,170 in 2017. I built the whole thing in Meteor.js."
];

const sideProjects = new Involvement("side projects", "here's some stuff I've built in my free time!", spDetails);

document.getElementById("side-projects").addEventListener("click", function(){
     setDiv(sideProjects);
})






let cpDetails = [
    "I take a lot of photos. Look at them <a href = \"https://vsco.co/alaiyo/\" target=\"_blank\">here!</a>",
    "In Fall 2019, I took Intermediate Poetry! I don't think I'm gonna share my poems though.",
    "In Spring 2019, I took Digital Composition for my Creative Writing minor, where I worked on a bunch of different media projects for the internet. Here's a short two-minute podcast I did on the history of Rutgers's experimental <a href = \"assets/Ali - Livingston Residential College.wav\" target=\"_blank\">Livingston Residential College.",
    "In Fall 2018, I took Screenwriting for Television as a part of my Creative Writing minor at Rutgers. Here's a scene from the show I created that semester, <a href = \"assets/SCENE.pdf\" target=\"_blank\">\"Woke\".</a> ",
    "In Summer 2017, I started a Rutgers-themed Anti Social Social Club parody called Anti Student Student Club. I coordinated all marketing material, and sell the sweaters out of my room. Check out the <a href = \"https://www.instagram.com/antistudentstudentclub/\" target=\"_blank\">lookbook!</a>"
];

const creativeProjects = new Involvement("creative projects", "sometimes i work on creative projects too!", cpDetails);

document.getElementById("creative-projects").addEventListener("click", function(){
     setDiv(creativeProjects);
})