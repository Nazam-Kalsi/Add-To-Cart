import React from "react";
import { order } from "../Context/OrderContext";

function Card({
  name = "Product name",
  price = "00",
  url = "https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg?w=740&t=st=1704701254~exp=1704701854~hmac=8c4debd53a4c79e617a42cda034ce3fe45884bc2dfd0bc788f848a12ffa16ac3",
}) {
  let { items, setItems, qnt } = order();

  // const setter = (name) => {
  //   if (items.length === 0) {
  //     setItems((prevItems) => [...prevItems, { name, price, qnt: 1 }]);
  //   } else {
  //     const existingItem = items.find((item) => item.name === name);
  //     if (existingItem) {
  //       setItems((prevItems) =>
  //         prevItems.map((item) =>
  //           item.name === name
  //             ? { ...item, qnt: item.qnt + 1, price: price*(item.qnt+1) }
  //             : item
  //         )
  //       );
  //     } else {
  //       setItems((prevItems) => [...prevItems, { name, price, qnt: 1 }]);
  //     }
  //   }
  // };


  const setter = (name) => {
    if (items.length === 0) {
      setItems((prevItems) => [...prevItems, { name, price, qnt: 1 }]);
    } else {
      const existingItem = items.find((item) => item.name === name);
      if (existingItem) {
        setItems((prevItems) =>
          prevItems.map((item) =>{
            if(item.name===existingItem.name){
              return(
                { ...item, qnt: item.qnt + 1, price: price*(item.qnt+1) }
              )
            }
            else return item;
          }
            
          )
        );
      }
       else {
        setItems((prevItems) => [...prevItems, { name, price, qnt: 1 }]);
      }
    }
  };

  return (
    <div className="rounded-md border p-4 hover:scale-105 transition-all  hover:shadow-md ">
      <img className="w-48 rounded-md" src={url} alt="Img" />
      <div className="mt-4">
        <p className="text-xl ">{name}</p>
        <p className="font-bold text-2xl">Rs.{price}</p>
      </div>
      <button className="active:bg-slate-700" onClick={()=>setter(name)}>
        Add to cart
      </button>
    </div>
  );
}

export default Card;
