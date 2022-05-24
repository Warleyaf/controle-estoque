import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProductCadastro } from "./styledCadastro";

export function Cadastro() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [qtd, setQtd] = useState('');
  const history = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    
    fetch('http://localhost:8080/api/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        price,
        qtd,
      })
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Sucess') {
          alert('Produto Cadastrado com Sucesso ✅')
          history('/lista')
        }
      })
  }



  return (
    <ProductCadastro>
      <div className='box-container'>
        <div className='box-container-form'>

          <h2>Cadastrar Produtos</h2>

          <form id="form" onSubmit={onSubmit}>
            <div className="box-form">
              <label htmlFor="name">Nome do Produto:</label>
              <input id="name" type="text" name="name"  value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="box-form">
              <label htmlFor="price">Preço:</label>
              <input id="price" type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className="box-form">
              <label htmlFor="qtd">Quantidade</label>
              <input id="qtd" type="number" name="qtd" value={qtd} onChange={(e) => setQtd(e.target.value)}/>
            </div>

            {/* <div className="box-form">
              <label htmlFor="image">Insira uma imagem:</label>
              <input id="image" type="file" accept="image/*" />
            </div> */}
            <button type="submit">Cadastrar</button>
          </form>

          
        </div>

      </div>
    
    </ProductCadastro>
    
  )


}
