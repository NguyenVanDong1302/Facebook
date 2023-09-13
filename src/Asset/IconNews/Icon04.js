const icon04 =
    'https://firebasestorage.googleapis.com/v0/b/store-d9651.appspot.com/o/icon04.png?alt=media&token=e05ad878-b4cc-44c9-8341-18bf978e899c';

function handleIcon04(size) {
    return (
        <i
            className="icon01"
            style={{
                backgroundImage: `url(${icon04})`,
                // backgroundImage: `url('./icon01')`,
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

export const IconReels = handleIcon04('-25px -130px');
export const IconIndexWatch = handleIcon04('-42px -323px');
export const Icon04Footage = handleIcon04('-25px -131px');
