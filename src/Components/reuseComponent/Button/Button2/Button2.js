import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button2({
    to,
    href,
    dataDetail,
    leftIcon,
    rightIcon,
    primary,
    outline = false,
    small = false,
    large = false,
    text,
    disabled,
    children,
    className,
    onClick,
    miniImg,
    classOfIconL,
    classOfIconR,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = NavLink;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        small,
        large,
        disabled,
        leftIcon,
    });
    const testClass = dataDetail ? 'titles' : '';
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon', classOfIconL)}>{leftIcon}</span>}
            {children && (
                <span className={cx('title', testClass)}>
                    {children}
                    {dataDetail && <span className={cx('detail')}>{dataDetail}</span>}
                </span>
            )}

            {/* </div> */}
            {rightIcon && (
                <div className={cx('popper-icon-right')}>
                    {rightIcon && <span className={cx('icon', classOfIconR)}>{rightIcon}</span>}
                    {miniImg && (
                        <span className={cx('mini-image')}>
                            <img src={miniImg} alt="miniImage" />
                        </span>
                    )}
                </div>
            )}
        </Comp>
    );
}

Button2.prototype = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    leftIcon: PropTypes.node,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button2;
