import { useEffect, useState } from 'react';
import BenefitCard from './BenefitCard';

import { FilterWrapper, Select, BenefitsWrapper, NoBenefits  } from './styles';
import SearchBenefits from '../SearchBenefits/SearchBenefits';

const FilterBenefits = () => {
    
    const [country, setCountry] = useState('Country');
    const [status, setStatus] = useState('Status');
    const [type, setType] = useState('Type');
    const [keyword, setKeyword] = useState('');

    const benefitsData = [
        {
            id: 1,
            title: 'Pension by Aviva',
            description: 'Tax benefits depend on your personal circumstances and can change in the future.',
            likes: 133,
            type: 'insurance'
          },
          {
            id: 2,
            title: 'Gympass',
            description: 'Gympass empowers you to lead a healthy life by providing unlimited access to thousands of gyms.',
            likes: 67,
            country: 'UK',
            type: 'health'
          },
          
    ];

    const filteredBenefits = benefitsData.filter(benefit => {
        let countryCondition = country === 'Country' ? true : country === benefit.country;
        let typeCondition = type === 'Type' ? true : type === benefit.type;
        let searchCondition = keyword === '' ? true : Object.values(benefit).some(value => {
            return typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase());
        });
        
        return countryCondition && typeCondition && searchCondition;
      });
    
    
    return(
        <div>
            <h1 className='col-6'>Benefits</h1>

            <SearchBenefits keyword={keyword} setKeyword={setKeyword} />

            <FilterWrapper>
                <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value={'Country'}>Country</option>
                    <option value={'UK'}>United Kingdom</option>
                    <option value={'IRL'}>Ireland</option>
                    <option value={'SCOT'}>Scotland</option>

                </Select>
                <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value={'Status'}>Status</option>
                    <option value={'UK'}>United Kingdom</option>
                    <option value={'IRL'}>Ireland</option>
                    <option value={'SCOT'}>Scotland</option>
                </Select>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value={'Type'}>Type</option>
                    <option value={'insurance'}>Insurance</option>
                    <option value={'health'}>Health</option>
                    <option value={'pension'}>Pension</option>
                </Select>
            </FilterWrapper>

            <BenefitsWrapper>
                {filteredBenefits.length === 0 ? <NoBenefits>No benefits based on the selected</NoBenefits> : 

                filteredBenefits.map(benefit => (
                    <BenefitCard key={benefit.id} benefit={benefit} />
                ))}
            </BenefitsWrapper>
        
        </div>
    )

}

export default FilterBenefits;