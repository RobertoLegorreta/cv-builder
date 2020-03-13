import React from 'react';
import './MainSection.css';

function Experience() {
  return (
    <div>
      <h3 className="main-section-description-title">PROFESIONAL EXPERIENCE</h3>
      {bubles('CEO', 'WALLAVI SOFTWARE DEVELPMENT', 'AUG 2013 - AUG 2018')}
      <p className="main-section-description">I founded this company to solve problems in Tepic Nayarit (the place that I used to live). In this company I designed and developed software for small and medium size companies.  Here I learned a lot about development, but also I learned about UX/UI design, how to work with people, lead projects, sell those projects among other activities.</p>
      {bubles('FRONTEND LEAD DEVELOPER', 'CONTRACTROOM', 'JAN 2018 - APR 2018')}
      <p className="main-section-description">I was responsible for fixing and releasing features for Facebook, one of our biggest clients, at the same time we were migrating the software from a monolithic approach to a microservices approach. The main programming language was Python and used the framework Django.</p>
      {bubles('BACKEND DEVELOPER', 'DEAL.COM', 'APR 2018 - AUG 2018')}
      <p className="main-section-description">A remote and part time job where my main activity was to get massive information using software, I had to scrape, clean and finally save the data on relational databases.</p>
      {bubles('TECH LEAD', 'KONFIO', 'AUG 2018 - PRESENT')}
      <p className="main-section-description">I help Konfio to know everything about our prospects and clients in a couple of minutes, I lead a team were we scrape banks, government, social networks, business directories among other sources. Our team is one of the best in their class in the whole country. We work mainly with JS and Python, use at least 15 AWS services for cloud computing (EC2 and Lambdas), databases (cashed databases, relational databases and non relational databases) cloudwatch for monitoring, queues among other services.</p>
      <h3 className="main-section-description-title">PERSONAL PROJECTS</h3>
      {projectBubles('FREE SMS', 'HTTPS://WWW.MENSAJESGRATIS.MX')}
      <p className="main-section-description">An open source project used to teach about software development (and of course that everybody can also send FREE SMS messages 😊), I designed and developed this project from scratch and build a course around it, technical documentation is avaliable on https://www.github.com/rlegorreta/freesms</p>
      {projectBubles('ROBERGRAM', 'HTTPS://WWW.ROBERTOLEGORRETA.COM')}
      <p className="main-section-description">Who does not want to have their own social media platform? I build mine to show my portfolio a few years ago, based on https://www.instagram.com</p>
      {projectBubles('CHAT APP', 'HTTPS://WWW.CHAT.ROBERTOLEGORRETA.COM')}
      <p className="main-section-description">When you are a developer, young and have all the time of the world, the only thing that comes to your mind is to develop your own Whatsapp, or at least thats what happened to me and I did it, I designed and developed a functional chat app from scratch, try it out and send me a message!</p>
      {projectBubles('CABSI', 'HTTPS://WWW.CABSI.ROBERTOLEGORRETA.COM')}
      <p className="main-section-description">Years before UBER arrived to Tepic Nayarit (where I grew up), I developed my own UBER version from scratch (design and development), and realeased it for free, right now its an open source project, use it if you need it!</p>
    </div>
  );
}

function bubles(jobTitle, company, date){
  return(
    <div>
      <p className="main-section-description-buble main-section-description-buble-job-title">{jobTitle}</p>
      <p className="main-section-description-buble">{company}</p>
      <p className="main-section-description-buble">{date}</p>
    </div>
  )
}

function projectBubles(projectName, link){
  return(
    <div>
      <p className="main-section-description-buble">{projectName}</p>
      <a href={link} target="_blank" rel="noopener noreferrer"><p className="main-section-description-buble main-section-description-buble-link">{link}</p></a>
    </div>
  )
}

export default Experience;
