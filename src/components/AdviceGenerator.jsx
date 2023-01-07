import React, { useState, useEffect } from 'react'
import "../styles/advice.css";
import axios from 'axios';

const AdviceGenerator = () => {
    const [advice, setAdvice] = useState(null);

    useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = () => {
        axios
            .get('https://api.adviceslip.com/advice')
            .then((response) => {
                setAdvice(response.data.slip.advice);
                console.log('i am fired');
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            <div className='advice-generator'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <hr />
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" fill="currentColor" class="bi bi-pause-fill pause" viewBox="0 0 16 16">
                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                    </svg>
                    <hr />
                </div>


                <button className='button' onClick={getAdvice}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
                        <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default AdviceGenerator;
