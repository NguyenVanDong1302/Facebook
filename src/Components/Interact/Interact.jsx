import Tippy from '@tippyjs/react/headless';
import { EmojiInteractAngry, EmojiInteractHaha, EmojiInteractHeart, EmojiInteractLike, EmojiInteractLove, EmojiInteractSad, EmojiInteractWow } from '~/Asset/Emoji/EmojiInteract/EmojiInteract';
import './Interact.scss';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';

function Interact({ children, handleLike, handleShowLike }) {
    const RenderResult = (attrs, content, instance) => {
        const handleHideTippy = () => {
            requestAnimationFrame(instance.unmount);
        }
        return <div className={'interact-wrapper'} tabIndex="" {...attrs}>
            <ul>
                <li onClick={() => {
                    handleHideTippy()
                    handleLike('like')
                }}>
                    <EmojiInteractLike />
                </li>
                <li onClick={() => {
                    handleHideTippy()
                    handleLike('heart')
                    handleShowLike('heart')
                }}>
                    <EmojiInteractHeart />
                </li>
                <li onClick={() => {
                    handleHideTippy()
                    handleLike('love')
                    handleShowLike('haha')
                }}>
                    <EmojiInteractLove />
                </li>
                <li onClick={() => {
                    handleHideTippy()
                    handleLike('haha')
                    handleShowLike('haha')
                }}>
                    <EmojiInteractHaha />
                </li>
                <li onClick={() => {
                    handleHideTippy()
                    handleLike('wow')
                    handleShowLike('wow')
                }}>
                    <EmojiInteractWow />
                </li>
                <li onClick={() => {
                    handleHideTippy()
                    handleLike('sad')
                    handleShowLike('sad')
                }}>
                    <EmojiInteractSad />
                </li>
                <li onClick={() => {
                    handleHideTippy()
                    handleLike('angry')
                    handleShowLike('angry')
                }}>
                    <EmojiInteractAngry />
                </li>
            </ul>
        </div>
    };

    return (
        <Tippy
            // visible
            interactive
            placement='top-start'
            trigger="mouseenter"
            delay={[100, 200]}
            // animation={true}
            // animation='rotate'
            hideOnClick='true'
            onHide={(instance) => {
                requestAnimationFrame(instance.unmount);
            }
            }
            render={RenderResult}
        >
            {children}
        </Tippy >
    );
}

export default Interact;
