const icon11 = 'https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/GZftNb7dpAe.png';

function handleIcon12(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon11})`,
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

export const FeedIcon12 = handleIcon12('0px -368px');
