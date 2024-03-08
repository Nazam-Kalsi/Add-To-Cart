import React from 'react'
import Card from './Card'

function Order() {
  return (
    <div className="flex justify-between flex-wrap gap-10 p-8">
        <Card name="Bread" price="40"/>
        <Card name="Potato" price="30"/>
        <Card name="T-shirt" price="600"/>
        <Card name="Water" price="49"/>
        <Card name="Cold Drink" price="25"/>
        <Card name="Bananas" price="45"/>
        <Card name="Apples" price="65"/>
        <Card name="Oranges" price="25"/>
        <Card name="Laptop" price="45000"/>
        <Card name="I-Phone" price="89999"/>
    </div>
  )
}

export default Order