import React, { useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ListLinkProps } from "../../../utility/types/appbarType";

const ListItemLink: React.FC<ListLinkProps> = (props): JSX.Element => {
    const { list, isMobileView, closeDrawer } = props
    const [renderItems, setRenderItems] = useState(list || []);
    const navigation = useNavigate();

    /**
     * Handles the selection of an item in the list.
     * @param {number} selectedItemId - the id of the item to be selected
     */
    const handleSelect = (selectedItemId: number): void => {
        setRenderItems(
            renderItems.map((item) => ({
                ...item,
                isSelected: item.id === selectedItemId,
            }))
        );
        if (isMobileView) {
            closeDrawer();
        }
    };

    return (
        <List >
            {renderItems?.map((item) => {
                return (
                    <React.Fragment key={item?.id}>
                        <ListItemButton onClick={() => {
                            handleSelect(item?.id)
                            navigation(item?.link);
                        }} selected={item?.isSelected}>
                            <ListItemIcon>{item?.icon}</ListItemIcon>
                            <ListItemText primary={item?.title} />
                        </ListItemButton>
                    </React.Fragment>
                );
            })}
        </List>
    );
};
export default ListItemLink