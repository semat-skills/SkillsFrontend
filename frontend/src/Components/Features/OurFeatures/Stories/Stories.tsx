import React, { useState } from 'react'
import { StoryBox } from '../StoryBox/StoryBox';
import { StoriesDiv } from './StoriesStyle';

interface StoriesProps {
    // StoriesList: [] | null;
}
// const [StoriesList] = useState()

// type Story = {}

export const Stories: React.FC<StoriesProps> = ({}) => {
        return (
            <StoriesDiv>
                <div className='first'>
                <StoryBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.' 
                />
                <StoryBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.' 
                />
                </div>
                <div className='second'>
                <StoryBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.' 
                />
                <StoryBox text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.' 
                />
                </div>
            </StoriesDiv>
        );
}

