import styled from 'styled-components';

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .list {
    width: 43rem;
    border: 1px solid blue;
    padding: 0 1rem;
  }

  .list ul li {
    display: flex;
    justify-content: center;
    gap: 1rem;
    list-style: none;
    padding: 0.5rem;
    text-align: center;
    width: 100%;
    background-color: #fff;
    margin-bottom: 0.5rem;
  }

`