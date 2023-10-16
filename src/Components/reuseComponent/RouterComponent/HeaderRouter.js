import { Link, useLocation } from 'react-router-dom';

function HeaderRouter({ to, children, active }) {
    return (
        <Link to={to}>
            <div className={`headerRouter-item ${active ? 'headerRouter-item-active' : ''}`}>
                {children}
                {active === 'active' ? (
                    <div
                        className="icon-header-active-bottoms"
                        style={{
                            overflow: 'hidden',
                            height: '3px',
                        }}
                    >
                        <div className="icon-header-active-bottom"></div>
                    </div>
                ) : undefined}
            </div>
        </Link>
    );
}

export default HeaderRouter;
