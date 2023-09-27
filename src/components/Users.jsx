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

const Users = ({ usersData }) => {

    const [inputSearch, setInputSearch] = useState('')
    const dispatch = useDispatch()

    // search
    const searchUsers = usersData && filterValues(usersData, ['name', 'email'], inputSearch)

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

            {/* list of users */}
            <List sx={{ width: '100%', height: "700px", overflow: "auto" }}>

                {searchUsers?.map(item => (

                    <ListItem key={item.id} sx={{ px: "32px" }}>

                        <ListItemButton onClick={() => dispatch(addItem(item.name))}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} secondary={item.email} />
                        </ListItemButton>

                    </ListItem>
                ))}

            </List>
        </Paper>
    );
}

export default Users;