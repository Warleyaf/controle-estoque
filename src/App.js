import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Nav } from './components/pages/nav/Nav';
import { Main } from './components/pages/home/styledhome';
import { Products } from './components/pages/products/Products';
import { ListaProducts } from './components/pages/lista/ListaProducts';
import { Cadastro } from './components/pages/cadastro/Cadastro';


export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Main>
        <Routes>
          <Route exact path='/' element={<Products/>} />
          <Route exact path="/lista" element={<ListaProducts/>} />
          <Route exact path="/cadastro" element={<Cadastro/>} />
        </Routes>
      </Main>
    </Router>

  );
}


