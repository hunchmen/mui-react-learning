import { Button, Stack } from "@mui/material";

export default function BasicButtons() {

    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained">Primary</Button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-light">Light</button>
            <button className="btn btn-dark">Dark</button>
            <Button disabled variant="contained" sx={{"&.Mui-disabled":{
                color: "yellowgreen",
                bgcolor: "chocolate",
            }}}>Link</Button>
        </Stack>
    )
}