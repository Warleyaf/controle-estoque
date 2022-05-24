
import React from 'react'
import { useState, useEffect } from 'react';
import { List } from "./styledList";
import { ListItens } from "./ListItens";


export function ListaProducts() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
    .then(response => response.json())
    .then(data => setList(data))

  }, [])

  return(
    <List>
      <div className="list">
        <ul className="list-products">
          {list.map(listItem => {
            return <ListItens key={listItem._id} listItem={listItem}/>
          })}
          
        </ul>
      </div>
    </List>
  )
}