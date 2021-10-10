import { useEffect, useState } from "react";


function getDimensionWindow() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
        height,
        width
    }
}

const useDimensionWindow = () => {

    const [dimension, setDimension] = useState(getDimensionWindow());

    useEffect(() => {
        function handleResize() {
            setDimension(getDimensionWindow());
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize);
        
    }, []);

    return dimension 
}

export default useDimensionWindow;