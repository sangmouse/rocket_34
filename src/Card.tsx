import { CardItem } from "./App";

export default function Card(props: { card: CardItem; children: JSX.Element }) {
  const { card, children } = props;
  return (
    <div className="card-item">
      <p className="img-container">
        <img src={card.imgUrl} alt="Ocean" className="img" />
      </p>
      <h2 className="heading">{card.heading}</h2>
      <p className="sub-heading">{card.subheading}</p>
      {/* {children} */}
    </div>
  );
}
