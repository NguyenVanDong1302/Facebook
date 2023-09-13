import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const Button = ({ title = 'click me', centerIcon }) => {
    return (
        <button className='button-module'>
            {centerIcon ? <span className={cx('button-icon')}>{centerIcon}</span> : undefined}
            <span className={cx('button-title')}>{title}</span>
        </button>
    );
};

export default Button;
