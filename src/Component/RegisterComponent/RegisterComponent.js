import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Autocomplete from "@mui/material/Autocomplete";
import Countries from "../CountryData/CountryComponent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import FormLabel from "@mui/material/FormLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Avatar from "@mui/material/Avatar";
import FormHelperText from "@mui/material/FormHelperText";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Alert from "@mui/material/Alert";
import Validator from "validator";

import { signUp } from "../../APIs/api";
import "./RegisterComponent.css";
import Diamond from "../../assets/Images/DiamondForTable.png";
import Signup from "../../assets/Images/signup.png";
import SignupMark from "../../assets/Images/signup-mark.png";
import AvatarImage from '../../assets/Images/avatarImage.png';
import AdvertiseImage from '../../assets/Images/advertiseImage.png';

function RegisterComponent() {
  const navigate = useNavigate();
  const [isShowBuyerForm, setIsShowBuyerForm] = useState(false);
  const [isShowSellerForm, setIsShowSellerForm] = useState(false);
  const [isShowPlan, setIsShowPlan] = useState(false);
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [emailAddress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [country, setCountry] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [businessWebsite, setBusinessWebsite] = useState("");
  const [isSave, setIsSave] = useState(false);
  const [image, setImage] = useState(AvatarImage); // Default image
  const [imageFile, setImageFile] = useState(undefined); // Default image
  const [companyLogoFile, setCompanyLogoFile] = useState(undefined);
  const [companyLogoImage, setCompanyLogoImage] = useState(AdvertiseImage); // Default image
  const [isCompanyLogoImage, setIsCompanyLogoImage] = useState(false); // Default image
  const [subLevel, setSubLevel] = useState("");

  const [validationState, setValidationState] = useState({
    showAvatarSet: false,
    showBusinessLogoSet: false,
    showSubLevelSet: false,
    errorFullName: false,
    errorFullNameText: "",
    errorBusinessName: false,
    errorBusinessNameText: "",
    errorEmailAdress: false,
    errorEmailAdressText: "",
    errorPassword: false,
    errorPasswordText: "",
    errorPassword2: false,
    errorPassword2Text: "",
    errorPhoneNumber: false,
    errorPhoneNumberText: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const fileAvatarInputRef = useRef(null);
  const fileComapnyLogoInputRef = useRef(null);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const errors = useSelector((state) => state.user.errors);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const show = (title) => {
    if (title === "SIGNUP AS BUYER") {
      setIsShowBuyerForm(true);
      setIsShowSellerForm(false);
      setIsShowPlan(false);
    } else {
      setIsShowBuyerForm(false);
      setIsShowSellerForm(true);
      setIsShowPlan(false);
    }
  };

  const validation = async () => {
    const newState = { ...validationState };

    if (!imageFile) {
      newState.showAvatarSet = true;
    }

    if (!companyLogoFile && isShowSellerForm) {
      newState.showBusinessLogoSet = true;
    }

    if (!subLevel && isShowSellerForm) {
      newState.showSubLevelSet = true;
    }

    if (Validator.isEmpty(fullName)) {
      newState.errorFullName = true;
      newState.errorFullNameText = "This field is required";
    } else {
      newState.errorFullName = false;
      newState.errorFullNameText = "";
    }

    if (isShowSellerForm) {
      if (Validator.isEmpty(businessName)) {
        newState.errorBusinessName = true;
        newState.errorBusinessNameText = "This field is required";
      } else {
        newState.errorBusinessName = false;
        newState.errorBusinessNameText = "";
      }
    }

    if (Validator.isEmpty(emailAddress)) {
      newState.errorEmailAdress = true;
      newState.errorEmailAdressText = "This field is required";
    } else if (!Validator.isEmail(emailAddress)) {
      newState.errorEmailAdress = true;
      newState.errorEmailAdressText = "This field is email format";
    } else {
      newState.errorEmailAdress = false;
      newState.errorEmailAdressText = "";
    }

    if (Validator.isEmpty(password)) {
      newState.errorPassword = true;
      newState.errorPasswordText = "This field is required";
    } else if (password.length < 8) {
      newState.errorPassword = true;
      newState.errorPasswordText = "This field is at least 8 characters";
    } else {
      newState.errorPassword = false;
      newState.errorPasswordText = "";
    }

    if (Validator.isEmpty(password2)) {
      newState.errorPassword2 = true;
      newState.errorPassword2Text = "This field is required";
    } else if (!Validator.equals(password2, password)) {
      newState.errorPassword2 = true;
      newState.errorPassword2Text = "Password is not matched";
    } else {
      newState.errorPassword2 = false;
      newState.errorPassword2Text = "";
    }

    if (isShowSellerForm) {
      if (Validator.isEmpty(phoneNumber)) {
        newState.errorPhoneNumber = true;
        newState.errorPhoneNumberText = "This field is required";
      } else if (!Validator.isNumeric(phoneNumber)) {
        newState.errorPhoneNumber = true;
        newState.errorPhoneNumberText = "This field consists of only numbers";
      } else {
        newState.errorPhoneNumber = false;
        newState.errorPhoneNumberText = "";
      }
    }

    setValidationState((prevState) => ({
      ...prevState,
      ...newState,
    }));
    console.log(validationState);

    return !(
      newState.showAvatarSet ||
      newState.showBusinessLogoSet ||
      newState.showSubLevelSet ||
      newState.errorFullName ||
      newState.errorBusinessName ||
      newState.errorEmailAdress ||
      newState.errorPassword ||
      newState.errorPassword2 ||
      newState.errorPhoneNumber
    );
  };

  const saveHandle = async () => {
    if (!(await validation())) {
      return;
    }

    setIsSave(true);

    const formData = new FormData();

    formData.append("username", fullName || "");
    formData.append("email", emailAddress || "");
    formData.append("companyName", businessName || "");
    formData.append("password", password || "");
    formData.append("country", country ? country.label : "");
    formData.append("telephone", phoneNumber || "");
    formData.append("contactMethod", preferredContact || "");
    formData.append("isSeller", isShowSellerForm ? true : false);
    formData.append("isBuyer", isShowBuyerForm ? true : false);
    formData.append("companyWebsite", businessWebsite || "");
    formData.append("level", isShowBuyerForm ? "" : subLevel);

    if (imageFile) {
      formData.append("profileImage", imageFile);
    }
    if (companyLogoFile) {
      formData.append("companyLogo", companyLogoFile);
    }

    await signUp(formData, dispatch)
      .then((response) => {
        message.success("User created successfully!!!");
        navigate("/login");
      })
      .catch((e) => {
        const err = e.response.data;

        setValidationState((prevState) => ({
          ...prevState,
          errorEmailAdress: true,
          errorEmailAdressText: err.errorEmailAdressText,
        }));

        console.log(validationState);
      });
    setIsSave(false);
  };

  const handleSubLevel = (e) => {
    setSubLevel(e.target.value);
    const newState = { ...validationState };
    newState.showSubLevelSet = false;
    setValidationState(newState);
  };

  const handleAvatarClick = () => {
    fileAvatarInputRef.current.click(); // Trigger the hidden file input
  };

  const handleCompanyLogoClick = () => {
    fileComapnyLogoInputRef.current.click(); // Trigger the hidden file input
  };

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  const handleAvatarFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const newState = { ...validationState };
      newState.showAvatarSet = false;
      setValidationState(newState);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the uploaded image as the avatar source
      };
      reader.readAsDataURL(file); // Read the file as a data URL
      const buffer = await file.arrayBuffer();
      console.log("buffer", buffer);
      file._buf = buffer;
    }
  };

  const handleComapnyLogoFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setCompanyLogoFile(file);
      const newState = { ...validationState };
      newState.showBusinessLogoSet = false;
      setValidationState(newState);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyLogoImage(reader.result); // Set the uploaded image as the avatar source
        setIsCompanyLogoImage(true);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
      const buffer = await file.arrayBuffer();
      file._buf = buffer;
    }
  };

  const handleBack = () => {
    setIsShowBuyerForm(false);
    setIsShowSellerForm(false);
    setIsShowPlan(false);
  };

  const handlePlan = () => {
    setIsShowPlan(true);
  };

  const countryHandle = (event, newValue) => {
    setCountry(newValue);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const styledModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "Diamond Uploads",
      "20 stones",
      "100 stones",
      "500 stones",
      "Unlimited"
    ),
    createData(
      "Matching Pairs Listings",
      "View-only",
      "5 pairs",
      "20 pairs",
      "Unlimited"
    ),
    createData(
      "Colored Diamonds Listings",
      "3 stones",
      "10 stones",
      "30 stones",
      "Unlimited"
    ),
    createData(
      "Jewelry & Watches Listings",
      "View-only",
      "5 pieces",
      "20 pieces",
      "Unlimited"
    ),
    createData(
      "Customer Support",
      "Basic Email",
      "Standard Email",
      "Premium Email",
      "VIP Support"
    ),
    createData(
      "Customer Support",
      "Basic Email",
      "Standard Email",
      "Premium Email",
      "VIP Support"
    ),
  ];

  const CountrySelection = () => {
    return (
      <Autocomplete
        id="country-select-demo"
        className="col-lg-5 p-0 my-3"
        options={Countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        onChange={countryHandle}
        value={country}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...optionProps}
            >
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            variant="standard"
            color="warning"
            slotProps={{
              htmlInput: {
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              },
            }}
          />
        )}
      />
    );
  };

  const textFieldStyles = {
    '& .MuiInputBase-root': {
      color: 'black', // Default text color
      '&.Mui-focused': {
        color: 'yellow', // Color when focused
      },
      '&:hover': {
        color: 'yellow', // Color on hover
      },
    },
    '& .MuiFormLabel-root': {
      color: 'black', // Default label color
      '&.Mui-focused': {
        color: 'yellow', // Label color when focused
      },
      '&:hover': {
        color: 'yellow', // Label color on hover
      },
    },
  };

  const ContactMethod = () => {
    return (
      <FormControl className="my-3 col-12">
        <FormLabel id="demo-controlled-radio-buttons-group">
          Preferred Contact Methods (optional)
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={preferredContact}
          onChange={(e) => setPreferredContact(e.target.value)}
          sx={{
            '& .MuiFormControlLabel-root': {
              color: 'black', // Default label color
              '&:hover': {
                color: '#DAA14C', // Label color on hover
              },
            },
            '& .MuiRadio-root': {
              color: 'black', // Default radio color
              '&.Mui-checked': {
                color: '#DAA14C', // Checked radio color
              },
              '&:hover': {
                color: '#DAA14C', // Radio color on hover
              },
            },
            '& .MuiFormControlLabel-root.Mui-selected': {
              color: '#DAA14C', // Selected label color
            },
          }}
        >
          <FormControlLabel value="" control={<Radio />} label="None" />
          <FormControlLabel value="Email" control={<Radio />} label="Email" />
          <FormControlLabel value="Phone" control={<Radio />} label="Phone" />
          <FormControlLabel
            value="WhatsApp"
            control={<Radio />}
            label="WhatsApp"
          />
        </RadioGroup>
      </FormControl>
    );
  };

  const SubmitButton = () => {
    return (
      <LoadingButton
        className="col-12 my-4 p-0 submit-btn"
        loadingPosition="start"
        variant="outlined"
        loading={isSave}
        onClick={saveHandle}
      >
        {isSave
          ? "saving"
          : isShowBuyerForm
          ? "Create Free Buyer Account"
          : "Create Seller Account"}
      </LoadingButton>
    );
  };

  return (
    <div className="register-container">
      <div className="container">
        {!isShowBuyerForm && !isShowSellerForm ? (
          <div>
            <div className="register-title text-center">
              <div className="signup-des m-3">
                WHETHER YOU&#39;RE A BUYER OR A SELLER, LABNET HAS THE PERFECT
                MEMBERSHIP OPTION FOR YOU.
              </div>
              <div className="m-3 signup-des2">
                Join Labnet and unlock exclusive access to lab-grown diamonds
                and more!
              </div>
            </div>
            <div className="container mb-5">
              <div className="row p-1 m-2 align-item-center">
                <div className="col-lg-6 p-3">
                  <img
                    src={Signup}
                    style={{ height: "650px", width: "100%" }}
                    alt="signup"
                  />
                </div>
                <div className="col-lg-6 my-auto p-5">
                  <div className="row justify-content-around">
                    <Button
                      className="col-5 p-2 buyer-signup"
                      size="large"
                      variant="contained"
                      onClick={() => {show('SIGNUP AS BUYER')}}
                    >
                      SIGNUP AS BUYER
                    </Button>
                    <Button
                      className="col-5 p-2 seller-signup"
                      color="secondary"
                      size="large"
                      variant="outlined"
                      onClick={() => {show('SIGNUP AS SELLER')}}
                    >
                      SIGNUP AS SELLER
                    </Button>
                  </div>
                  <div className="mt-5 signup-des3">
                    All prices are in USD. Plans can be canceled at any time in
                    accordance with our terms and conditions. Accepting Visa,
                    Master Card, American Express, and Discover.
                  </div>
                  <div className="mt-5">
                    <img
                      src={SignupMark}
                      style={{ width: "40%", height: "32px" }}
                      alt="mark"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="signup-question mt-5 text-center"></div>
          </div>
        ) : (
          <Container maxWidth="md" className="p-4">
            <div className="row p-4 justify-content-between">
              <CardActionArea
                sx={{
                  maxWidth: '100%',
                  maxHeight: '400px',
                  display: "flex",
                  flexDirection: "Column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={image}
                  variant="square"
                  sx={{ width: '100%', height: '100%' }}
                  className="text-center"
                  onClick={handleAvatarClick} // Click to upload
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }} // Hide the file input
                  ref={fileAvatarInputRef}
                  onChange={handleAvatarFileChange} // Handle file change
                />
                <Alert
                  className="avatar-alert"
                  fullWidth
                  sx={{
                    display: validationState.showAvatarSet ? "block" : "none",
                  }}
                  variant="outlined"
                  severity="error"
                >
                  Please, select you avatar
                </Alert>
              </CardActionArea>
              <TextField
                className="col-5 my-3"
                color="warning"
                label="Your Full Name"
                variant="standard"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={validationState.errorFullName}
                helperText={
                  validationState.errorFullName
                    ? validationState.errorFullNameText
                    : ""
                }
              />
              <TextField
                className="col-5 my-3"
                label={
                  isShowBuyerForm ? "Business Name(optional)" : "Business Name"
                }
                color="warning"
                variant="standard"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                error={validationState.errorBusinessName}
                helperText={
                  validationState.errorBusinessName
                    ? validationState.errorBusinessNameText
                    : ""
                }
              />
              <TextField
                className="col-12 my-3"
                label="Email Address"
                color="warning"
                variant="standard"
                value={emailAddress}
                onChange={(e) => setEmailAdress(e.target.value)}
                error={validationState.errorEmailAdress}
                helperText={
                  validationState.errorEmailAdress
                    ? validationState.errorEmailAdressText
                    : ""
                }
              />
              <TextField
                className="col-5 my-3"
                label="Password"
                color="warning"
                type="password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={validationState.errorPassword}
                helperText={
                  validationState.errorPassword
                    ? validationState.errorPasswordText
                    : ""
                }
              />
              <TextField
                className="col-5 mt-3 mb-4"
                label="Confirm Password"
                type="password"
                color="warning"
                variant="standard"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                error={validationState.errorPassword2}
                helperText={
                  validationState.errorPassword2
                    ? validationState.errorPassword2Text
                    : ""
                }
              />
              <CountrySelection/>
              <TextField
                className="col-5 my-3"
                label={
                  isShowBuyerForm ? "Phone Number(optional)" : "Phone Number"
                }
                color="warning"
                variant="standard"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                error={validationState.errorPhoneNumber}
                helperText={
                  validationState.errorPhoneNumber
                    ? validationState.errorPhoneNumberText
                    : ""
                }
              />
              {isShowSellerForm ? (
                <div className=" row my-3 justify-content-between p-0 mx-0">
                  <div className="row col-lg-12 p-0 mx-0">
                    <Card className="col-lg-5 p-0">
                      <CardActionArea sx={{ boxShadow: 1 }}>
                        <CardMedia
                          component="img"
                          height="140px"
                          image={companyLogoImage}
                          alt="green iguana"
                          onClick={handleCompanyLogoClick}
                        />
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }} // Hide the file input
                          ref={fileComapnyLogoInputRef}
                          onChange={handleComapnyLogoFileChange} // Handle file change
                          />
                        <Alert
                          sx={{
                            display: validationState.showBusinessLogoSet
                            ? "block"
                            : "none",
                          }}
                          variant="outlined"
                          severity="error"
                          >
                          Please, insert your business logo
                        </Alert>
                      </CardActionArea>
                    </Card>
                  </div>
                  {!isCompanyLogoImage ? (
                    <TextField
                      className="col-lg-5"
                      color="warning"
                      variant="standard"
                      label="* Please insert your corporate advertisement *"
                      disabled
                      sx={{ color: "text.secondary" }}
                    />
                  ) : null}
                  <TextField
                    className="col-5"
                    label="Business Website (optional)"
                    color="warning"
                    variant="standard"
                    type="url"
                    value={businessWebsite}
                    onChange={(e) => setBusinessWebsite(e.target.value)}
                    error={validationState.errors?.businessWebsite}
                    helperText={
                      validationState.errors?.businessWebsite
                        ? validationState.errorText?.businessWebsite
                        : ""
                    }
                  />
                </div>
              ) : null}
              <ContactMethod />
              {isShowBuyerForm ? (
                <SubmitButton />
              ) : (
                null
              )}
              <div style={{ display: isShowSellerForm ? "block" : "none" }}>
                <div className="row my-4 p-0 justify-content-between">
                  <div className="col-5 p-0">
                    <FormControl
                      fullWidth
                      variant="standard"
                      color="warning"
                      sx={{ minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Subscription Level
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={subLevel}
                        onChange={handleSubLevel}
                        label="level"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Basic Seller">
                          Basic Seller
                        </MenuItem>
                        <MenuItem value="Standard Seller">
                          Standard Seller
                        </MenuItem>
                        <MenuItem value="Premium Seller">
                          Premium Seller
                        </MenuItem>
                        <MenuItem value="Enterprise Seller">
                          Enterprise Seller
                        </MenuItem>
                      </Select>
                      {validationState.showSubLevelSet && (
                        <FormHelperText error>
                          Subscription Level is required!
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                  <Button className="col-lg-5 sub-info" variant="outlined" onClick={handleOpen}>
                    Get Subcription Level Info
                  </Button>
                </div>
                <SubmitButton />
              </div>
            </div>
          </Container>
        )}
      </div>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styledModal}>
          <div className="">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                    <StyledTableCell align="right">
                      Fat&nbsp;(g)
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Carbs&nbsp;(g)
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Protein&nbsp;(g)
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.protein}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default RegisterComponent;
