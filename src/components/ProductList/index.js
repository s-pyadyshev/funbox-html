import React from "react";
import Product from "../Product";
import "./style.scss";

const ProductList = () => {
  const products = [
    {
      title: "Сказочное заморское яство",
      name: "Нямушка",
      addition: "с фуа-гра",
      portionsAmount: "10",
      details: ["мышь в подарок"],
      image:
        "https://raw.githubusercontent.com/s-pyadyshev/funbox-html/master/src/assets/img/cat.png",
      weight: "0.5",
    },
    {
      title: "Сказочное заморское яство",
      name: "Нямушка",
      addition: "с рыбой",
      portionsAmount: "40",
      details: ["2 мыши в подарок"],
      image:
        "https://raw.githubusercontent.com/s-pyadyshev/funbox-html/master/src/assets/img/cat.png",
      weight: "2",
    },
    {
      title: "Сказочное заморское яство",
      name: "Нямушка",
      addition: "с курой",
      portionsAmount: "100",
      details: ["5 мышей в подарок", "заказчик доволен"],
      image:
        "https://raw.githubusercontent.com/s-pyadyshev/funbox-html/master/src/assets/img/cat.png",
      weight: "5",
      disabled: true,
    },
  ];
  return (
    <ul className="product-list">
      {products.map((productProps, index) => (
        <li key={index}>
          <Product {...productProps} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
