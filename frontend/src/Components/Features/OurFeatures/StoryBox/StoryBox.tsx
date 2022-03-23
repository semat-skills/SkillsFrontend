import React from 'react'
import { StoryBoxDiv } from './StoryBoxStyle';

interface StoryBoxProps {
    text:string
}

export const StoryBox: React.FC<StoryBoxProps> = ({text}) => {
        return (
            <StoryBoxDiv>
                {text}
            </StoryBoxDiv>
        );
}

