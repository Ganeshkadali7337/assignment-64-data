import "./index.css";

const CardItem = (props) => {
  const { item } = props;
  const { img, title, description } = item;
  return (
    <li>
      <div className="card-item">
        <img className="img" src={img} alt={title} />
        <div className="description">
          <h1 className="title">{title}</h1>
          <p className="para2">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
