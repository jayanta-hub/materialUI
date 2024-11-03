import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
  Link,
  Box,
  InputAdornment,
  IconButton,
  Grid2,
} from "@mui/material";
import { Stack } from "@mui/system";
import {
  Google as GoogleIcon,
  Twitter as TwitterIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';
import styles from "./Login.module.css"; // Make sure this is your CSS file
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utility/constant";

const Login: React.FC = (): JSX.Element => {
  const navigation = useNavigate();
  const { t } = useTranslation();
  const type = "Register";
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('invalid_email'))
      .required(t('email_required')),
    password: Yup.string()
      .min(6, t('password_length'))
      .required(t('password_required')),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      navigation(ROUTES.DASHBOARD)
    },
  });

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Paper sx={{ p: 4, borderRadius: '10px' }}>
        <Box display="flex" justifyContent="center">
          <Typography fontWeight={600} gutterBottom sx={{ fontSize: "15px" }}>
            {t(`welcome_message`)}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <Grid2 container spacing={2} justifyContent="center">
            <Grid2 size={6}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ borderRadius: '50px', textTransform: "none", border: "0.5px solid #C8C8C8" }}
              >
                {t("google")}
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<TwitterIcon />}
                sx={{ borderRadius: '50px', textTransform: "none", border: "0.5px solid #C8C8C8" }}
              >
                {t("twitter")}
              </Button>
            </Grid2>
          </Grid2>
        </Box>

        <Divider sx={{ my: 3, fontSize: "13px", color: "grey" }} textAlign="center">
          {t('continue_with')}
        </Divider>

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <div className="flex">
              <span className="font-medium">{t('email')}</span>
              <span className="text-red-500">*</span>
            </div>
            <TextField
              placeholder={t('your_email')}
              fullWidth
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                '& .MuiInputBase-root': {
                  height: '40px',
                  fontSize: "13px",
                  borderRadius: '12px',
                }
              }}
            />

            <div className="flex">
              <span className="font-medium">{t('password')}</span>
              <span className="text-red-500">*</span>
            </div>
            <TextField
              placeholder={t('your_password')}
              fullWidth
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{
                '& .MuiInputBase-root': {
                  height: '40px',
                  fontSize: "13px",
                  borderRadius: '12px',
                }
              }}
              slotProps={{
                input:{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff sx={{ fontSize: "15px" }} /> : <Visibility sx={{ fontSize: "15px" }} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              }}
            />
          </Stack>

          <Box display="flex" justifyContent="space-between" mt={4}>
            <Link
              component="button"
              variant="body2"
              sx={{ color: 'gray', fontSize: "12px", marginRight: "5px", textDecoration: "none" }}
            >
              {type === "Register" ? `${t('already_account')}` : `${t('no_account')}`}
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: '50px', textTransform: "none", backgroundColor: "blue", fontWeight: "500", fontSize: "12px" }}
            >
              {t('register')}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
