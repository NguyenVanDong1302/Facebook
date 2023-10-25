const icon05 =
    'https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/icon05.png?alt=media&token=c8a02f2a-7f25-440e-a970-b75342f0f8f6';

function handleIcon05(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon05})`,
                // backgroundImage: `url('./icon01')`,
                backgroundPosition: size,
                backgroundSize: 'auto',
                width: '20px',
                height: '20px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
                '-webkit-filter':'var(--filter-secondary-icon)'
            }}
        ></i>
    );
}

export const IconSetting = handleIcon05('-63px -105px');
export const CloseIcon05 = handleIcon05('-168px -84px');
// export const Icon05Close