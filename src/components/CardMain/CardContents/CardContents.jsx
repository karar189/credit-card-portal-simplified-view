import React, { useState, useEffect } from "react";
import "./style.css";
import { Container, Box, Grid, TextField, stack } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1.5px solid #c5cbd7",
      borderRadius: "10px",
      maxWidth: "100%",
    },
    "&:hover fieldset": {
      borderColor: "#2b0e30",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2b0e30",
    },
    " input::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    " input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});

const CardContents = (props) => {
  const initialValues = {
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    expiryDateYear: "",
    cvv: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      alert("Form Submitted");
      props.setPage((currPage) => currPage + 1);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.cardName) {
      errors.cardName = "Card Holders name is required!";
    }
    if (!values.cardNumber) {
      errors.cardNumber = "Card Number is required!";
      // } else if (!regex.test(values.email)) {
      //   errors.email = "This is not a valid email format!";
    }
    if (!values.expiryDate) {
      errors.expiryDate = "*Required";
    } else if (values.expiryDate.length > 2) {
      errors.expiryDate = "MM Format";
    }
    if (!values.expiryDateYear) {
      errors.expiryDateYear = "*Required";
    } else if (values.expiryDateYear.length > 2) {
      errors.expiryDateYear = "YY Format";
    }
    if (!values.cvv) {
      errors.cvv = "*Required";
    } else if (values.cvv.length > 3) {
      errors.cvv = "CVV Format";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // onClick={() => {
    //   props.setPage((currPage) => currPage + 1);
    // }}
  };

  return (
    <>
      <Grid className="cardContents">
        <Container>
          <Grid p={2}>
            <form onSubmit={handleSubmit}>
              <div className="form-box">
                <label htmlFor="">Cardholder Name</label>
                <CssTextField
                  variant="outlined"
                  placeholder="e.g Jane Appleseed"
                  type="name"
                  name="cardName"
                  id="name-field"
                  value={formValues.cardName}
                  onChange={handleChange}
                />
                <p>{formErrors.cardName}</p>
              </div>
              <br />
              <div className="form-box">
                <label htmlFor="">Card Number</label>
                <CssTextField
                  variant="outlined"
                  placeholder="e.g 1234 5678 9012 3456"
                  type="number"
                  name="cardNumber"
                  id="number-field"
                  value={formValues.cardNumber}
                  onChange={handleChange}
                />
                <p>{formErrors.cardNumber}</p>
              </div>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <div className="form-box2">
                        <label htmlFor="date-field">Expiry Date</label>
                        <div className="box2-field">
                          <div className="month">
                            {" "}
                            <CssTextField
                              variant="outlined"
                              placeholder="MM"
                              type="number"
                              name="expiryDate"
                              id="date-field"
                              value={formValues.expiryDate}
                              onChange={handleChange}
                            />
                            <p>{formErrors.expiryDate}</p>
                          </div>
                          <div className="year">
                            {" "}
                            <CssTextField
                              variant="outlined"
                              placeholder="YY"
                              type="number"
                              name="expiryDateYear"
                              id="date-field"
                              value={formValues.expiryDateYear}
                              onChange={handleChange}
                            />
                            <p>{formErrors.expiryDateYear}</p>
                          </div>
                        </div>
                      </div>
                    </Grid>
                    {/* <Grid item xs={6}></Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={6} md={6}>
                  <div className="form-box">
                    <label htmlFor="">CVV</label>
                    <CssTextField
                      variant="outlined"
                      placeholder="e.g 123"
                      type="number"
                      name="cvv"
                      id="cvv-field"
                      value={formValues.cvv}
                      onChange={handleChange}
                    />
                    <p>{formErrors.cvv}</p>
                  </div>
                </Grid>
              </Grid>
              <br />
              <div className="form-button">
                <button style={{ border: "none", margin: "0" }}>
                  {/* <ColorButton variant="contained">SUBMIT</ColorButton> */}
                  <p>Submit</p>
                </button>
              </div>
            </form>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default CardContents;
