import React, { useState } from "react";
import classNames from "classnames";
import "./style.scss";
import "./../../assets/styles/helpers.scss";

const Product = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isHoveredSelected, setIsHoveredSelected] = useState(false);
  const [firstSelect, setFirstSelect] = useState(true);

  const {
    title,
    name,
    addition,
    portionsAmount,
    details,
    image,
    weight,
    disabled,
  } = props;

  const toggleHover = () => {
    if (isSelected) {
      setIsHoveredSelected(!isHoveredSelected);
      setFirstSelect(false);
    }
    setIsHovered(!isHovered);
  };

  const toggleClick = () => {
    if (isSelected) {
      setFirstSelect(true);
    }
    setIsSelected(!isSelected);
  };

  const productClass = classNames({
    product: true,
    "is-hovered": isHovered,
    "is-selected": isSelected,
    "is-disabled": disabled,
  });

  return (
    <div className={productClass}>
      <div
        className="product__body"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={toggleClick}
      >
        <div className="product__main">
          {isHovered && isSelected && !firstSelect ? (
            <span className="color-selected-hover">Котэ не одобряет?</span>
          ) : (
            <span className="product__title">{title}</span>
          )}
          <h3 className="product__name">{name}</h3>
          <div className="product__addition">{addition}</div>
          <div className="product__details">
            <div className="product__portions">
              <strong>{portionsAmount}</strong>&nbsp;порций
            </div>
            <div className="product__gift">
              {details.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
          <img
            className="product__image"
            src={image}
            alt={title}
            width="370"
            height="361"
          />
          <div className="product__weight">
            {weight}
            <div className="product__weight-unit">кг</div>
          </div>
        </div>
      </div>
      <div className="product__footer">
        <span className="is-hidden-disabled is-hidden-selected">
          Чего сидишь? Порадуй котэ,&nbsp;
          <span
            className="product__buy"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={toggleClick}
          >
            купи
          </span>
          .
        </span>
        {isSelected ? (
          <span className="is-shown-selected">
            Головы щучьи с чесноком да свежайшая сёмгушка.
          </span>
        ) : null}
        {disabled ? (
          <span className="color-disabled-note">
            {`Печалька, ${addition} закончился.`}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
