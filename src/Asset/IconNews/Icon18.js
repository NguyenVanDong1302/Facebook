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
export const Icon18ImageI = () => {
    return (
        <img
            src="https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/IIcon.png?alt=media&token=cc34242d-5d72-409d-be33-8d57e6f62e50&_gl=1*d8sl2j*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5NzQ3MjA0Ni4xOS4xLjE2OTc0NzMwODEuMTUuMC4w"
            alt="i-icon"
            style={{
                width: '20px',
                height: '20px',
            }}
        />
    );
};
export const Icon18ImageMaps = () => {
    return (
        <img
            src="https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/MapsIcon.png?alt=media&token=4da25eb6-05c4-462c-87ba-b7cfa4b85be7&_gl=1*r3znwc*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5NzQ3MjA0Ni4xOS4xLjE2OTc0NzMzMzkuNDcuMC4w"
            alt="maps-icon"
            style={{
                width: '20px',
                height: '20px',
            }}
        />
    );
};
