
export const themeDark = {
    palette: {
        primary: {
            main: '#ffff00' // yellow
        },
        secondary: {
            main: '#ffffff' // white
        },
        third: {
            main: '#696969' // dimgray
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: '#9996',
                },
                input: {
                    backgroundColor: 'transparent',
                    color: 'white',
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
                    backgroundColor: 'gray',
                    color: 'white',
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: 'white',
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'gray',
                    color: 'white',
                    border: '2px solid yellow',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'gray',
                    color: 'white',
                    border: '2px solid yellow',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: 'dimgray',
                    },
                }
            }
        },
    }
}