const icon10 = 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/14zEvKACYf0.png';

function handleIcon09(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon10})`,
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

export const TagIcon10 = handleIcon09('0px -243px');
