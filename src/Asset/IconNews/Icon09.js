const icon09 = 'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/MfjvrLlbDSg.png';

function handleIcon09(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon09})`,
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

export const Icon09MailBox = handleIcon09('0px -171px');
