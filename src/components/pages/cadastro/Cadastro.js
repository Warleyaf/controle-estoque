import React from "react";
import { ProductCadastro } from "./styledCadastro";
export function Cadastro() {
  return (
    <ProductCadastro>
      <div className='box-container'>
        <div className='box-container-form'>

          <h2>Cadastrar Produtos</h2>

          <form action="" autocomplete="off">
            <div className="box-form">
              <label htmlFor="name">Nome do Produto:</label>
              <input id="name" type="text" name="name" />
            </div>

            <div className="box-form">
              <label htmlFor="price">Preço:</label>
              <input id="price" type="number" name="price" />
            </div>

            <div className="box-form">
              <label htmlFor="qtd">Quantidade</label>
              <input id="qtd" type="number" name="qtd" />
            </div>

            <div className="box-form">
              <label htmlFor="image">Insira uma imagem:</label>
              <input id="image" type="file" accept="image/*" />
            </div>
          </form>

          <button type="submit">Cadastrar</button>
        </div>

    </div>
    
    </ProductCadastro>
  )
}