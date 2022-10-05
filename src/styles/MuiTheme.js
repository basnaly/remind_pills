
export const myTheme = {
    
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontFamily: "'Acme', sans-serif",
                    fontSize: '16px',
        
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    fontFamily: "'Acme', sans-serif",
                    fontSize: '14px',
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: "'Acme', sans-serif",
                    fontSize: '14px',
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    fontFamily: "'Acme', sans-serif",
                    fontSize: '14px',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        textDecoration: 'underline',
                    },
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: "'Acme', sans-serif",
                    fontSize: '18px',
                    textTransform: 'none',              
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    justifyContent: "space-between",
                },
                
            }
        },
    }
}