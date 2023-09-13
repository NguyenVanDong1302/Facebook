import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/shift-away.css';

function TippySwPage({ children, content }) {
    return (
        <Tippy
            content={content}
            placement="bottom"
            arrow={false}
            duration={[500, 0]}
            // theme="light"
            animation="shift-away"
        >
            {children}
        </Tippy>
    );
}

export default TippySwPage;
