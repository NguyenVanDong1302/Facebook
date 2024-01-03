const url =
    'https://firebasestorage.googleapis.com/v0/b/facebook-ui-6f536.appspot.com/o/Icon20.png?alt=media&token=816a7c67-0ae9-4d3b-86e0-21729a5f536c';
const handleIcon = (size) => {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: size,
                backgroundSize: 'auto',
                width: '16px',
                height: '16px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
                // '-webkit-filter': 'var(--filter-always-white)',
            }}
        ></i>
    );
};

export const Icon20Tag = handleIcon('0px -1352px');
export const Icon20Gif = handleIcon('0px -1233px');
export const Icon20Camera = handleIcon('0px -1131px');
export const Icon20Face = handleIcon('0px -1199px');
export const Icon20Avatar = handleIcon('0px -1097px');
export const Icon20Star = handleIcon('0px -1335px');

// export const Icon19TrashCan = (
//     <i
//         className="icon01"
//         style={{
//             backgroundImage: `url(${url})`,
//             backgroundPosition: '0px -882px',
//             backgroundSize: 'auto',
//             width: '16px',
//             height: '16px',
//             backgroundRepeat: 'no-repeat',
//             display: 'inline-block',
//             // '-webkit-filter': 'var(--filter-always-white)',
//         }}
//     ></i>
// );
