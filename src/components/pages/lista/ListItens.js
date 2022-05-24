import React from "react";

export function ListItens(props) {
  return(
    <li>
      <div>Produto: <span>{props.listItem.name}</span></div>
      <div>R$: <span>{props.listItem.price}</span></div>
      <div>Qtd: <span>{props.listItem.qtd}</span></div>
    </li> 
  )
}