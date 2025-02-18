import "./Card.css";

const Card = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button" onClick={handleClick}>learn more</button>
    </div>
  );
};

export default Card;