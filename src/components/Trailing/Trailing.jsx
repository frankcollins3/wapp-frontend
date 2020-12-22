import React, { useState, useEffect } from 'react';
import './trailing.css';
import WAPPRequest from '../../utils';


export default function Trailing() {
    // const [yesterday, setYesterday] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const getUserData = async () => {
            const response = await WAPPRequest('/data', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'},
            }).catch(() => {
                setError(true);
                return null;
            });
            setLoading(false);
            console.log(response);
    
            if (response) {
                console.log(response);
    
            }
        };
    
        getUserData()
    }, []);

    return <p> ok</p>
}

