import React from "react";
import { Header } from './stylednav';
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <div>
      <Header>
        <div className="navigation">
          <div className="logo">
            Horta do <span>Bem</span>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="lista">Listar Produtos</Link></li>
              <li><Link to="cadastro">Cadastrar Produtos</Link></li>
            </ul>
          </nav>
        </div>
      </Header>
    </div>

  )
}