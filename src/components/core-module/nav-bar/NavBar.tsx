import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Outlet } from 'react-router-dom';
import ListItemLink from './ListItemLink';
import { AppBarProps, ListLinkProps, SideBarItems } from '../../../utility/types/appbarType';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useSearch from '../../../utility/hooks/useSearch';
import FilterListIcon from '@mui/icons-material/FilterList';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `100%`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const sideBarItems: SideBarItems = [
  {
    id: 3,
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <InboxIcon />,
    link: "/dashboard",
    isSelected: true
  },
  {
    id: 4,
    segment: 'roles',
    title: 'Roles',
    icon: <InboxIcon />,
    link: "/roles",
    isSelected: false
  },
  {
    id: 7,
    segment: 'acl',
    title: 'ACL',
    icon: <InboxIcon />,
    link: "/acl",
    isSelected: false
  },
  {
    id: 10,
    segment: 'users',
    title: 'Users',
    icon: <InboxIcon />,
    link: "/users",
    isSelected: false
  },
];

/**
 * A responsive navigation bar that renders a drawer on mobile devices and a sidebar on desktop devices.
 * The drawer/side bar contains a list of links to other pages in the application.
 * The navigation bar also includes a button to toggle the drawer open and closed on mobile devices.
 * The navigation bar is also a container for the main content of the application, which is rendered as an outlet.
 * @returns {JSX.Element} The navigation bar component.
 */
const NavBar: React.FC = (): JSX.Element => {
  const { setSearchValue } = useSearch()
  const isMobileView = useMediaQuery('(max-width:600px)');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
 * Open the drawer by setting the `isOpen` state to true.
 */

  const openDrawer = (): void => setIsOpen(true);

  /**
   * Closes the drawer by setting the `isOpen` state to false.
   */
  const closeDrawer = (): void => setIsOpen(false);


  const ListItemLinkProps: ListLinkProps = {
    list: sideBarItems,
    isMobileView: isMobileView,
    closeDrawer: closeDrawer
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={isOpen} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isMobileView && <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={!isOpen ? openDrawer : closeDrawer}
            edge="start"
            sx={[
              {
                mr: 2,
              }
            ]}
          >
            {!isOpen ? <MenuIcon /> :
              <CloseIcon />}
          </IconButton>}
          <Typography variant="h6" noWrap component="div" data-testid="language-switcher">
            musafirbiz
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
            />
          </Search>
          <FilterListIcon />
          <Box sx={{ flexGrow: 1 }}>
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: (isMobileView && !isOpen) ? 0 : isMobileView?'100%':drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: (isMobileView && !isOpen) ? 0 : isMobileView?'100%':drawerWidth,
            boxSizing: 'border-box',
            top: "64px"
          },
        }}
        open={isOpen}
        variant={isMobileView ? "persistent" : "permanent"}
      >
        <ListItemLink {...ListItemLinkProps} />
      </Drawer>
      <Main open={!isOpen}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
export default NavBar;
