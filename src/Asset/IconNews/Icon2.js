const urlIcon02 = 'https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png';

function handleIcon02(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${urlIcon02})`,
                backgroundPosition: size,
                backgroundSize: 'auto',
                width: '36px',
                height: '36px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
            }}
        ></i>
    );
}

export const IconFriendColorFul = handleIcon02('0 -296px');
export const IconWatchColorFul = handleIcon02('0px -518px');
export const IconGroupColorFul = handleIcon02('0 -37px');
export const IconDatingColorFul = handleIcon02('0 -0px');
