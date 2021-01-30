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

function buildSite(){
    const internships = new Involvement("internships", "here's where i've worked!", Life.work);

    document.getElementById("internships").addEventListener("click", function(){
        setDiv(internships);
    })

    const leadership = new Involvement("leadership", "in 2018, i became events coordinator for the rutgers undergraduate student alliance of computer scientists. at the end of 2019, i was elected president! since then, i've been focusing a lot of my time on impact labs.", Life.leadership);

    document.getElementById("leadership").addEventListener("click", function(){
        setDiv(leadership);
    })

    const hackathons = new Involvement("hackathons", "since my sophomore year of high school, i've been to about 30 hackathons as a hacker, volunteer, mentor or organizer.", Life.hackathons);

    document.getElementById("hackathons").addEventListener("click", function(){
        setDiv(hackathons);
    })

    const sideProjects = new Involvement("side projects", "here's some stuff I've built in my free time!", Life.sideProjects);

    document.getElementById("side-projects").addEventListener("click", function(){
        setDiv(sideProjects);
    })

    const creativeProjects = new Involvement("creative projects", "sometimes i work on creative projects too! you can see them all on my <a href = \"https://www.notion.so/alimohamad/arts-portfolio-9b7206d9c50745e183bfb25fec0dc268\">arts portfolio notion.</a> it's under construction, but i'm always adding more stuff!", Life.creativeProjects);

    document.getElementById("creative-projects").addEventListener("click", function(){
        setDiv(creativeProjects);
    })
}

