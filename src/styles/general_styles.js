import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 0 10px;
  margin-top: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(10px, auto);
  }
`;

const Error404 = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
`;

const Main = styled.div`
  background: url('/liga-background.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 90px);
  overflow-y: scroll;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
const Container = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  border: 1px solid rgba(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  position: relative;
  h1 {
    text-align: center;
    margin: 5px auto;
  }
  h3 {
    text-align: center;
    margin: 5px auto;
  }
`;

export { Grid, Main, Container, Error404 };
