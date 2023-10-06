import React from "react";
import { MenuItems, ProductData } from "../../constants/Data";
import "../../style/productListContainer.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  addItemToCart,
  removeItemFromCart,
  setLogs,
  setProductCategory,
  setProductMenuClicked,
} from "../../store/product/actions";
import PlusIcon from "../../constants/images/PlusIcon.svg";
import MinusIcon from "../../constants/images/MinusIcon.svg";

export const ProductListContainer = () => {
  const selectedCategoryId = useSelector((store) => store.currentCategory);
  const isProductMenuClicked = useSelector(
    (store) => store.isProductMenuClicked
  );
  const cartItems = useSelector((store) => store.cartItems);
  const updatedMenuItems = MenuItems.map((item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { ref, inView } = useInView({ rootMargin: "0px 0px -70% 0px" });
    return { interSectionRef: ref, inView, item };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isProductMenuClicked) {
      setCurrentProductCategory(selectedCategoryId);
      dispatch(setProductMenuClicked(false));
    }
  }, [selectedCategoryId, isProductMenuClicked]);

  const setCurrentProductCategory = (category) => {
    const section = document.getElementById(category);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const logEvent = (eventName, productName, price, category) => {
    const logEntry = {
      name: productName,
      datetime: new Date().toLocaleString(),
      event: eventName,
      price: price,
      category: category,
    };

    dispatch(setLogs(logEntry));
  };

  const addItem = (id, name, price, category) => {
    dispatch(addItemToCart(id));
    logEvent("Plus", name, price, category);
  };

  const removeItem = (id, name, price, category) => {
    dispatch(removeItemFromCart(id));
    logEvent("Minus", name, price, category);
  };

  return (
    <div className="productListContainer">
      {updatedMenuItems?.map(({ interSectionRef, inView, item }, index) => {
        const { title, productCategoryId, category } = item;
        return (
          <div
            ref={(ref) => {
              interSectionRef(ref);
              if (inView) {
                dispatch(setProductCategory(productCategoryId));
              }
            }}
            id={productCategoryId}
            className="productCategoryItem"
          >
            <div className="productCategoryItemTitle">
              <div className="flexBox">
                <div>{title}</div>
                <NavigateNextOutlinedIcon className="bigScreen" />
                <NavigateNextOutlinedIcon
                  fontSize="small"
                  className="smallScreen"
                />
              </div>
              <div className="viewAllButton">View all</div>
            </div>
            <div className="productCategoryItemContainer">
              {ProductData[productCategoryId].map(
                ({ image, price, name, id, quantity, type }) => {
                  const isAddedToCart = cartItems.includes(id);
                  return (
                    <div className="productItemContainer">
                      <img src={image} alt={name} className="itemImage" />
                      <div className="itemPrice">${price}</div>
                      {isAddedToCart && (
                        <img
                          className="addRemoveItemButton"
                          src={MinusIcon}
                          alt="removeItem"
                          onClick={() => removeItem(id, name, price, category)}
                        />
                      )}
                      {!isAddedToCart && (
                        <img
                          className="addRemoveItemButton"
                          src={PlusIcon}
                          alt="addItem"
                          onClick={() => addItem(id, name, price, category)}
                        />
                      )}
                      <div className="itemName truncate">{name}</div>
                      <div className="itemWeight">1 lb</div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
