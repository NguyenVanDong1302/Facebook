const icon14 = 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/_zgpbbIbG6B.png';

function handleIcon14(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon14})`,
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

export const PlayStationIcon14 = handleIcon14('0px -125px');
