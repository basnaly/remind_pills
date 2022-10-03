
export const themeLight = {
    palette: {
        primary: {
            main: '#ff6600' // orange
        },
        secondary: {
            main: '#000000' // black
        },
        third: {
            main: '#d3d3d3' // lightgray
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    backgroundColor: 'white',
                    color: '#ff6600',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    color: 'black',     
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: '2px solid #ff6600',
                    borderRadius: '10px',
                }
            }
        },
    }
}