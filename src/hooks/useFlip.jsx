import React, {useState} from 'react';

const useFlip = (initialState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialState);
    const Flip = () => {
        setIsFlipped(flip => !flip)
    }
    return [isFlipped, Flip]
}

export default useFlip;