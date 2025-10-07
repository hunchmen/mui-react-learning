import { createTheme } from "@mui/material";

// Module augmentation to add blueText to Typography variants
declare module "@mui/material/styles" {
    interface TypographyVariants {
        blueTextClassName: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        blueTextClassName?: React.CSSProperties;
    }
}

// Optionally add to Typography's prop types for usage in <Typography variant="blueText" />
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        blueText: true;
    }
}

const theme = createTheme({
    typography: {
        blueTextClassName: {
            color: "blue",
            backgroundColor: "red",
            borderRadius: 50,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    color: "green",
                    backgroundColor: "lightgrey",
                    borderRadius: 8,
                },
            },
        },
    },
});

export default theme;