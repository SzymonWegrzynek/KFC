import Carousel from "react-elastic-carousel";
import "./Carouselle.scss";

const Carouselle = (props) => {
  const { imageUrl, name, price } = props;

  const handleCarouselClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="carousel-container" onClick={handleCarouselClick}>
      <Carousel
        autoPlaySpeed={7000}
        enableAutoPlay={true}
        showArrows={false}
        focusOnSelect={true}
        pagination={true}
      >
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselle;
