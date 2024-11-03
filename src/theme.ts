import { createTheme } from '@mui/material/styles';
// Custom colors for the theme
const customPalette = {
  brown: [
    "#fdf6ea", "#f3e9dc", "#e5d1b8", "#d6b790", "#caa36d",
    "#c39557", "#c08d4b", "#a97a3c", "#976c33", "#845c27",
  ],
  blue: [
    "#eaebff", "#d0d2ff", "#9ca0ff", "#666cfd", "#3940fc",
    "#1e24fc", "#0f16fd", "#010be2", "#0007cb", "#0003b3",
  ],
  white: [
    "#FFFFFF", "#F9FAFB", "#F3F4F6", "#E5E7EB", "#D1D5DB",
    "#9CA3AF", "#6B7280", "#4B5563", "#374151", "#1F2937", 
    "#111827", "#0F172A",
  ],
  green: [
    "#ECFDF5", "#D1FAE5", "#A7F3D0", "#6EE7B7", "#34D399",
    "#10B981", "#059669", "#047857", "#065F46", "#064E3B", "#052C16",
  ],
  greenNeon: [
    "#faffe3", "#f5ffcd", "#ebff9c", "#e0ff66", "#d7ff3b",
    "#d1ff21", "#cdff11", "#b5e300", "#9fc900", "#88ae00",
  ],
  grey: [
    "#F9FAFB", "#F3F4F6", "#E5E7EB", "#D1D5DB", "#9CA3AF",
    "#6B7280", "#4B5563", "#374151", "#1F2937", "#111827", "#0F172A",
  ],
  lightGreen: [
    "#fafaf0", "#f2f2e1", "#e4e3be", "#d6d597", "#c9c876",
    "#c1c062", "#bdbc56", "#a6a646", "#94943c", "#7f7f2e",
  ],
  lightGray: [
    "#fef2f5", "#eae6e7", "#cdcdcd", "#b2b2b2", "#9a9a9a",
    "#8b8b8b", "#848484", "#717171", "#676465", "#5e5457",
  ],
  veryDarkGray: [
    "#5A5A5A", "#131313", "#131313", "#131313", "#131313",
    "#131313", "#131313", "#131313", "#131313", "#131313",
  ],
  darkGreen: [
    "#f7ffeb", "#eefed5", "#dbfea3", "#c6fe6e", "#b5fe47",
    "#aafe32", "#a3fe28", "#8fe21e", "#7dc815", "#69ad00",
  ],
  brightRed: [
    "#ffe8e8", "#ffd1d1", "#f9a2a2", "#f46f6f", "#f04545",
    "#ed2a2a", "#ed191b", "#d3090f", "#bd000b", "#a50006",
  ],
  blueGray: [
    "#f3f3fe", "#e3e7ed", "#c8ccd2", "#abafb8", "#9197a1",
    "#818895", "#79808f", "#666e7d", "#5a6271", "#4a5466",
  ],
  yellow: [
    "#fafaf0", "#f2f2e1", "#e4e3be", "#d6d597", "#c9c876",
    "#c1c062", "#bdbc56", "#a6a646", "#94943c", "#7f7f2e",
  ],
  brightGreen: [
    "#f7ffeb", "#eefed5", "#dbfea3", "#c6fe6e", "#b5fe47",
    "#aafe32", "#a3fe28", "#8fe21e", "#7dc815", "#69ad00",
  ],
  deepOrange: [
    "#fff9e0", "#fff1ca", "#ffe299", "#ffd162", "#ffc336",
    "#ffbb18", "#ffb602", "#e4a000", "#ca8e00", "#af7900",
  ],
  red: [
    "#ffe8e8", "#ffd1d1", "#f9a2a2", "#f46f6f", "#f04545",
    "#ed2a2a", "#ed191b", "#d3090f", "#bd000b", "#a50006",
  ],
};


export const theme = createTheme({
  palette: {
    primary: {
      main: customPalette.blue[4], // Primary color
    },
    secondary: {
      main: customPalette.green[5], // Secondary color
    },
    error: {
      main: customPalette.red[5], // Using bright red for errors
    },
    warning: {
      main: customPalette.yellow[5], // Yellow for warnings
    },
    info: {
      main: customPalette.blue[2], // Info color
    },
    success: {
      main: customPalette.green[4], // Success color
    },
    background: {
      default: customPalette.white[0], // Default background color
    },
  },
});