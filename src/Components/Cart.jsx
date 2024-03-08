import React from "react";
import { order } from "../Context/OrderContext";
function Cart() {
  let { items } = order();

  return items.length != 0 ? (
    <>
      <div className="flex items-center flex-col">
        <p className="text-3xl font-bold my-6">Cart</p>
        <div className="space-y-3">

          {items.map((item) => (
            <div key={item.name} className="border flex rounded-md">
              <p className="bg-slate-200 p-4 w-60">{item.name}<span className="pl-24">X</span></p>
              
              <p className="p-4">{item.qnt}<span className="pl-8">=</span></p>
              <p className="p-4">{item.price}</p>

            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="text-4xl font-bold text-center m-4">Cart is Empty</div>
  );
}

export default Cart;
