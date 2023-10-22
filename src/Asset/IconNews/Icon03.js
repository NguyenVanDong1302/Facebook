import React from 'react';
const icon03 =
    'https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/Icon03.png?alt=media&token=a1ff5376-a1f5-4ac2-b943-17b5c8ca096e&_gl=1*6lpmqf*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5NzgxNTkwOC4yOS4xLjE2OTc4MTU5NTEuMTcuMC4w';

function handleIcon03(map, size = 20) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon03})`,
                // backgroundImage: `url('./icon01')`,
                backgroundPosition: map,
                backgroundSize: 'auto',
                width: size + 'px',
                height: size + 'px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
            }}
        ></i>
    );
}

export const IconLive = handleIcon03('0 -250px');
export const IconSaved = handleIcon03('0px -230px');
export const Icon03Setting = handleIcon03('0px -762px', 16);
export const Icon03Filter = handleIcon03('0px -592px', 16);
