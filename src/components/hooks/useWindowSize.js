import { useRef, useEffect } from 'react';

export function useWindowSize() {
    const size = useRef({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            size.current = { width: window.innerWidth, height: window.innerHeight };
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size.current;
}