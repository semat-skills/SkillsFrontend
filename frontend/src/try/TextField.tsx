//import React from 'react';
//import React, {useRef, useState} from 'react';
import React, {useRef} from 'react';


interface Person{
    firstName: string;
    lastName: string;
}

interface Props {
    text: string,
    ok?: boolean,
    i?: number,
    fn?: (bob: string) => string,
    person: Person,
    // handleChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void



}

// interface TextNode{
//     text: string
// }
// export const TextField: React.FC<{text: string}>=() => {
export const TextField: React.FC<Props> =(
    // {handleChange}
    ) => {

    // const [count, setCount] = useState<number | null>(5);
    // const [myString, setMyString] = useState<{ text: string}>({text: 'hello'});
    // const [myStr, setMyStr] = useState<TextNode>({text: 'hello'});



    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
 
  
  
    return (
    <div ref={divRef}>
        
        TextField
        <input ref={inputRef} 
        // onChange={handleChange}
        />
        </div>
  )
}


