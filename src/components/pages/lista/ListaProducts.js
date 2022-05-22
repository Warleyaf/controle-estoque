import React from "react";
import { List } from "./styledList";

export function ListaProducts() {
  return(
    <List>
      <div className="product-list">
        <div className='teste'>

          <div className='product-info'>
            <div className='img'>
              <img src="https://img.icons8.com/color/192/food-bar.png" alt="" />
            </div>

            <div className='products-value'>
              <p>Nome: <span>Hamburguer</span> </p>
              <p>R$: <span>10</span></p>
              <p>QTD: <span>20</span></p>
            </div>

            <div className='products-link'>
              <a href="#"><img src="https://img.icons8.com/fluency-systems-regular/96/pencil-tip.png" alt="" /></a>

              <a href="#"><img src="https://img.icons8.com/material-outlined/96/trash--v1.png" alt="" /></a>
            </div>
          </div>
        </div>
        
        <div className='teste'>

          <div className='product-info'>
            <div className='img'>
              <img src="https://img.icons8.com/color/192/food-bar.png" alt="" />
            </div>

            <div className='products-value'>
              <p>Nome: <span>Hamburguer</span> </p>
              <p>R$: <span>10</span></p>
              <p>QTD: <span>20</span></p>
            </div>

            <div className='products-link'>
              <a href="#"><img src="https://img.icons8.com/fluency-systems-regular/96/pencil-tip.png" alt="" /></a>

              <a href="#"><img src="https://img.icons8.com/material-outlined/96/trash--v1.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </List>
  )
}