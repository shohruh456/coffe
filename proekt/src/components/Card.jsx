import Button from "./Button";

function Card({ image, title, text }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>

      <Button text="Buy" />
    </div>
  );
}

export default Card;