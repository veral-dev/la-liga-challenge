import styled from 'styled-components';

export const CardContainer = styled.div`
  animation: ${(props) => props.timer * 0.25}s ease 0s normal forwards 1 fadein;
  -webkit-animation: ${(props) => props.timer * 0.25}s ease 0s normal forwards 1 fadein;

  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0);
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  max-width: 100%;
  box-shadow: 0 6px 17px 2px rgb(51 62 73 / 8%);
  img {
    height: 30px;
    width: 100%;
    object-fit: scale-down;
  }
  > h4 {
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    margin: 0;
  }
`;
