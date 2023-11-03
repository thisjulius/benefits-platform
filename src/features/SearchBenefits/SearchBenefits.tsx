import { useState } from "react";
import styled from 'styled-components';


const Input = styled.input`
    color: #000;
    width: 10%;
    padding: 15px 10px;
`;

const SearchBenefits = ({ keyword, setKeyword }) => {

    return(
        <>
            <Input type="text" placeholder="Search me..." value={keyword} onChange={(e) => {setKeyword(e.target.value)}}/>
        </>
    )

}

export default SearchBenefits;