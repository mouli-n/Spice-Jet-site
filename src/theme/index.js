import {createTheme} from '@material-ui/core/styles'
import themeConstants from './constants'
import darkPalette from './palette/dark'
import lightPalette from './palette/light'
import typography from './typography'

const commonThemeObjects = {
	typography,
	...themeConstants
}

export const lightTheme = createTheme({palette: lightPalette, ...commonThemeObjects})
export const darkTheme = createTheme({palette: darkPalette, ...commonThemeObjects})

const theme = {light: lightTheme, dark: darkTheme}

export default theme