const Life = {
    work: [
        "In summer 2020, I interned at Microsoft, on the DevProd team working on a VSCode Extension to view Azure DevOps (version control) tickets in your editor to reduce context switches.",
        "In the summer of 2019, I interned for Pearson again, working on their DevOps team, then with another intern on a proof of concept. At the beginning of the summer I worked with AWS Systems Manager and Python to write various scripts to check and correct the environment tags on  their EC2 instances bringing them to 99% compliance to standard. Later in the summer, the other intern and I used Express.js, React Native, and Google Cloud Platform to create an image recognition app that returns relevant supplemental learning resources when you take a photo of a textbook page.",
        "In the summer of 2018, I was an intern for Learning Services Technology Department at Pearson, working on their Realize Backbone Services team. I built an internal developer tool with Java, Spring, Python, Docker, and Jenkins that streamlined the workflow for creating a new microservice - before, developers needed to interact with 30 classes to start a project. After, they only needed to interact with 4." 
    ],
    leadership: [
        `
        In 2021, I joined the board for Ethitech, a tech ethics oriented club at Rutgers. More on that soon!
        `,
        `
        In 2020 I joined the Impact Labs team! Since then, I've worked on:
        <br/><br/>- Rebooting the Impact Blog as the Impact Publication, a community journal for op-eds and data-driven writing on imagining a world where writing code is divorced from captialism.
        <br/><br/>- Co-coordinating the Code For Equity Fellowship, a remote, four month program for young technologists to meaningfully research and build solutions for manifestations for our systems of inequity.
        <br/><br/>- Imagining a new leadership structure that best fits the organizations culture, mission, vision, and values.
        `,
        `In 2019, I oversaw the organization of 25+ events for the academic semester, established an Advisory Board of Computer Scientists with all of the the other CS org presidents on campus, and worked on developing a well oiled machine of a community that is upheld by all of these organizations together. Some extra initiatives I worked towards starting (pre-pandemic) were: 
        <br/><br/>- Establishing for-credit student-led seminars on topics in computer science 
        <br/><br/>- An NJ-wide tech meetup in collaboration with Princeton University's CS orgs
        <br/><br/>- Establishing a research pipeline for students interested in REUs, in collaboration with the President of the Rutgers Cognitive Science Club.
        <br/><br/>- Developing a project board to contribute to an app ecosystem for Rutgers students, built by Rutgers students, to offer learning opportunities and marginal utility and amusement to attendees of the CS lounge on campus.
        `,
        `In 2018, I: 
        <br/><br/>- Coordinated several \"speed dating\" sessions in order to help underclassmen find a mentor in our 200+ student-large undergraduate mentorship program.
        <br/><br/>- Worked with USACS's Tech Director to organize Hack Nights every two weeks so that novice students can learn new skills by contributing to social good projects USACS sources from third-party organizations. (I also started a Self-Guided Project repository, of open source introductory guides to React, Flask, SQL, and various other APIs and libraries, like Twilio and pandas.)",
        <br/><br/>- Worked with USACS's Community Director to host non-technical social events for CS majors.
        <br/><br/>- Worked with USACS's Outreach Director to schedule recruiting events with companies interested in hiring from Rutgers.
        `        
    ],
    hackathons: [
        "Ever since 2020, I've moved away from more established concepts of hackathons, and have been exploring lowkey code meetups and hack sessions with friends over Zoom. Hit me up some time and we'll hack together!",
        "In January 2019, I became a Coach for Major League Hacking. Now I travel the country to empower student hackers and organizers at their events, host Localhost workshops, and write for the MLH Content Launchpad. Say hi at my next event!",
        "In November 2018, I became an organizer for HackRU, Rutgers's premiere 24-hour hackathon. Since then, I've served on the Volunteer and Hacker Experience (VHX) team, the Logistics Team, and the Marketing and Design (MnD) team.",
        "In September 2016, I organized a data science hackathon for high school students in NYC in collaboration with NASA's Office of     Innovation called Space Apps Next Generation: NYC."
    ],
    sideProjects: [
        "In fall 2020, a couple friends and I started working on <a href = \"https://github.com/tbltp\">tabletop</a>, a web-based character sheet builder for Dungeons and Dragons 5th Edition. It was a lot of fun, a lot of work, and has been super helpful for me to use to run campaigns during quarantine.",
        "In spring 2020, I hacked together a small little npm package for a React component that lets users \"sign in with Rutgers\" - Rutger's Open Systems Solutions maintains a Central Authentication System that's not available for students to play with, but <i>is</i> used by Google OAuth when people try to sign into their GSuite account. By restricting the subdomain by which people can log in to a service with to scarletmail.rutgers.edu and exporting that as an npm package, I essentially made a button (and associated web service to return some user info!) that redirects you to the Rutgers CAS login.",
        "In January 2020, I worked on a small proof of concept for a decentralized, encrypted database as a system - using PyRPC, I built a distributed key-value store with the hope to develop it and ship it out to social workers who need to make sure that their data cannot be compromised (people who work with the houseless, undocumented, etc.) After demoing it at the Impact Fellowship Showcase, it got a lot of really nice feedback.",
        "Throughout fall 2019, I stood up a small data center in the Rutgers CS lab the Hackrspace called Ali Web Services (or AWS for short) - the idea is that people rent from a public cloud like Amazon Web Services because paying for servers, power, and internet 24/7, as well as people to maintain and set up the infrastructure is infinitely more expensive than using a public cloud. However, college students can't rent from a public cloud, either, because it's expensive - so what can they do? Well, if Rutgers keeps power running to the buildings at all time and has a 24/7 network, as well as a budget for new hardware every year, it seemed pretty intutitive to just stand up my own data center. The servers all run CentOS,  Docker, and a little DataNode I wrote.",
        "Throughout summer and fall 2019, I used Flask,  React.js, and MongoDB to build an internal Rutgers Job Board to help students keep track of their internship applications, with a centralized list of companies with data about whether or not they hire kids from Rutgers, what year in school they like to hire, and information about their interview process.",
        "In summer 2019, I built a simple Flask Twilio bot and dashboard that keeps track to the number of USACS meetings a student has attended, verifying whether or not they're elligble to vote in elections in the Spring.",
        "In summer 2018, I created an interpreter for <a href = \"https://alimohamad.github.io/Screenplaytex/\" target=\"_blank\">a LaTeX-like markup language that I built to generate screenplays.</a> Using basic DOM event listeners, I watched for changes in a textbox, separated the string value of the textbox line by line and pushed each line to a stack, then popped and rendered a given line of markup (if it was character dialogue, a \“slugline\” to identify setting, etc.) inside an iframe.",
        "In summer 2018, I wrote a Python script to simplify my workflow while programming. It runs os.system() commands executing git add, commit, and push functions, while using the emoji library to print out an emoji hitting the whip, since the commit message was always \"wip\", which is short for work-in-progress. I built this on a bus ride from Boston to New Jersey in order to get better at Python which I was using at work.",
        "In 2017, I won <a href=\"https://youtu.be/5IFfr-ggy-8?t=23m11s\" target=\"_blank\">3rd Place Overall at PennApps XV!</a> My team and I built a desktop accessibility tool for Parkinson's disease patients called TactEYEle - we used OpenCV to track the movement of the user's head and move the cursor accordingly, and correspond winks and blinks to clicks. Using IBM Watson's Speech-to-Text API for voice recognition, voice commands such as \"select\", \"copy / paste\", and so on correspond to the keyboard shortcuts being carried out, whereas \"transcribe\" followed by a phrase types that phrase out.",
        "In summer 2017, I was the sole backend developer for a leaderboard for the GaryVee Flip Challenge, an internet challenge Gary Vaynerchuck posed to his YouTube audience to go out and flip items they got at garage sales in order to make $20,170 in 2017. I built the whole thing in Meteor.js."
    ],
    creativeProjects: [
        "Over the years, I've taken a lot of photos! I hope to take more, and get better at taking them.",
        "I occasionally do creative non-fiction writing, which probably started with me joining and later editing my high school newspaper.",
        "In spring 2020, I got really into Dungeons and Dragons! It's a cool activity that beyond being a game, is essentially just a group storytelling framework. During the pandemic, when I found myself being burned out on writing, prepping for DnD sessions allowed me to produce something without immediately hating what I produced or the process it was produced under. (PS: Please DM for me. I am the perma-DM for all my games. I have never played a PC and I have so many good ideas. This is a cry for help.)",
        "In fall 2019, I started taking poetry classes at Rutgers - I've taken a handful of seminars, as well as a course focusing on performance poetry and an independent study for revising poetry.",
        "In fall 2018, I took a screenwriting for television course - I've since taken a course on digital multimedia production, and a course on documentary filmmaking. I've worked on a handful of screenplays and documentaries, most notably one on my friend's relationship with his Islam, and one on how we construct the \"image of whiteness\", based on Daniel C. Blight's photo book by the same name."
    ]
}

buildSite();