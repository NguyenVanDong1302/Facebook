const icon15 =
    'https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/Icon15.png?alt=media&token=f09b6c61-325b-43bd-898e-929403f1b359';

function handleIcon15(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon15})`,
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

export const UserIcon15 = handleIcon15('0px -21px');
