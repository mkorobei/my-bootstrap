import React from 'react';
import { useCart } from '../../context/CartContext';
import { motion } from "framer-motion";

const Item = (props) => {
  const { addToCart, addToFavorites, removeFromFavorites, isFavorite } = useCart();

  const handleAddToCart = () => {
    const item = {
      id: props.id,
      myId: props.myId,
      title: props.title,
      description: props.description,
      price: props.price,
      img: props.img
    };
    addToCart(item);
  };

  const handleAddToFavorites = () => {
    const item = {
      id: props.id,
      myId: props.myId,
      title: props.title,
      description: props.description,
      price: props.price,
      img: props.img
    };
    addToFavorites(item);
  };

  return (
    <div className="card h-100 rounded-3">
      <div className="card-header py-3 text-center">
        <h5 className="card-title">{props.title}</h5>
        <motion.img
          className='rounded img-fluid mx-auto d-block'
          src={props.img}
          style={{ maxWidth: '250px', maxHeight: '200px' }}
          alt={props.title}
          whileHover={{
            scale: [null, 1.1, 1.2],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />
        <p className="card-text mt-2">{props.description}</p>
        <p className="card-text"><strong>Цена: {props.price}</strong></p>
        <div className="d-grid gap-2">
          {props.showCart !== false && (
            <button type="button" className="btn btn-lg btn-success" onClick={handleAddToCart}>Добавить в корзину</button>
          )}
          {props.showFavorites !== false && (
            <button type="button" className="btn btn-lg btn-outline-warning" onClick={handleAddToFavorites}>
              {isFavorite(props.id) ? 'В избранном' : 'Добавить в избранное'}
            </button>
          )}
          {props.showRemove && (
            <button type="button" className="btn btn-lg btn-outline-danger" onClick={() => removeFromFavorites(props.id)}>
              Удалить из избранного
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Item
