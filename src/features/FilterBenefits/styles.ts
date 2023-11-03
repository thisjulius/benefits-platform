import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
  background-color: #ccc;
  padding: 15px;
  width:80vw;
`;

const Select = styled.select`
  padding: 5px 10px;
  margin-left: 0px 0px 0px 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 15px;
  
`;

const NoBenefits = styled.div`
    display: flex;
    justify-content: left;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 15px;
    width:80vw;
`;

const BenefitsWrapper = styled.div`
  display: flex;
  height: 50vh;
`;


export { FilterWrapper, Select, NoBenefits, BenefitsWrapper}; 