import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Tooltip,
  Stack,
  Typography,
  Checkbox,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
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
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextFieldMui } from '../../components/TextField';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDropzone } from 'react-dropzone';
import ImageUpload from '../../components/ImageUpload';
import { useGetApi, usePostApi } from '../../customHooks/useApi';
import useSnackbarHook from '../../customHooks/useSnackbarHook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const productType = [
  {
    id: 1,
    title: 'Active',
    bool: true,
  },
  {
    id: 2,
    title: 'Draft',
    bool: false,
  },
];

const discountType = [
  {
    id: 1,
    title: '1%',
    value: 1,
  },
  {
    id: 2,
    title: '2%',
    value: 2,
  },
  {
    id: 3,
    title: '3%',
    value: 3,
  },
  {
    id: 4,
    title: '5%',
    value: 5,
  },
  {
    id: 5,
    title: '10%',
    value: 10,
  },
  {
    id: 6,
    title: '15%',
    value: 15,
  },
];

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

const NewProductSidebar = () => {
  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    status: yup.string().required('Status is required'),
    category_id: yup.string().required('Product category is required'),
    price: yup.string().required('Price is required'),
    // margin: yup.string().required('Margin is required'),
    // cost_per_item: yup.string().required('Cost per item is required'),
    cost_per_item: yup
      .number()
      .test({
        name: 'is-positive',
        message: 'should not be negative',
        test: function (value) {
          return value > 0;
        },
      })
      .test({
        name: 'is-less-than-price',
        message: 'Cost item must be less than the price',
        test: function (value) {
          const priceFieldValue = getValues('price');
          return value < priceFieldValue;
        },
      })
      .transform((value, originalValue) =>
        originalValue === '' ? undefined : value
      )
      .required('Cost per item is required'),

    discount: yup.string().required('Discount is required'),
    // profit: yup.string().required('Profit is required'),
    qty: yup.string().required('Quantity is required'),
    // editor: yup.string().required('Description is required'),
    // price_after_discount: yup
    //   .string()
    //   .required('Price after discount is required'),
    // Add other fields and validations here
  });

  const menu = useSelector((state) => state.menuToggle.menu);
  const classes = useStyles();
  const [openSubMenu, setOpenSubMenu] = useState(-1);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [editorData, setEditorData] = useState('');
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState();
  const [productCategory, setProductCategory] = useState([]);
  const [path, setPath] = useState();

  const { showSuccessMsg, showErrorMsg } = useSnackbarHook();

  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleClick = (index) => {
    navigate('/products');
    setOpenSubMenu((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!menu) {
      setOpenSubMenu(-1);
    }
  }, [menu]);

  const newProduct = () => {
    navigate('/newProduct');
  };

  const handleBackRoute = () => {
    navigate('/products');
  };

  // const handleSave = () => {
  //   navigate('/products');
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:4002/products/category',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const responseData = await response.json();
        setProductCategory(responseData);
        // Handle responseData as needed
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = () => {
    setImagePreview(null);
    setImage(null);
  };

  // const { post } = usePostApi('http://localhost:4002/products');

  const onSubmit = async (data) => {
    const formData = new FormData();
    // let imageData = document.querySelector('#image-upload');
    console.log(image, 'image');
    formData.append('img', image);
    formData.append('title', data.title);
    formData.append('price', data.price);
    formData.append('profit', data.profit);
    formData.append('margin', data.margin);
    formData.append('category_id', data.category_id);
    formData.append('status', data.status);
    formData.append('cost_per_item', data.cost_per_item);
    formData.append('discount', data.discount);
    formData.append('price_after_discount', data.price_after_discount);
    formData.append('qty', data.qty);
    formData.append('description', editorData);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    fetch('http://localhost:4002/products', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'datalog');
        if (data.message) {
          showSuccessMsg('Product added Successfully !');
          navigate('/products');
        } else {
          showErrorMsg('Unable to add product');
        }
      })
      .catch((error) => {
        showErrorMsg('Unable to add product');
      });
  };

  const handleDiscount = (e) => {
    const priceValue = getValues('price');
    const discountValue = getValues('discount');
    const costPerItemValue = getValues('cost_per_item');
    const disValue = (priceValue * discountValue) / 100;
    const priceAfterDiscount = priceValue - disValue;
    const profitValue = priceAfterDiscount - costPerItemValue;
    const marginValue = ((profitValue / priceAfterDiscount) * 100).toFixed(2);

    setValue('price_after_discount', priceAfterDiscount);
    setValue('profit', profitValue);
    setValue('margin', marginValue);
    console.log(priceAfterDiscount);
    console.log(profitValue);
    console.log(marginValue);
    // console.log(`Value of :`, value);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            backgroundColor: '#E7E8EF',
            width: menu ? '21%' : '6%',
            height: '244vh',
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
                        spacing={-0.5}
                        sx={{
                          justifyContent: menu ? 'start' : 'center',
                          alignItems: 'center',
                          width: menu ? '230px' : '38px',
                          height: menu ? '32px' : '30px',
                          m: menu ? '6px' : '20px',
                          ml: menu ? '12px' : '18px',
                          p: menu ? '20px' : '5px',
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
                            style={{
                              height: menu ? '20px' : '20px',
                            }}
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
                              {data.subTitle?.length ? (
                                <KeyboardArrowDownIcon />
                              ) : (
                                ''
                              )}
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
            ml: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* <Outlet /> */}

          <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
            <Button
              onClick={handleBackRoute}
              sx={{ backgroundColor: 'white', color: 'black' }}
              endIcon={<ArrowBackIcon />}
            ></Button>
            Add product
          </Typography>
          {/* <form> */}
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/formData">
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    border: '1px solid #D3D3D3',
                    borderRadius: '15px',
                    ml: 4,
                    mt: 2,
                  }}
                >
                  {/* <TextFieldMui
                    sx={{ width: '91%', color: 'black', mt: 4 }}
                    register={register}
                    label="Title"
                    variant="outlined"
                    name="title"
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : ''}
                  /> */}
                  <TextField
                    {...register('title')}
                    label="Title"
                    variant="outlined"
                    sx={{
                      width: '91%',
                      color: 'black',
                      mt: 4,
                      minHeight: 20,
                    }}
                    error={Boolean(errors.title)}
                    helperText={errors.title ? errors.title.message : ''}
                  />

                  <Box
                    sx={{
                      // width: '514px',
                      width: menu ? '514px' : '611px',
                      ml: 3.5,
                      mt: 4,
                      mb: 4,
                    }}
                  >
                    <CKEditor
                      editor={ClassicEditor}
                      data={editorData}
                      onChange={(event, editor) => {
                        const data = editor.getData({
                          ckeditor: true,
                          html: true,
                          filter: 'strict',
                        });

                        setEditorData(data);
                      }}
                      config={{
                        placeholder: 'Enter your description here...',
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    border: '1px solid #D3D3D3',
                    borderRadius: '15px',
                    ml: 4,
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography sx={{ mt: 2, ml: 4, fontWeight: 'bold' }}>
                      Media
                    </Typography>

                    <Box sx={{ mt: 2, ml: 4, mb: 3, width: '90%' }}>
                      {/* <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                    <aside>
                      <h4>Files</h4>
                      <ul>{files}</ul>
                    </aside> */}
                      {/* <ImageUpload /> */}
                      <div>
                        <div
                          onDragEnter={handleDragEnter}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          style={{
                            border: '2px dashed #ccc',

                            borderRadius: '5px',
                            padding: '20px',
                            textAlign: 'center',
                            backgroundColor: dragging ? '#f0f0f0' : 'inherit',
                          }}
                        >
                          {image ? (
                            <div>
                              <img
                                src={imagePreview}
                                alt="Preview"
                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                              />
                              <button onClick={handleImageRemove}>
                                Remove
                              </button>
                            </div>
                          ) : (
                            <div>
                              {/* <span>Drag & drop or</span> */}
                              <br />

                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                                id="image-upload"
                              />

                              <Button
                                sx={{
                                  color: 'black',
                                  borderRadius: '10px',
                                  borderBottom: '2px solid #ccc',
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                  textTransform: 'none',
                                  mt: -4,
                                }}
                              >
                                <label htmlFor="image-upload">Upload new</label>
                              </Button>
                              <p style={{ marginBottom: '5px' }}>
                                Accepts images
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    border: '1px solid #D3D3D3',
                    borderRadius: '15px',
                    ml: 4,
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography sx={{ mt: 2, ml: 4, fontWeight: 'bold' }}>
                      Pricing
                    </Typography>
                  </Box>

                  <Grid container spacing={-6} sx={{ ml: 3, mb: 3 }}>
                    <Grid item xs={4}>
                      {/* <TextFieldMui
                        sx={{ width: '90%', color: 'black', mt: 2 }}
                        register={register}
                        label="Price"
                        variant="outlined"
                        name="price"
                        type="number"
                        error={!!errors.price}
                        helperText={errors.price ? errors.price.message : ''}
                      /> */}
                      <TextField
                        {...register('price')}
                        label="Price"
                        variant="outlined"
                        // sx={{ width: '160px', color: 'black', mt: 2 }}
                        sx={{
                          width: menu ? '160px' : '191px',
                          color: 'black',
                          mt: 2,
                        }}
                        type="number"
                        error={Boolean(errors.price)}
                        helperText={errors.price ? errors.price.message : ''}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      {/* <TextFieldMui
                        sx={{ width: '90%', color: 'black', mt: 2 }}
                        register={register}
                        label="Cost per item"
                        variant="outlined"
                        name="cost_per_item"
                        type="number"
                        error={!!errors.cost_per_item}
                        helperText={
                          errors.cost_per_item
                            ? errors.cost_per_item.message
                            : ''
                        }
                      /> */}
                      <TextField
                        {...register('cost_per_item')}
                        label="Cost per item"
                        variant="outlined"
                        sx={{
                          width: menu ? '160px' : '191px',
                          color: 'black',
                          mt: 2,
                        }}
                        type="number"
                        error={Boolean(errors.cost_per_item)}
                        helperText={
                          errors.cost_per_item
                            ? errors.cost_per_item.message
                            : ''
                        }
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <FormControl
                        fullWidth
                        error={!!errors.discount}
                        sx={{ ml: 1 }}
                      >
                        <InputLabel sx={{ mt: 2 }}>Apply Discount</InputLabel>
                        <Controller
                          name="discount"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              label="Apply Discount"
                              value={field.value}
                              onChange={(e) => {
                                field.onChange(e);
                                handleDiscount(e);
                              }}
                              sx={{
                                width: menu ? '160px' : '191px',
                                color: 'black',
                                mt: 2,
                              }}
                            >
                              {discountType.map((item, index) => {
                                return (
                                  <MenuItem key={index} value={item.value}>
                                    {item.title}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          )}
                        />
                        {errors.discount && (
                          <FormHelperText>
                            {errors.discount?.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', mt: 1 }}>
                        <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        />
                        <Typography sx={{ pt: 1.2, fontSize: '15px' }}>
                          Charge tax on this product
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={4}>
                      {/* <TextFieldMui
                        sx={{ width: '90%', color: 'black', mt: 2 }}
                        register={register}
                        label="Price After Discount"
                        variant="outlined"
                        name="price_after_discount"
                        type="number"
                        error={!!errors.price_after_discount}
                        helperText={
                          errors.price_after_discount
                            ? errors.price_after_discount.message
                            : ''
                        }
                      /> */}

                      <TextField
                        {...register('price_after_discount')}
                        label="Price after discount"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        disabled={true}
                        sx={{
                          width: menu ? '160px' : '191px',
                          color: 'black',
                          mt: 2,
                        }}
                        type="number"
                        error={Boolean(errors.price_after_discount)}
                        helperText={
                          errors.price_after_discount
                            ? errors.price_after_discount.message
                            : ''
                        }
                      />
                    </Grid>
                    <Grid item xs={4}>
                      {/* <TextFieldMui
                        sx={{ width: '90%', color: 'black', mt: 2 }}
                        register={register}
                        label="Profit"
                        variant="outlined"
                        name="profit"
                        type="number"
                        error={!!errors.profit}
                        helperText={errors.profit ? errors.profit.message : ''}
                      /> */}

                      <TextField
                        {...register('profit')}
                        label="Profit"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        disabled={true}
                        sx={{
                          width: menu ? '160px' : '191px',
                          color: 'black',
                          mt: 2,
                        }}
                        type="number"
                        error={Boolean(errors.profit)}
                        helperText={errors.profit ? errors.profit.message : ''}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      {/* <TextFieldMui
                        sx={{ width: '90%', color: 'black', mt: 2 }}
                        register={register}
                        label="Margin"
                        variant="outlined"
                        name="margin"
                        type="number"
                        error={!!errors.margin}
                        helperText={errors.margin ? errors.margin.message : ''}
                      /> */}
                      <TextField
                        {...register('margin')}
                        label="Margin"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        disabled={true}
                        sx={{
                          width: menu ? '160px' : '191px',
                          color: 'black',
                          mt: 2,
                        }}
                        type="number"
                        error={Boolean(errors.margin)}
                        helperText={errors.margin ? errors.margin.message : ''}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    border: '1px solid #D3D3D3',
                    borderRadius: '15px',
                    ml: 4,
                    mt: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography sx={{ mt: 2, ml: 4, fontWeight: 'bold' }}>
                      Inventory
                    </Typography>
                    {/* <TextFieldMui
                      sx={{
                        width: '90%',
                        color: 'black',
                        mt: 2,
                        ml: 3.5,
                        mb: 3,
                      }}
                      register={register}
                      label="Quantity"
                      variant="outlined"
                      name="qty"
                      type="number"
                      error={!!errors.qty}
                      helperText={errors.qty ? errors.qty.message : ''}
                    /> */}
                    <TextField
                      {...register('qty')}
                      label="Qunatity"
                      variant="outlined"
                      sx={{
                        // width: '90.6%',
                        width: menu ? '90.6%' : '91.5%',
                        color: 'black',
                        mt: 2,
                        ml: 3.5,
                        mb: 3,
                      }}
                      type="number"
                      error={Boolean(errors.qty)}
                      helperText={errors.qty ? errors.qty.message : ''}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: '100%',
                    height: 'auto',
                    border: '1px solid #D3D3D3',
                    borderRadius: '15px',
                    ml: 4,
                    mt: 2,
                    mb: 8,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography sx={{ mt: 2, ml: 4, fontWeight: 'bold' }}>
                      Shipping
                    </Typography>
                  </Box>

                  <Grid item xs={12} sx={{ pl: 2.5 }}>
                    <Box sx={{ display: 'flex', mt: 1 }}>
                      <Checkbox
                      // checked={checked}
                      // onChange={handleChange}
                      />
                      <Typography sx={{ pt: 1.2, fontSize: '15px' }}>
                        This is a physical product
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        mt: 2,
                        fontSize: '15px',
                        mb: 3,
                        textAlign: 'left',
                        ml: 2,
                        mr: 1.5,
                      }}
                    >
                      Customers won’t enter shipping details at checkout. Learn
                      how to set up your store for{' '}
                      <span>
                        <Link>digital products or services.</Link>
                      </span>
                    </Typography>
                  </Grid>
                </Box>

                <Box></Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    width: '82%',
                    height: 'auto',
                    border: '1px solid #D3D3D3',
                    borderRadius: '15px',
                    ml: 4,
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    {/* <Box sx={{ mt: 1, ml: 2, pt: 3 }}> */}
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{ mt: 1, ml: 2, pt: 3, mb: 4 }}
                    >
                      {/* <FormControl fullWidth error={!!errors.status}>
                        <InputLabel sx={{ mt: -0.5 }}>Status</InputLabel>
                        <Controller
                          name="status"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              label="Status"
                              value={field.value}
                              onChange={field.onChange}
                              sx={{
                                width: '300px',

                                borderRadius: '20px',
                                height: '50px',
                              }}
                            >
                              {productType?.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                  {item.title}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                        {errors.status && (
                          <FormHelperText>
                            {errors.status?.message}
                          </FormHelperText>
                        )}
                      </FormControl> */}

                      <FormControl fullWidth variant="outlined">
                        <InputLabel id="status-label" sx={{ mt: -0.5 }}>
                          Status
                        </InputLabel>
                        <Select
                          labelId="status-label"
                          {...register('status')}
                          label="Status"
                          error={Boolean(errors.status)}
                          sx={{
                            // width: '300px',
                            width: menu ? '298px' : '356px',
                            borderRadius: '20px',
                            height: '50px',
                          }}
                        >
                          {/* <MenuItem value="active">Active</MenuItem>
                          <MenuItem value="draft">Draft</MenuItem> */}
                          {productType?.map((item) => (
                            <MenuItem key={item.id} value={item.bool}>
                              {item.title}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.status && (
                          <Typography color="error" variant="caption">
                            {errors.status.message}
                          </Typography>
                        )}
                      </FormControl>

                      {/* <FormControl fullWidth error={!!errors.category_id}>
                        <InputLabel sx={{ mt: -0.5 }}>
                          Product category
                        </InputLabel>
                        <Controller
                          name="category_id"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <Select
                              {...field}
                              label="Product Category"
                              value={field.value}
                              onChange={field.onChange}
                              sx={{
                                width: '300px',

                                borderRadius: '20px',
                                height: '50px',
                              }}
                            >
                              {productCategory.data?.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                  {item.name}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                        {errors.category_id && (
                          <FormHelperText>
                            {errors.category_id?.message}
                          </FormHelperText>
                        )}
                      </FormControl> */}

                      <FormControl fullWidth variant="outlined">
                        <InputLabel id="status-label" sx={{ mt: -0.5 }}>
                          Product Category
                        </InputLabel>
                        <Select
                          labelId="status-label"
                          {...register('category_id')}
                          label="Status"
                          error={Boolean(errors.category_id)}
                          sx={{
                            // width: '300px',
                            width: menu ? '298px' : '356px',
                            borderRadius: '20px',
                            height: '50px',
                          }}
                        >
                          {/* <MenuItem value="active">Active</MenuItem>
                          <MenuItem value="draft">Draft</MenuItem> */}
                          {productCategory.data?.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.status && (
                          <Typography color="error" variant="caption">
                            {errors.category_id.message}
                          </Typography>
                        )}
                      </FormControl>
                      {/* </Box> */}
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mr: 5,
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
                    // onClick={handleSave}
                    type="submit"
                  >
                    save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>

          {/* </form> */}
          {/* ----------------- */}
        </Box>
      </Box>
    </>
  );
};

export default NewProductSidebar;
