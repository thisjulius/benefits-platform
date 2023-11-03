import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData';

import { BenefitsWrapper, FilterWrapper, NoBenefits } from '../FilterBenefits/styles';
import PostCard from './PostCard';

const FilterPosts: FunctionComponent = () => {

    const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');

    const filteredPosts = data.filter((post) => (
        post.userId === 1
    ));

    if (loading) return 'Loading...';
    if (error) return 'Error...';
    if (data === null) return null;
    
    return(
        <div>

            <BenefitsWrapper>
                {filteredPosts.length === 0 ? <NoBenefits>No posts by user id </NoBenefits> : 

                filteredPosts.map(post => (
                    <PostCard post={post}/>
                ))}
            </BenefitsWrapper>
        
        </div>
    )
    



}

export default FilterPosts;