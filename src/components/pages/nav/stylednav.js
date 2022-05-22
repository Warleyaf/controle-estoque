
import styled from "styled-components";

export const Header = styled.div`
  

  .navigation {
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 7rem;
  }

    .logo {
      font-size: 2rem;
      font-weight: 700;
    }
      .logo span {
        color: #48a348;
      }
    nav ul {
      display: flex;
      gap: 2rem;
    }

      nav ul li {
        list-style: none;
      }
        nav ul li a {
          font-size: 1.1rem;
          text-decoration: none;
          color: #757575;
        }
          nav ul li a:hover {
            transition: 0.2s;
            color: #242424;
          }

`

