import React from "react"
import { Sale } from './styledProducts'

export function Products() {
  return(
    <Sale>
      <main>
        <div className="products">
          <div className="card-products">
            <img src="https://img.icons8.com/color/96/spinach.png" alt="" />
            <span className="products-name">Alface</span>
            <div className="qtd-products">
              <button className='btn-negative'>-</button>
              <input type="number" />
              <button className="btn-positive">+</button>
            </div>
            <button className="products-buy">Comprar</button>
          </div>
        </div>
      </main>
    </Sale>
  )
}