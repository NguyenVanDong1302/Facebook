import Tippy from '@tippyjs/react/headless';
import { EmojiInteractAngry, EmojiInteractHaha, EmojiInteractHeart, EmojiInteractLike, EmojiInteractLove, EmojiInteractSad, EmojiInteractWow } from '~/Asset/Emoji/EmojiInteract/EmojiInteract';
import './Interact.scss';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';

function Interact({ children, handleLike }) {
    const RenderResult = (attrs, content, instance) => {
        const hanleHideTippy = () => {
            requestAnimationFrame(instance.unmount);
        }
        return <div className={'interact-wrapper'} tabIndex="" {...attrs}>
            <ul>
                <li onClick={() => {
                    hanleHideTippy()
                    handleLike('like')
                }}>
                    <EmojiInteractLike />
                </li>
                <li onClick={() => {
                    hanleHideTippy()
                    handleLike('heart')
                }}>
                    <EmojiInteractHeart />
                </li>
                <li onClick={() => {
                    hanleHideTippy()
                    handleLike('love')
                }}>
                    <EmojiInteractLove />
                </li>
                <li onClick={() => {
                    hanleHideTippy()
                    handleLike('haha')
                }}>
                    <EmojiInteractHaha />
                </li>
                <li onClick={() => {
                    hanleHideTippy()
                    handleLike('wow')
                }}>
                    <EmojiInteractWow />
                </li>
                <li onClick={() => {
                    hanleHideTippy()
                    handleLike('sad')
                }}>
                    <EmojiInteractSad />
                </li>
                <li onClick={() => {
                    hanleHideTippy()
                    handleLike('angry')
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
