import Card from "../Card/Card";
import "./Main.css";

const Main = ({ cards }) => {
  return (
    <div className="main">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Main;