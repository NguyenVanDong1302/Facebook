const url = 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/mVXlkui2HN3.png';
function handleIcon(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: size,
                backgroundSize: 'auto',
                width: '16px',
                height: '16px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
                // '-webkit-filter': 'var(--filter-always-white)',
            }}
        ></i>
    );
}

export const Icon18Dropdown = handleIcon('0px -265px');
