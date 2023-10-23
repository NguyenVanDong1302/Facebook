const url =
    'https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/Icon19.png?alt=media&token=8f8a1f0e-67c5-4431-a06f-7c0d78d8b88e&_gl=1*1xrai65*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5Nzk4Njk2NC4zNi4xLjE2OTc5ODcyNDUuMzkuMC4w';
const handleIcon = (size) => {
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
};

// export const Icon19TrashCan = handleIcon('0px -882px');
export const Icon19TrashCan = (
    <i
        className="icon01"
        style={{
            backgroundImage: `url(${url})`,
            backgroundPosition: '0px -882px',
            backgroundSize: 'auto',
            width: '16px',
            height: '16px',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
            // '-webkit-filter': 'var(--filter-always-white)',
        }}
    ></i>
);
