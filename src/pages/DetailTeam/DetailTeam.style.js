import styled from 'styled-components';

const TeamContainer = styled.div`
  padding: 20px 5px;
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 0 5px;
  margin-top: 5px;
  font-family: Avenir;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.4px;
  color: #bec2c5;
  p {
    margin-bottom: 5px;
  }
  @media (min-width: 768px) {
    margin: 0 30px;
  }
`;

const Name = styled.p`
  min-width: 100px;
  font-family: Avenir;
  font-size: 16px;
  font-weight: 900;
  font-stretch: normal;
  font-style: oblique;
  line-height: 1.3;
  letter-spacing: normal;
  color: #46555e;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Data = styled.p`
  font-family: Avenir;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: #506069;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SearchInput = styled.input`
  height: 40px;
  margin-top: 10px;
  padding: 17px 76px 16px 23px;
  border-radius: 30px;
  background-color: #efefef;
  width: 100%;
  @media (min-width: 768px) {
    position: absolute;
    left: 60px;
    top: 2rem;
    width: 300px;
  }
`;

const TeamHeader = styled.div`
  margin-top: 2rem;
  @media (max-width: 768px) {
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    flex-direction: 'column';
    top: 30px;
  }
`;

export { Data, TeamGrid, Name, TeamContainer, SeeMore, SearchInput, TeamHeader };
