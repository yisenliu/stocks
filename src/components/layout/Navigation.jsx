import { useState, useEffect, useRef } from 'react';
import NavItem from './NavItem';

const navigationStyles = {
  basic: 'z-2 top-0 fixed bg-black/50 ',
  open: 'translate-x-0',
  close: '-translate-x-full',
};
const navItems = [
  { to: '/', text: 'Home' },
  { to: '/tw', text: '台股' },
  { to: '/us', text: '美股' },
];
export default function Navigation({ open, onClose }) {
  const navRef = useRef();
  const statusStyle = open ? navigationStyles.open : navigationStyles.close;
  const [animationEnd, SetAnimationEnd] = useState(false);

  useEffect(() => {
    const navigation = navRef.current;
    const closeNavi = () => SetAnimationEnd(true);
    if (animationEnd) {
      navigation.addEventListener('transitionend', closeNavi);
    }
    return () => navigation.removeEventListener('transitionend', closeNavi);
  }, [animationEnd]);

  return (
    <>
      {!animationEnd && (
        <div className={navigationStyles.basic + (open ? 'w-full' : 'w-0')} onClick={onClose} id="navigation">
          <nav
            ref={navRef}
            className={
              'flex flex-col transition-transform w-64 h-screen p-4 space-y-4 text-white bg-black ' + statusStyle
            }
          >
            {navItems.map(link => (
              <NavItem {...link} key={link.text} onClick={onClose} />
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
