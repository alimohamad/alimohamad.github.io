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
        li.setAttribute("class", "container-detail");
        li.innerHTML = list[i];
        h3.appendChild(li);
        ul.appendChild(h3);
      
    }
    
    console.log(ul);
  
}


let internshipDetails = [ 
    "In the summer of 2018, I was an intern for Learning Services Technology Department at Pearson, working on their Realize Backbone Services team. I built an internal developer tool with Java, Spring, Python, Docker, and Jenkins that streamlined the workflow for creating a new microservice - before, developers needed to interact with 30 classes to start a project. After, they only needed to interact with 4." 
];

const internships = new Involvement("internships", "here's where i've worked!", internshipDetails);

document.getElementById("internships").addEventListener("click", function(){
     setDiv(internships);
})





let usacsDetails = [
    "In the Fall, I coordinated several \"speed dating\" sessions in order to help underclassmen find a mentor in our 200+ student-large undergraduate mentorship program, with the help of our Education Director.",
    "USACS's Tech Director and I work together to organize Hack Nights every two weeks so that novice students can learn new skills by contributing to social good projects USACS sources from third-party organizations.",
    "USACS's Outreach Director and I collaborate throughout the year to organize several events with companies looking to recruit, in addition to installments of our CS Speaker Series.",
    "I help our Community Director run fun social events for Rutgers CS students!",
    "I worked with the President of the Rutgers Cognitive Science Club to establish a research pipeline for students interested in REUs, by pairing professors in the CogSci department with undergrads with specific skillsets.",
    "I created a sponsorship document for companies interested in becoming more involved with USACS to buy events packages, which also include sponsorship in HackRU.",
    "I help coordinate new articles for the USACS blog!"
];

const usacs = new Involvement("usacs", "In 2018, I became Events Coordinator for the Rutgers Undergraduate Student Alliance of Computer Science. I did more than just coordinate events though!", usacsDetails);

document.getElementById("usacs").addEventListener("click", function(){
     setDiv(usacs);
})




let hackathonDetails = [
    "In September 2016, I organized a data science hackathon for high school students in NYC in collaboration with NASA's Office of Innovation called Space Apps Next Generation: NYC.",
    "In November 2018, I've been an organizer for HackRU, Rutgers's premiere 24-hour hackathon. Since then, I've served on the Volunteer and Hacker Experience (VHX) team, the Logistics Team, and the Marketing and Design (MnD) team.",
    "In January 2019, I became a Coach for Major League Hacking. Now I travel the country to empower student hackers and organizers at their events, host Localhost workshops, and write for the MLH Content Launchpad. Say hi at my next event!"
];

const hackathons = new Involvement("hackathons", "Since my sophomore year of high school, I've been to about 30 hackathons as a hacker, volunteer, mentor or organizer. Here are some of my more meaningful achievements.", hackathonDetails);

document.getElementById("hackathons").addEventListener("click", function(){
     setDiv(hackathons);
})






let spDetails = [
    "In summer 2018, I created an interpreter for a LaTeX-like markup language that I built to generate screenplays. Using basic DOM event listeners, I watched for changes in a textbox, separated the string value of the textbox line by line and pushed each line to a stack, then popped and rendered a given line of markup (if it was character dialogue, a \“slugline\” to identify setting, etc.) inside an iframe.",
    "In summer 2018, I wrote a Python script to simplify my workflow while programming. It runs os.system() commands executing git add, commit, and push functions, while using the emoji library to print out a guy hitting the whip, since the commit message was always \"wip\", which is short for work-in-progress. I built this on a bus ride from Boston to New Jersey in order to get better at Python which I was using at work.",
    "In 2017, I won 3rd Place Overall at PennApps XV! My team and I built a desktop accessibility tool for Parkinson's disease patients called TactEYEle - we used OpenCV to track the movement of the user's head and move the cursor accordingly, and correspond winks and blinks to clicks. Using IBM Watson's Speech-to-Text API for voice recognition, voice commands such as \"select\", \"copy / paste\", and so on correspond to the keyboard shortcuts being carried out, whereas \"transcribe\" followed by a phrase types that phrase out.",
    "In summer 2017, I was the sole backend developer for a leaderboard for the GaryVee Flip Challenge, an internet challenge Gary Vaynerchuck posed to his YouTube audience to go out and flip items they got at garage sales in order to make $20,170 in 2017. I built the whole thing in Meteor.js."
];

const sideProjects = new Involvement("side projects", "here's some stuff I've built in my free time!", spDetails);

document.getElementById("side-projects").addEventListener("click", function(){
     setDiv(sideProjects);
})






let cpDetails = [
    "I take a lot of photos. Look at them here!",
    "In Summer 2017, I started a Rutgers-themed Anti Social Social Club parody called Anti Student Student Club. I coordinated all marketing material, and sell the sweaters out of my room. Check out the lookbook!",
    "In Fall 2018, I took Screenwriting for Television as a part of my Creative Writing minor at Rutgers. Here's a scene from the show I created that semester, \"Woke\". ",
    "In Spring 2019, I took Digital Composition for my Creative Writing minor, where I worked on a bunch of different media projects for the internet. Here's a short two-minute podcast I did on the history of Rutgers's experimental Livingston Residential College."
    
];

const creativeProjects = new Involvement("creative projects", "sometimes i work on creative projects too!", cpDetails);

document.getElementById("creative-projects").addEventListener("click", function(){
     setDiv(creativeProjects);
})