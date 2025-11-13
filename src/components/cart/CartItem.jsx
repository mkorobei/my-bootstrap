import React from 'react'
import Item from './item'

const CardItem = (props) => {
    return (
      <div className="container py-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
        {
          props.item.map(obj=>{
            if (obj && obj.img) {
              return(
                <Item
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
                showCart={props.showCart}
                showFavorites={props.showFavorites}
                showRemove={props.showRemove}
                />
              )
            }
            return null;
          })
        }
        </div>
      </div>
  )
}

export default CardItem
