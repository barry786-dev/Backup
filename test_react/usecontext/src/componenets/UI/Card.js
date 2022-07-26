import './Card.css';

function Card(props) {
    const cardclasses ='card ' + props.className;
  return <div className={cardclasses}>{props.children}</div>;
}

export default Card;
