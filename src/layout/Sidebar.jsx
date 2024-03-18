import React, { useEffect, useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Box,
  Tooltip,
  Stack,
  Typography,
  Container,
  Checkbox,
} from '@mui/material';
import Home from '../assets/images/sidebar/Home.svg';
import Orders from '../assets/images/sidebar/Orders.svg';
import Products from '../assets/images/sidebar/Products.svg';
import Customers from '../assets/images/sidebar/Customers.svg';
import Content from '../assets/images/sidebar/Content.svg';
import Analytics from '../assets/images/sidebar/Analytics.svg';
import Marketing from '../assets/images/sidebar/Marketing.svg';
import Discounts from '../assets/images/sidebar/Discounts.svg';
import Settings from '../assets/images/sidebar/Settings.svg';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
// Define your theme
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // nested: {
  //   paddingLeft: theme.spacing(4),
  // },
}));

const menuOptions = [
  {
    icon: Home,
    title: 'Home',
    path: '/sellerHomePage',
    disabled: false,
  },
  {
    icon: Orders,
    title: 'Orders',
    path: '',
    disabled: true,
  },
  {
    icon: Products,
    title: 'Products',
    path: '/products',
    subTitle: [
      {
        title: 'Collections',
      },
      {
        title: 'Inventory',
      },
      {
        title: 'Purchase Orders',
      },
      {
        title: 'Transfers',
      },
    ],
    disabled: false,
  },
  {
    icon: Customers,
    title: 'Customers',
    path: '/customers',
    disabled: true,
  },
  {
    icon: Content,
    title: 'Content',
    path: '/content',
    subTitle: [
      {
        title: 'Collections',
      },
      {
        title: 'Inventory',
      },
    ],
    disabled: true,
  },
  {
    icon: Analytics,
    title: 'Analytics',
    path: '/analytics',
    disabled: true,
  },

  {
    icon: Marketing,
    title: 'Marketing',
    path: '/marketing',
    disabled: true,
  },
  {
    icon: Discounts,
    title: 'Discounts',
    path: '/discounts',
    disabled: true,
  },
];

