const icon04 = 'https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/-0wB8qMvCsX.png';

function handleIcon08(size) {
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

export const Icon08Story = handleIcon08('0px -376px');
export const Icon08Notification = handleIcon08('0px -250px');
export const GroupIcon08 = handleIcon08('0px -145px');
export const Icon08Cart = handleIcon08('0px -354px');
export const SmartPhoneIcon08 = handleIcon08('0px -334px');
