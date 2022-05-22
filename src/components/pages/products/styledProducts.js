import styled from 'styled-components';
export const Sale = styled.div`

main {
   display: flex;
   gap: 1rem;
   flex-wrap: wrap;
   justify-content: center;
}

main img {
  width: 9.37rem;
}

main h1 {
  margin-bottom: 1.5rem;
}


.products .card-products {
  width: 10.5rem;
  height: 12.37rem;
  padding: 10px;
  background-color: rgb(92, 92, 92);
  border: 1px solid red;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.products .card-products img {
  width: 3.75rem;
}

.products .card-products .products-name {
  color: rgb(187, 187, 187);
  font-weight: 700;
  margin-bottom: 1rem;
}

.products .card-products .qtd-products {
  display: flex;
  align-items: center;
  width: 110px;
  background-color: #fff;
  margin-bottom: 1rem;
}

.products .card-products .qtd-products input {
  border: none;
  width: 3.12rem;
  height: 1.8rem;
  outline: none;


}

.products .card-products .qtd-products button {
  width: 1.87rem;
  height: 1.87rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

}

.products .card-products .qtd-products .btn-negative {
  background-color: rgb(219, 102, 102);
  color: white;
}

.products .card-products .qtd-products .btn-positive {
  background-color: rgb(80, 170, 80);
  color: white;
}

.products .card-products .products-buy {
  width: 6.87rem;
  height: 1.5rem;
  background-color: rgb(94, 177, 94);
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.80rem;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

.products .card-products .products-buy:hover {
  transition: 0.2s;
  background-color: rgb(8, 189, 8);
}

`