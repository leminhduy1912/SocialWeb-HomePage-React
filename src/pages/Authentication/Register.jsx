import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
};
const Register = () => {
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = (values) => {
    values.gender = gender;
    console.log("handle submit", values);
  };
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };
  return (
    <>
      <Formik
        onSubmit={handleOnSubmit}
        //validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="firstName"
                placeholder="First Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="lastName"
                placeholder="Last Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                onChange={handleOnChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500"
                />
              </RadioGroup>
            </div>
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
          >
            Register
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-5 items-center justify-center pt-5">
        <p>If you handle account</p>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Button>
      </div>
    </>
  );
};

export default Register;
