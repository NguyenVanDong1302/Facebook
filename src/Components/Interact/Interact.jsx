import Tippy from '@tippyjs/react/headless';
import { EmojiInteractAngry, EmojiInteractHaha, EmojiInteractHeart, EmojiInteractLike, EmojiInteractLove, EmojiInteractSad, EmojiInteractWow } from '~/Asset/Emoji/EmojiInteract/EmojiInteract';
import './Interact.scss';


function Interact({ children, items = [], items2 = [] }) {
    const RenderResult = (attrs) => (
        <div className={'interact-wrapper'} tabIndex="" {...attrs}>
            <ul>
                <li>
                    <EmojiInteractLike />
                </li>
                <li>
                    <EmojiInteractHeart />
                </li>
                <li>
                    <EmojiInteractLove />
                </li>
                <li>
                    <EmojiInteractHaha />
                </li>
                <li>
                    <EmojiInteractWow />
                </li>
                <li>
                    <EmojiInteractSad />
                </li>
                <li>
                    <EmojiInteractAngry />
                </li>
            </ul>
        </div>
    );

    return (
        <Tippy
            // visible
            interactive
            placement='top-start'
            trigger="mouseenter"
            // delay={[500, 200]}
            // animation={"shift-away"}
            // hideOnClick = 'false'
            render={RenderResult}
        >
            {children}
        </Tippy >
    );
}

export default Interact;
