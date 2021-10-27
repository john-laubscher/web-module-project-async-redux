import React, { useState } from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { setCurrentGeneration, getPokemon } from "../actions/index";
import { generationInfo } from "../utils";

export const GenerationDropdown = (props) => {
  const { setCurrentGeneration, getPokemon, currentGeneration } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const options = [
    "Pokédex will max out at chosen generation",
    "generation_i",
    "generation_ii",
    "generation_iii",
    "generation_iv",
    "generation_v",
    "generation_vi",
    "generation_vii",
    "generation_viii",
  ];

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setCurrentGeneration(options[index]);
    //  generationInfo[currentGeneration].endingId;
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
};

const mapStateToProps = (state) => {
  return { currentGeneration: state.currentGeneration };
};

export default connect(mapStateToProps, { setCurrentGeneration, getPokemon })(GenerationDropdown);
