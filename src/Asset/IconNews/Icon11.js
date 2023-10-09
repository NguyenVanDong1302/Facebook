const icon11 = 'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/yFJmOTQsMSO.png';

function handleIcon011(size) {
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

export const Icon11Heart = handleIcon011('0px -327px');
export const PlaystationIcon11 = handleIcon011('0px -306px');
export const HomeIcon11 = handleIcon011('0px -347px');
export const PhoneIcon11 = handleIcon011('0px -347px');
export const NotificationIcon11 = handleIcon011('0px -117px');
export const SaveIcon11 = handleIcon011('0px -159px');
