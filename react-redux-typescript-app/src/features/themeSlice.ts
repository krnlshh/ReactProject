import { createSlice } from "@reduxjs/toolkit";

interface ThemeState  { theme: string }
const initialState : ThemeState = { theme : 'light'}

export const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        toggleTheme  : (state) => {
          state.theme = state.theme === "light" ? "dark" : "light"
        }
    }
})
export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer


 

// Create the Theme Slice:

// In features, add a theme/ folder with themeSlice.ts.
// Define initial state with mode: 'light'.
// Add a toggleTheme reducer that switches state.mode between 'light' and 'dark'.
// Export the action and reducer.