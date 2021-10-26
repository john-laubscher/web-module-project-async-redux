import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { setCurrentGeneration } from "../actions/index";

const options = ["Pokédex will max out at chosen generation", "generation_i", "generation_ii", "generation_iii", "generation_iv", "generation_v", "generation_vi", "generation_vii", "generation_viii"];

export default function GenerationDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setCurrentGeneration(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Device settings" sx={{ bgcolor: "background.paper" }}>
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Choose Pokédex Generation"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <button>
            <ListItemText primary="Choose Pokédex Generation:" secondary={options[selectedIndex]} />
          </button>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
