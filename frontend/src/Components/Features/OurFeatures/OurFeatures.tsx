import React from 'react'
import { CInfo } from '../CInfo/CInfo';
import { FeaturesDiv } from './ourFeaturesStyle';
import { Stories } from './Stories/Stories';


interface OurFeaturesProps {

}

export const OurFeatures: React.FC<OurFeaturesProps> = ({}) => {
        return (
            <FeaturesDiv>
                <CInfo title='My Title'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.'/>
                <Stories />
                
            </FeaturesDiv>
        );
}

