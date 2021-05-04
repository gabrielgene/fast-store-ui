import React from 'react';
import Input from '~/components/input';
import InputMask from 'react-input-mask';

export default function User({ handleChange, userInfo }) {
  return (
    <>
      <Input
        label="Name"
        name="name"
        onChange={handleChange}
        value={userInfo.name}
      />
      <InputMask
        mask="(99) 99999-9999"
        maskChar=" "
        onChange={handleChange}
        value={userInfo.phone || ''}
      >
        {(inputProps) => (
          <Input {...inputProps} label="Telefone" name="phone" />
        )}
      </InputMask>
      <Input
        label="E-mail"
        name="email"
        onChange={handleChange}
        value={userInfo.email || ''}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        value={userInfo.password || ''}
      />
    </>
  );
}
