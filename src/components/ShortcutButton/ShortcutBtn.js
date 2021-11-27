import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './ShortcutBtn.css';

function ShortcutBtn() {

    const user = useSelector(state => state.user)?.user.user;
    const location = useLocation();

    const handleActiveShortcut = () => {
        const shortcutWrapElement = document.querySelector('.shortcut-btn--wrap');
        if (shortcutWrapElement) shortcutWrapElement.classList.toggle('active')
    }

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
        handleActiveShortcut();
    }

    useEffect(() => {
        if (location.pathname === "/cart") {
            const shortcut = document.querySelector(".shortcut-btn");
            if (!shortcut) return;
            shortcut.style.transform = "translateY(-100px)"
        }
    }, [location.pathname])

    return (
        <div className="shortcut-btn">
            <div className="shortcut-btn--wrap">
                <div className="shortcut-main" onClick={handleActiveShortcut}>
                    <i className="fas fa-plus-circle"></i>
                </div>
                <div className="shortcut-home" onClick={handleActiveShortcut}>
                    <Link to="/">Home</Link>
                </div>
                <div className="shortcut-scroll-top" onClick={handleScrollToTop}>
                    <i className="fas fa-long-arrow-alt-up"></i>
                </div>
                {user && user.username && <div className="shortcut-cart" onClick={handleActiveShortcut}>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </div>}
            </div>
        </div>
    )
}

export default ShortcutBtn
