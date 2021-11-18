import { useEffect } from 'react'

function useClickOutSide(ref, index) {

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (ref.current && (!ref.current.contains(e.target))) {
                if (ref.current.className.includes("header-with-search-history")) {
                    if (e.target.closest(".header-search-box")) return;
                }
                ref.current.classList.remove("active");
            }
        }
        document.addEventListener("mousedown", handleClickOutSide);

        return () => document.removeEventListener("mousedown", handleClickOutSide)

    }, [index, ref])

}

export default useClickOutSide
