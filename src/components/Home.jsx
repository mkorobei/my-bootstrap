   import React from "react"
   import Slider from './Slider';
import CardItem from './cart/CartItem';

   const Home = (props) =>{
    return (<div> 
      <Slider></Slider>
     <CardItem item={props.item}/>
      </div>
      )
   }

   export default Home

   
   