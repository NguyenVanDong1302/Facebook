const icon13 = 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/1FH1UByS4U6.png';

function handleIcon13(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon13})`,
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

export const ComPassIcon13 = handleIcon13('0px -264px');
