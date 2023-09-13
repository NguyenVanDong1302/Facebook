import React from 'react';

const icon01 =
    'https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/icon01.png?alt=media&token=570db0bc-c799-4019-994b-8df0919234a7';
function handleIcon01(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon01})`,
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

export const likeIcon = handleIcon01('0 -193px');
export const IconComment = handleIcon01('0px -154px');
export const IconSharePost = handleIcon01('0px -211px');
// Các biểu tượng khác...
