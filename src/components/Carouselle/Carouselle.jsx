import Carousel from "react-elastic-carousel";
import "./Carouselle.scss";

const Carouselle = (props) => {
  const { imageUrl, name, price, isOrdered, orderCount } = props;

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
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageUrl} alt={name} />
          <div className="div-with-p-and-strong">
            {" "}
            <p>{name}</p>
            <strong className="price">{price}</strong>
          </div>
          <div className="add-count-to-basket">
            <button type="button">-</button>
            <span>{isOrdered ? orderCount : 0}</span>
            <button type="button">+</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselle;
