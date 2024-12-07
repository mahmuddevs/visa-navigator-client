import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    if (theme === 'light') {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
    }
    if (theme === 'dark') {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }

    const value = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider