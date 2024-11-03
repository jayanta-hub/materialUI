import React, { useEffect } from 'react';
import i18n from 'i18next';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import Flag from "react-flagkit";

interface Setting {
    label: string;
    value: string;
    flagValue: string;
}

const settings: Setting[] = [
    {
        label: "English",
        value: "en",
        flagValue: "GB-ENG"
    },
    {
        label: "Hindi",
        value: "hn",
        flagValue: "IN"
    },
    {
        label: "Arabic",
        value: "ar",
        flagValue:"AE"
    },
];

const LanguageSwitcher: React.FC = () => {

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const [selectedCountry, setSelectedCountry] = React.useState<Setting|null>(
        null
    );
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleSelectCountry = (setting: Setting) => {
         setSelectedCountry(setting); // Update selected country
        handleCloseUserMenu(); // Close the settings menu after selection
        changeLanguage(setting.value); // Change the language in i18n
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    useEffect(() => {
        const storedLanguage =settings?.filter((setting) => setting?.value === i18n?.language)?.[0]; 
        setSelectedCountry(storedLanguage);
        changeLanguage(storedLanguage.value)
    }, []);

    return (
        <Box
            sx={{ display: "flex", alignItems: "center", float:'right' }}
        >
            <Tooltip title="Select Country">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Flag
                        country={selectedCountry?.flagValue}
                        style={{ marginRight: "8px" }}
                    />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings
                    .filter((setting) => setting != selectedCountry)
                    .map((setting) => (
                        <MenuItem
                            key={setting.label}
                            onClick={() => {
                                handleSelectCountry(setting);
                                handleCloseUserMenu();
                            }}
                        >
                            <Flag country={setting.flagValue} />
                            <Typography sx={{ textAlign: "center" }}>
                                {setting.label}
                            </Typography>
                        </MenuItem>
                    ))}
            </Menu>
        </Box>
    );
};

export default LanguageSwitcher;