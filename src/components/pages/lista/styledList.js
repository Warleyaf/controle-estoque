import styled from 'styled-components';

export const List = styled.div`

 .product-list {
    padding-top: 1rem;
    border: 1px solid red;
    border-radius: 0.5rem;
    background-color: #fff;
}

.product-list .teste {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.product-list .product-info {
  width: 70%;
  display: flex;
  border-radius: 0.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(215, 250, 222);
  padding: 0rem 1rem;
}

.product-list .product-info .img img {
  width: 2.5rem;
}

.product-list .products-value {
  display: flex;
  gap: 3.12rem;
}

.product-list .products-link {
  display: flex;
  gap: 0.62rem;
}
.product-list .products-link a img {
  width: 1.5rem;
}

`