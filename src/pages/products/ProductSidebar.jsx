import React, { useEffect, useState, useMemo } from 'react';
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
import Home from '../../assets/images/sidebar/Home.svg';
import Orders from '../../assets/images/sidebar/Orders.svg';
import Products from '../../assets/images/sidebar/Products.svg';
import Customers from '../../assets/images/sidebar/Customers.svg';
import Content from '../../assets/images/sidebar/Content.svg';
import Analytics from '../../assets/images/sidebar/Analytics.svg';
import Marketing from '../../assets/images/sidebar/Marketing.svg';
import Discounts from '../../assets/images/sidebar/Discounts.svg';
import Settings from '../../assets/images/sidebar/Settings.svg';
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
import Table from '../../components/Table';

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

// const data = [];

// const data = [
//   {
//     product:
//       'https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077',
//     name: {
//       firstName: 'John',
//       lastName: 'Doe',
//     },
//     address: '261 Erdman Ford',
//     city: 'East Daphne',
//     state: 'Kentucky',
//   },
//   {
//     product: 'https://example.com/image2.jpg',
//     name: {
//       firstName: 'Jane',
//       lastName: 'Doe',
//     },
//     address: '769 Dominic Grove',
//     city: 'Columbus',
//     state: 'Ohio',
//   },
//   {
//     product: 'https://example.com/image2.jpg',
//     name: {
//       firstName: 'Joe',
//       lastName: 'Doe',
//     },
//     address: '566 Brakus Inlet',
//     city: 'South Linda',
//     state: 'West Virginia',
//   },
// ];

const menuOptions = [
  {
    icon: Home,
    title: 'Home',
    path: '/sellerHomePage',
  },
  {
    icon: Orders,
    title: 'Orders',
    path: '/orders',
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
  },
  {
    icon: Customers,
    title: 'Customers',
    path: '/customers',
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
  },
  {
    icon: Analytics,
    title: 'Analytics',
    path: '/analytics',
  },
  {
    icon: Marketing,
    title: 'Marketing',
    path: '/marketing',
  },
  {
    icon: Discounts,
    title: 'Discounts',
    path: '/discounts',
  },
];

const ProductSidebar = () => {
  const menu = useSelector((state) => state.menuToggle.menu);
  const classes = useStyles();
  const [openSubMenu, setOpenSubMenu] = useState(-1);
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);

  const [path, setPath] = useState();
  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4002/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const responseData = await response.json();
        console.log(responseData.data, 'responseData');
        setProductsData(responseData.data);
        // Handle responseData as needed
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'product', //access nested data with dot notation
        header: 'Product',
        size: 80,
        Cell: ({ row }) => (
          <img
            src={row.original.product}
            alt="Product"
            style={{ width: '30px', height: '30px', borderRadius: '50%' }}
          />
        ),
      },
      {
        accessorKey: 'title', //access nested data with dot notation
        header: 'Product Name',
        size: 80,
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 80,
      },
    ],
    []
  );

  const handleClick = (index) => {
    navigate('/products');
    setOpenSubMenu((prevIndex) => (prevIndex === index ? -1 : index));
  };

  useEffect(() => {
    if (!menu) {
      setOpenSubMenu(-1);
    }
  }, [menu]);

  const newProduct = () => {
    navigate('/newProduct');
  };

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
            ml: menu ? 40 : 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* <Outlet /> */}

          <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
            Products
          </Typography>

          {productsData?.length ? (
            <Box sx={{ width: '100%', mt: 2, ml: -1 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mr: 3,
                  mb: 2,
                }}
              >
                <Button
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: 'black',
                    },
                    textTransform: 'none',
                  }}
                  onClick={newProduct}
                >
                  Add product
                </Button>
              </Box>
              <Table columns={columns} data={productsData} />
            </Box>
          ) : (
            // <Box
            //   sx={{
            //     width: '98%',
            //     height: '300px',
            //     border: '1px solid #D3D3D3',
            //     borderRadius: '15px',
            //     mt: 3,
            //     display: 'flex',
            //     flexDirection: 'column',
            //     alignItems: 'flex-start',
            //   }}
            // >
            //   <Typography
            //     sx={{ fontWeight: 'bold', fontSize: '20px', mt: 8, ml: 5 }}
            //   >
            //     Add your products
            //   </Typography>
            //   <Typography sx={{ fontSize: '13px', ml: 5 }}>
            //     Start by stocking your store with products your customers will
            //     love
            //   </Typography>
            //   <Button
            //     size="small"
            //     sx={{
            //       backgroundColor: 'black',
            //       color: 'white',
            //       ml: 5,
            //       mt: 2,
            //       p: 1,
            //       borderRadius: '10px',
            //       '&:hover': {
            //         backgroundColor: 'black',
            //       },
            //     }}
            //     onClick={newProduct}
            //   >
            //     + Add product
            //   </Button>
            // </Box>
            ''
          )}

          {/* ----------------- */}
        </Box>
      </Box>
    </>
  );
};

export default ProductSidebar;
