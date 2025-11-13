import React from 'react'
import { useCart } from '../context/CartContext'
import CardItem from './cart/CartItem'

const Favorites = () => {
  const { favorites, removeFromFavorites } = useCart()

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Избранное</h2>
      {favorites.length === 0 ? (
        <p className="text-center">У вас нет избранных товаров.</p>
      ) : (
        <CardItem item={favorites} showCart={true} showFavorites={false} showRemove={true} />
      )}
    </div>
  )
}

export default Favorites
