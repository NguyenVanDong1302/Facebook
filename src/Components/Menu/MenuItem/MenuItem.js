import Button2 from '~/Components/reuseComponent/Button/Button2/Button2';
import './Menu.scss';

function MenuItem({ data, onClick, classOfIconL, dataDetail }) {
    const classes =
        ('menu-item',
        {
            separate: data.separate,
        });
    return (
        <>
            {data.header ? (
                data.header
            ) : (
                <Button2
                    className={classes}
                    leftIcon={data.icon}
                    rightIcon={data.iconR}
                    to={data.to}
                    onClick={onClick}
                    classOfIconL={classOfIconL}
                    dataDetail={data.detail}
                >
                    {data.title}
                </Button2>
            )}
        </>
    );
}

export default MenuItem;
