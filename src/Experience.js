import React from 'react';
import './MainSection.css';

function Experience() {
  return (
    <div>
      <h3 className="main-section-description-title">PROFESIONAL EXPERIENCE</h3>
      {bubles('CEO', 'WALLAVI SOFTWARE DEVELOPMENT', 'AUG 2013 - SEPT 2013')}
      <p className="main-section-description">Soy Roberto Legorreta, amante de la vida, del deporte, emprendimiento, diseño y desarrollo de software, mi meta es ser parte del grupo de locos que más ha servido a este mundo y diario trabajo para conseguirla, cada día soy mejor de lo que era ayer, siempre estoy aprendiendo cosas nuevas, intentando cosas nuevas, tomando nuevos desafíos y resolviendo problemáticas existentes. </p>
      {bubles('CEO', 'WALLAVI SOFTWARE DEVELOPMENT', 'AUG 2013 - SEPT 2013')}
      <p className="main-section-description">Soy Roberto Legorreta, amante de la vida, del deporte, emprendimiento, diseño y desarrollo de software, mi meta es ser parte del grupo de locos que más ha servido a este mundo y diario trabajo para conseguirla, cada día soy mejor de lo que era ayer, siempre estoy aprendiendo cosas nuevas, intentando cosas nuevas, tomando nuevos desafíos y resolviendo problemáticas existentes. </p>
      {bubles('CEO', 'WALLAVI SOFTWARE DEVELOPMENT', 'AUG 2013 - SEPT 2013')}
      <p className="main-section-description">Soy Roberto Legorreta, amante de la vida, del deporte, emprendimiento, diseño y desarrollo de software, mi meta es ser parte del grupo de locos que más ha servido a este mundo y diario trabajo para conseguirla, cada día soy mejor de lo que era ayer, siempre estoy aprendiendo cosas nuevas, intentando cosas nuevas, tomando nuevos desafíos y resolviendo problemáticas existentes. </p>
      {bubles('CEO', 'WALLAVI SOFTWARE DEVELOPMENT', 'AUG 2013 - SEPT 2013')}
      <p className="main-section-description">Soy Roberto Legorreta, amante de la vida, del deporte, emprendimiento, diseño y desarrollo de software, mi meta es ser parte del grupo de locos que más ha servido a este mundo y diario trabajo para conseguirla, cada día soy mejor de lo que era ayer, siempre estoy aprendiendo cosas nuevas, intentando cosas nuevas, tomando nuevos desafíos y resolviendo problemáticas existentes. </p>
      {bubles('CEO', 'WALLAVI SOFTWARE DEVELOPMENT', 'AUG 2013 - SEPT 2013')}
      <p className="main-section-description">Soy Roberto Legorreta, amante de la vida, del deporte, emprendimiento, diseño y desarrollo de software, mi meta es ser parte del grupo de locos que más ha servido a este mundo y diario trabajo para conseguirla, cada día soy mejor de lo que era ayer, siempre estoy aprendiendo cosas nuevas, intentando cosas nuevas, tomando nuevos desafíos y resolviendo problemáticas existentes. </p>
      <h3 className="main-section-description-title">PERSONAL PROJECTS</h3>
      {projectBubles('ROBERGRAM', 'HTTPS://WWW.ROBERTOLEGORRETA.COM')}
      <p className="main-section-description">Soy Roberto Legorreta, amante de la vida, del deporte, emprendimiento, diseño y desarrollo de software, mi meta es ser parte del grupo de locos que más ha servido a este mundo y diario trabajo para conseguirla, cada día soy mejor de lo que era ayer, siempre estoy aprendiendo cosas nuevas, intentando cosas nuevas, tomando nuevos desafíos y resolviendo problemáticas existentes. </p>
      {projectBubles('ROBERGRAM', 'HTTPS://WWW.ROBERTOLEGORRETA.COM')}
      <p className="main-section-description">Soy Roberto Legorreta, amante de la vida, del deporte, emprendimiento, diseño y desarrollo de software, mi meta es ser parte del grupo de locos que más ha servido a este mundo y diario trabajo para conseguirla, cada día soy mejor de lo que era ayer, siempre estoy aprendiendo cosas nuevas, intentando cosas nuevas, tomando nuevos desafíos y resolviendo problemáticas existentes. </p>
      {projectBubles('ROBERGRAM', 'HTTPS://WWW.ROBERTOLEGORRETA.COM')}
      <p className="main-section-description">Soy Roberto Legorreta, amante de la vida, del deporte, emprendimiento, diseño y desarrollo de software, mi meta es ser parte del grupo de locos que más ha servido a este mundo y diario trabajo para conseguirla, cada día soy mejor de lo que era ayer, siempre estoy aprendiendo cosas nuevas, intentando cosas nuevas, tomando nuevos desafíos y resolviendo problemáticas existentes. </p>
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
      <a href={link}><p className="main-section-description-buble main-section-description-buble-link">{link}</p></a>
    </div>
  )
}

export default Experience;
