import styled from 'styled-components';
import FilterBenefits from './features/FilterBenefits/FilterBenefits';

const RootContainer = styled.div`
  display: flex;
  justify-content: center; // Horizontally center
  align-items: center;     // Vertically center
  height: 100vh;           // Full viewport height
  width: 100vw;            // Full viewport width
`;


function App() {

  return (
    <RootContainer>
      <FilterBenefits />
    </RootContainer>
  )
}

export default App
