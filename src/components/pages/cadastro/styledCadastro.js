import styled from 'styled-components';

export const ProductCadastro = styled.div`

.box-container {
  width: 100%;
  /*border: 1px solid red;*/
  display: flex;
  justify-content: center;

}

.box-container .box-container-form {
  background-color: rgb(210, 217, 223);
  border-radius: 1rem;
  padding: 1rem 1.30rem 1rem 1.30rem;
}

.box-container .box-container-form h2 {
  color: #5F5F5F;
}

.box-container form {

  /*border: 1px solid blue;*/
  width: 400px;
}

.box-container form .box-form {
  display: flex;
  flex-direction: column;
}

.box-container form .box-form label {
  color: #5F5F5F;
  font-size: 1rem;
  font-weight: 500;
}

.box-container form .box-form input {
  height: 1.87rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  /*border: 1px solid black;*/
  outline: none;
  padding-left: 0.5rem;
  margin-bottom: 0.62rem;
  border: none;
}

.box-container .box-container-form button {
  margin-top: 1rem;
  width: 100%;
  height: 1.87rem;
  font-size: 1.2rem;
  color: white;
  background-color: #65bb65;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
}

.box-container .box-container-form button:active {
  background-color: #519b51;
  transition: 0.2s;
}

`