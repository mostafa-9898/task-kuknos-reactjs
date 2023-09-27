import { useDispatch, useSelector } from "react-redux";
// mui
import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
// redux
import { removeItem, removeAllItems } from "../redux/features/selectedSlice";

const Selected = () => {

    const state = useSelector(state => state.userReducer.selected)
    const dispatch = useDispatch()

    return (
        <Paper sx={{
            width: "437px", height: "800px", overflow: "auto",
            pl: "20px", pt: "20px"
        }}>

            {/* clear all button */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h6">
                    Tap to delete
                </Typography>
                <Button variant="text"
                    onClick={() => dispatch(removeAllItems())}
                >
                    Clear
                </Button>
            </Box>

            {/* lists of names or titles */}
            <Stack direction="row" flexWrap='wrap' gap={1}>
                {state && state.map((item, index) => (
                    <Chip
                        color="success"
                        key={index}
                        label={item}
                        onClick={() => dispatch(removeItem(index))}
                    />
                ))}
            </Stack>

        </Paper>
    );
}

export default Selected;