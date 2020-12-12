import { useState, useEffect } from 'react';

export const headerHeight = 60;
export const headerMargin = 10;

export const footerHeight = 60;
export const footerMargin = 10;

const marginWidth = 0;
const mErrorHeight = 80;

export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth - marginWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth) - marginWidth;
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return width;
}

export function useWindowHeight() {
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return height;
}

export function CalcContentHeight() {
    const subtractedHeight = (2*headerMargin) + (2*footerMargin) + mErrorHeight;
    const [height, setHeight] = useState(window.innerHeight - subtractedHeight);
    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight - subtractedHeight);
        window.addEventListener('resize', handleResize);
        return() => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return height;
}