import SoftSkillCard from './SoftSkillCard.jsx';
import './SoftSkills.css'

function SoftSkills() {
  const skills = [
    { icon: './svg/lightbulb.svg', text: 'Pensamento Analítico e Inovador' },
    { icon: './svg/book.svg', text: 'Aprendizagem Contínua' },
    { icon: './svg/palette.svg', text: 'Criatividade' },
    { icon: './svg/shield-check.svg', text: 'Resiliência' },
    { icon: './svg/arrow-repeat.svg', text: 'Flexibilidade' },
    { icon: './svg/emoji-smile.svg', text: 'Inteligência Emocional' },
  ];

  return (
    <>
      <h2 className="titulo-soft-skills">Soft Skills</h2>
      <div className="soft-skills">
        {skills.map((skill, index) => (
          <SoftSkillCard key={index} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </>
  )
}

export default SoftSkills;
