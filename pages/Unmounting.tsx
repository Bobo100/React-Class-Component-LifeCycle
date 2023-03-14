import React, { useState } from 'react';
import ClassComponentUnmounting from '../components/ClassComponentUnmounting';
export default function Unmounting() {
    const [isMounted, setIsMounted] = useState(false);

    const handleClick = () => {
        setIsMounted((prevState) => !prevState);
    }

    return (
        <div>
            <h1>Unmounting</h1>
            <p>最後是 Unmounting 階段，Unmounting 階段的生命週期函數有以下幾個:</p>
            <ul>
                <li>componentWillUnmount</li>
            </ul>
            <p>當一個元件被移除時，會觸發 componentWillUnmount</p>

            <button onClick={handleClick}>{isMounted ? 'Unmount' : 'Mount'} ClassComponentUnmounting</button>
            {isMounted && <ClassComponentUnmounting title="ClassComponentUnmounting" />}
        </div>
    )
}