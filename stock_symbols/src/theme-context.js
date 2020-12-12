import React from 'react';

export const themes = {
    dark: {
        foreground: '#6b6c7a',
        background: '#222222',
        textColor: '#ffffff'
    }
};

export const ThemeContext = React.createContext(
    themes.dark // defaulted to dark
)