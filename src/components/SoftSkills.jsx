import SoftSkillCard from './SoftSkillCard.jsx';
import './SoftSkills.css'

function SoftSkills() {
  const skills = [
    { icon: 'src/assets/svg/lightbulb.svg', text: 'Pensamento Analítico e Inovador' },
    { icon: 'src/assets/svg/book.svg', text: 'Aprendizagem Contínua' },
    { icon: 'src/assets/svg/palette.svg', text: 'Criatividade' },
    { icon: 'src/assets/svg/shield-check.svg', text: 'Resiliência' },
    { icon: 'src/assets/svg/arrow-repeat.svg', text: 'Flexibilidade' },
    { icon: 'src/assets/svg/emoji-smile.svg', text: 'Inteligência Emocional' },
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
