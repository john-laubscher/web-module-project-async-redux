import React, { useState } from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { setCurrentGeneration } from "../actions/index";

export const GenerationDropdown = (props) => {
  const { setCurrentGeneration } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const options = [
    "Pokédex will max out at chosen generation",
    { generation: "generation_i", displayText: "Generation I (Kanto)" },
    { generation: "generation_ii", displayText: "Generation II (Johto)" },
    { generation: "generation_iii", displayText: "Generation III (Hoenn)" },
    { generation: "generation_vi", displayText: "Generation IV (Sinnoh)" },
    { generation: "generation_v", displayText: "Generation V (Unova)" },
    { generation: "generation_vi", displayText: "Generation VI (Kalos)" },
    { generation: "generation_vii", displayText: "Generation VII (Alola)" },
    { generation: "generation_viii", displayText: "Generation VIII (Galar)" },
  ];

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setCurrentGeneration(options[index].generation);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Device settings">
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
            <ListItemText primary="Choose Pokédex Generation:" secondary={options[selectedIndex].displayText} />
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
          <MenuItem key={option.generation} disabled={index === 0} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
            {option.displayText}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setCurrentGeneration })(GenerationDropdown);
