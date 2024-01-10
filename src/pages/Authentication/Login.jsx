import { ErrorMessage, Field, Form, Formik } from "formik";

import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
import { Button } from "@mui/material";
const initialValues = { email: "", password: "" };
// const validationSchema = {
//   email: Yup.string()
//     .required("Email is required")
//     .email("Invalid Email")
//     .label("email"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// };
const Login = () => {
  // const [formValue, setFormValue] = useState();
  let navigate = useNavigate();
  const handleOnSubmit = (values) => {
    console.log("handle submit", values);
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
            Log in
          </Button>
        </Form>
      </Formik>
      <div className="flex gap-5 items-center justify-center pt-5">
        <p>If you do not have account</p>
        <Button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </Button>
      </div>
    </>
  );
};

export default Login;
