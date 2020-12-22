import React from "react";

const LightTheme = React.lazy(() => import('./../scss/LightTheme'));
const DarkTheme = React.lazy(() => import('./../scss/DarkTheme'));
const ThemeSelector = ({ children }) => {
    const CHOSEN_THEME = localStorage.getItem('darkmode') === 'true' ? 'dark': 'light'
    return (
        <>
            <React.Suspense fallback={<></>}>
                { (CHOSEN_THEME === 'dark') ? <DarkTheme /> : <LightTheme /> }
            </React.Suspense>
            {children}
        </>
    )
}

export default ThemeSelector;
