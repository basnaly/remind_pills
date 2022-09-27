import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const LIGHT = {backgroundColor: 'white', textColor: 'black', isLight: true,
                headerBackgroundColor: 'lightgray', headerTextColor: 'black',
                textareaBackground: 'white'};
const DARK = {backgroundColor: 'gray', textColor: 'white',
                headerBackgroundColor: 'dimgray', headerTextColor: 'white',
                textareaBackground: '#9996'};

const ThemeContextProvider = (props) => {
    
    const [currentTheme, setCurrentTheme] = useState(LIGHT);

    const darkTheme = () => setCurrentTheme(DARK);
    
    const lightTheme = () => setCurrentTheme(LIGHT);

    return (
        <ThemeContext.Provider
            value={ { currentTheme, darkTheme, lightTheme }} 
        >
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;