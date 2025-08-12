import './SoftSkillCard.css'

function SoftSkillCard({ icon, text }) {
  return (
    <>
      <div className="skill-card">
        <img src={icon} alt="" />
        {text}
      </div>
    </>
  )
}

export default SoftSkillCard;
