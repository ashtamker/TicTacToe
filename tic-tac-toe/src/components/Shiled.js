import React from 'react';
import {ReactComponent as ShiledLogo } from '../icon/Shiled.svg';

export default function Shiled(props) {
    const size = props.size || 100;


    return (
        <div>
            <ShiledLogo />
        </div>
    )
} 
