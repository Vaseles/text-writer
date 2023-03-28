import { useContext } from "react";
import { ThemeContext } from "../components/ThemeChanger/ThemeChanger";


export const useTheme = () => useContext(ThemeContext)