const Sidebar = () => {
  const menu = useSelector((state) => state.menuToggle.menu);
  const classes = useStyles();
  const [openSubMenu, setOpenSubMenu] = useState(-1);
  const navigate = useNavigate();

  const [path, setPath] = useState();
  console.log(path, 'path');
  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  const handleClick = (index) => {
    navigate('/products');
    setOpenSubMenu((prevIndex) => (prevIndex === index ? -1 : index));
  };

  useEffect(() => {
    if (!menu) {
      setOpenSubMenu(-1);
    }
  }, [menu]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            position: 'fixed',
            backgroundColor: '#E7E8EF',
            width: menu ? '20%' : '6%',
            height: '89vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            overflowX: 'hidden',
            mt: 7,
            '&::-webkit-scrollbar': {
              width: '2px', // Adjust the width of the scrollbar for WebKit-based browsers
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ccc', // Customize the color of the scrollbar thumb for WebKit-based browsers
            },
          }}
        >
          <Box>
            <List>
              {menuOptions?.map((data, index) => {
                const isOpen = openSubMenu === index;
                return (
                  <React.Fragment key={index}>
                    <NavLink
                      exact
                      to={data.path}
                      activeClassName="active"
                      style={{ textDecoration: 'none' }}
                    >
                      <Stack
                        onClick={(e) => handleClick(index)}
                        direction="row"
                        spacing={1}
                        sx={{
                          justifyContent: menu ? 'start' : 'center',
                          m: menu ? '0px' : '20px',
                          p: menu ? '0px' : '5px',
                          pl: menu ? '30px !important' : '5px !important',
                          backgroundColor: path === data.path ? 'white' : '',
                          color:
                            path === data.path
                              ? theme.palette.primary.contrastText
                              : '',
                          borderRadius: path === data.path ? '12px' : '',
                          boxShadow:
                            path === data.path
                              ? '0px 2px 4px rgba(0, 0, 0, 0.2)'
                              : '',

                          '&:hover': {
                            backgroundColor: 'white',
                            color: theme.palette.primary.contrastText,
                            borderRadius: '12px',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                          },
                        }}
                      >
                        <Tooltip title={data.title} arrow placement="right">
                          <img
                            src={data.icon}
                            // style={{ marginTop: menu ? '0px' : '20px' }}
                            alt="item"
                          />
                        </Tooltip>
                        {menu ? (
                          <NavLink
                            exact
                            to={data.path}
                            activeClassName="active"
                            style={{ textDecoration: 'none' }}
                          >
                            <ListItem key={index} component={Link} to="">
                              <ListItemText
                                sx={{ color: 'black' }}
                                primary={data.title}
                              />
                            </ListItem>
                          </NavLink>
                        ) : (
                          ''
                        )}
                      </Stack>
                    </NavLink>
                    {isOpen &&
                      menu &&
                      data.subTitle?.map((subMenu, subIndex) => (
                        <List
                          sx={{
                            justifyContent: data ? 'start' : 'center',
                            pl: data ? 7.5 : 0,
                            mt: data ? -2 : 0,
                          }}
                          key={subIndex}
                          component="div"
                          disablePadding
                        >
                          <ListItem
                            className={classes.nested}
                            component={Link}
                            to="#"
                            sx={{ mt: 1 }}
                          >
                            <ListItemText
                              sx={{ color: '#858585' }}
                              primary={subMenu.title}
                            />
                          </ListItem>
                        </List>
                      ))}
                  </React.Fragment>
                );
              })}
            </List>
          </Box>
          <Box>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: menu ? 'start' : 'center',
                pl: menu ? 3 : 0,
                mt: menu ? 13 : 0,
                mb: menu ? 1 : 2,
              }}
            >
              <Tooltip title="Settings" arrow>
                <img
                  src={Settings}
                  style={{ marginTop: menu ? '0px' : '20px' }}
                  alt="item"
                />
              </Tooltip>

              {menu ? (
                <ListItem
                  component={Link}
                  to=""
                  // onClick={(e) => handleClick(index)}
                >
                  <ListItemText sx={{ color: 'black' }} primary="Settings" />
                </ListItem>
              ) : (
                ''
              )}
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            width: menu ? '80%' : '94%',
            height: 'auto',
            overflowY: 'auto',
            overflowX: 'hidden',
            mt: 10,
            ml: menu?40:25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* <Outlet /> */}

          <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
            Get ready to sell
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            Here’s a guide to get started. As your business grows, you’ll get
            fresh tips and insights here.
          </Typography>

          <Box
            sx={{
              // border: '1px solid #858585',
              width: '85%',
              mt: 4,
              // borderRadius: '10px',
            }}
          >
            <Accordion sx={{ border: '1px solid #D3D3D3' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      alignItems: 'flex-start',
                    }}
                  >
                    Setup guide
                  </Typography>
                  <Typography>
                    Use this personalized guide to get your store up and
                    running.
                  </Typography>
                  <Typography sx={{ pl: 1 }}>0 / 5 completed</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: 'flex' }}>
                  <Checkbox
                  // checked={checked}
                  // onChange={handleChange}
                  />
                  <Typography sx={{ pt: 1.2 }}>
                    Add your first product
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Checkbox
                    // checked={checked}
                    // onChange={handleChange}
                    />
                    <Typography sx={{ pt: 1.2 }}>
                      Customize your online store
                    </Typography>
                  </Box>
                  {/* <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      pl: 5.5,
                    }}
                  >
                    <Typography>
                      Choose a theme and add your logo, colors, and images to
                      reflect your brand.
                      <span>
                        <Link>Learn more</Link>
                      </span>
                    </Typography>
                    <Button
                      sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        mt: 1,
                        textTransform: 'lowercase',
                        p: 1,
                        borderRadius: '5px',
                        mb: 1,
                      }}
                    >
                      Customize theme
                    </Button>
                  </Box> */}
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Checkbox
                  // checked={checked}
                  // onChange={handleChange}
                  />
                  <Typography sx={{ pt: 1.2 }}>Name your store</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Checkbox
                  // checked={checked}
                  // onChange={handleChange}
                  />
                  <Typography sx={{ pt: 1.2 }}>
                    Set your shipping rates
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Checkbox
                  // checked={checked}
                  // onChange={handleChange}
                  />
                  <Typography sx={{ pt: 1.2 }}>Place a test order</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
