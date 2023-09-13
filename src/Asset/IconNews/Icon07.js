const icon07 = 'https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/9zxP3eMgEJY.png';

function handleIcon07(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon07})`,
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

export const Icon07Post = handleIcon07('0px -528px');
export const Icon07Page = handleIcon07('0px -192px');
export const Icon07Event = handleIcon07('0px -339px');
// export const IconIndexWatch = handleIcon07('-42px -323px');
    