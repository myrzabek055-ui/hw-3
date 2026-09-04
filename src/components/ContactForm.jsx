import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Маалымат ийгиликтүү сакталды!');
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto', mt: 4, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h5" align="center" fontWeight="bold">
        Каттоо формасы
      </Typography>

      <TextField
        label="Атыңыз"
        variant="outlined"
        {...register("firstName", { required: "Атыңызды жазуу милдеттүү" })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />

      <TextField
        label="Email дарегиңиз"
        variant="outlined"
        type="email"
        {...register("email", { required: "Email жазуу милдеттүү" })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <Button type="submit" variant="contained" color="primary" size="large">
        Катталуу
      </Button>
    </Box>
  );
}
