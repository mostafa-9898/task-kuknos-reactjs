import { useState } from "react";
import { useDispatch } from "react-redux";
// mui
import {
    Avatar, Box, List, ListItem,
    ListItemAvatar, ListItemButton,
    ListItemText, Paper, TextField
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// redux
import { addItem } from "../redux/features/selectedSlice";
// utils
import { filterValues } from "../utils/filterValues";

const Posts = ({ postsData }) => {

    const [inputSearch, setInputSearch] = useState('')
    const dispatch = useDispatch()

    // search
    const searchPosts = postsData && filterValues(postsData, ['title', 'body'], inputSearch)

    return (
        <Paper sx={{ width: "437px" }}>

            {/* search input */}
            <Box sx={{ p: "24px" }}>
                <TextField variant="outlined"
                    label="Search ..." sx={{ width: "100%" }}
                    color="success"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
            </Box>

            {/* list of posts */}
            <List sx={{ width: '100%', height: "700px", overflow: "auto" }}>

                {searchPosts?.map(item => (
                    <ListItem key={item.id} sx={{ px: "32px" }}>

                        <ListItemButton onClick={() => dispatch(addItem(item.title))}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.title} secondary={item.body} />
                        </ListItemButton>

                    </ListItem>
                ))}

            </List>
        </Paper>
    );
}

export default Posts;