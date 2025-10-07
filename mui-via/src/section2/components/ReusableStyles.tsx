import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

//dynamic styling
const DynamicStyledButton = (props) => {
    return (
        <Button sx={{color: props.color, bgcolor: props.color}} >
            {props.children}
        </Button>
    );
}

//static styling
const MyStyledButton = styled(Button)(( {theme}) => ({
    backgroundColor: theme.palette.success.main,
    color: "white", 
    borderRadius: 8, 
    padding: "8",
}));

export default function ReusableStyles() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained">Primary</Button>
            <MyStyledButton>My Styled Button</MyStyledButton>
            <DynamicStyledButton label="Hello" color="purple">My Dynamic Styled Button</DynamicStyledButton>
        </Stack>
    )
}