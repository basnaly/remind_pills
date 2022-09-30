
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
                    color: 'black',
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
    }
}