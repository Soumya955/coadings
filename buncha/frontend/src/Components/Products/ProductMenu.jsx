import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItems } from "../../constants/Data";
import {
  setProductCategory,
  setProductMenuClicked,
} from "../../store/product/actions";
import "../../style/productMenu.css";

export const ProductMenu = () => {
  const selectedCategoryId = useSelector((store) => store.currentCategory);
  const dispatch = useDispatch();

  const updateSelectedCategory = (productCategoryId) => {
    dispatch(setProductCategory(productCategoryId));
    dispatch(setProductMenuClicked(true));
  };

  return (
    <div className="productMenu">
      {MenuItems.map(
        ({ title, category, productCategoryId, icon, activeIcon }) => {
          const selectedItem = productCategoryId === selectedCategoryId;
          return (
            <>
              <div
                className={classNames("phoneProductItem", {
                  selectedPhoneItem: selectedItem,
                })}
                role="button"
                onClick={() => updateSelectedCategory(productCategoryId)}
              >
                <div className="productItemIcon">
                  {selectedItem ? activeIcon : icon}
                </div>
                <div className="truncate productItemTitle">{title}</div>
              </div>
              <div
                className={classNames("productItem", {
                  selectedItem: selectedItem,
                })}
                role="button"
                onClick={() => updateSelectedCategory(productCategoryId)}
              >
                {title}
              </div>
            </>
          );
        }
      )}
    </div>
  );
};
