const url = 'https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/A-0sOGEvPBj.png';

function handleIcon17(size) {
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
                '-webkit-filter': 'var(--filter-always-white)',
            }}
        ></i>
    );
}

export const Icon17Avatar = handleIcon17('0px -84px');
export const Icon17Camera = handleIcon17('0px -117px');

export const Icon17Pen = () => {
    return (
        <img
            src="https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/penIcon.png?alt=media&token=10f6fc4f-2d26-447e-ad90-4c678b15d7ef&_gl=1*1fptnft*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5NzA4NDU2NS4xNS4xLjE2OTcwODQ2MTIuMTMuMC4w"
            alt={'penicon17'}
        />
    );
};

export const Icon17Wrench = () => {
    return (
        <img
            src="https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/qNdgg4c_yDt.png?alt=media&token=33f20f52-13d9-4250-bed6-87d0e84d4e6a&_gl=1*8t0914*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5NzA5NDAwMS4xNi4xLjE2OTcwOTQwMTAuNTEuMC4w"
            alt={'iconWrench'}
        />
    );
};
export const Icon17Speaker = () => {
    return (
        <img
            src="https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/a6rSRU9IeGB.png?alt=media&token=f95e9dce-7449-40e5-8fff-0a970391eaf0&_gl=1*1m58ja7*_ga*OTA3NjQ5Nzk4LjE2OTUwMjgwNDY.*_ga_CW55HF8NVT*MTY5NzA5NDAwMS4xNi4xLjE2OTcwOTQyOTMuMzQuMC4w"
            alt={'iconSpeaker'}
        />
    );
};
