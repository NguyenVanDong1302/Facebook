const icon16 =
    'https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/Icon16.png?alt=media&token=d7ae6638-bd26-4fda-9a64-056e5a0a4d27';
// import './ImageIcons/Icon16.png'
// const icon16 = './ImageIcons/Icon16.png';
function handleIcon16(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon16})`,
                // backgroundImage: 'url(./)',
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

export const AddFileIcon16 = handleIcon16('0px -62px');
