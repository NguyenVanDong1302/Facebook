import React from 'react';
const icon03 =
    'https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/gnPsYmyL0vQ.png?alt=media&token=f77a4174-0068-46fe-b77e-6f427cc8fe38';

function handleIcon03(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon03})`,
                // backgroundImage: `url('./icon01')`,
                backgroundPosition: size,
                backgroundSize: 'auto',
                width: '20px',
                height: '20px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
            }}
        ></i>
    );
}

export const IconLive = handleIcon03('0 -250px');
export const IconSaved = handleIcon03('0px -230px');
