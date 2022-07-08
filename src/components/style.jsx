import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  height: 92vh;
  background-color: aliceblue;
`

export const Navbar = styled.section`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8vh;
    background-color: #1b1b1b;
    color: #fff;
    a {
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
    }

    ul {
      display: flex;
      align-items: center;

      li {
        background-color: crimson;
        border-radius: 5px;
        padding: 4px 16px;
        margin-left: 15px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
      }
    }
  }
`
