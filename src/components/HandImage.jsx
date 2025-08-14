import './HandImage.css';

function HandImage() {
  return (
    <div className="container-hand">
      <picture>
        {/* Quando for até 767px, usa o hand2.svg */}
        <source media="(max-width: 767px)" srcSet="./svg/hand2.svg" />
        {/* Caso contrário, usa o hand.svg */}
        <img src="./svg/hand.svg" className="hand" alt="Mão" />
      </picture>
    </div>
  );
}

export default HandImage;
