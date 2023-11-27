import "./ProductModal.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Carouselle from "../Carouselle/Carouselle";

const ProductModal = (props) => {
  const {
    product,
    onClose,
    onLike,
    isOrdered,
    orderCount,
    handleButtonClick,
    orderedProducts,
  } = props;
  const { imageUrl, description, name, price } = product;

  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <div className="product-modal">
      <div className="product-modal-inner">
        <button className="add-to-fav">
          <FaRegHeart />
        </button>
        <button className="close-btn" onClick={handleCloseButtonClick}>
          <FaArrowLeftLong />
        </button>
        <div className="product-modal-part">
          <div className="all-without-carousel">
            <div className="div-with-img">
              {" "}
              <img src={imageUrl} alt={name} />
            </div>
            <div className="div-with-ndp">
              {" "}
              <h4>{name}</h4>
              <p>{description}</p>
              <strong className="price">{price}</strong>
            </div>
          </div>
          <div className="carouselle-part">
            <p>DODAJ TO CO LUBISZ</p>
            <Carouselle></Carouselle>
          </div>
          <div className="add-to-basket-part">
            <div className="add-count-to-basket">
              <button type="button">-</button>
              <span>{isOrdered ? orderCount : 1}</span>
              <button type="button">+</button>
            </div>
            <div className="add-to-basket-button">
              <button
                type="button"
                onClick={handleButtonClick}
                isOrdered={isOrdered}
                orderCount={orderCount}
              >
                DODAJ DO KOSZYKA {price}
                {/* {" "}
                {isOrdered ? orderCount : "+"} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
