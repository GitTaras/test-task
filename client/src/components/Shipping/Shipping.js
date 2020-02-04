import React from 'react';
import bottomStyle from '../Cart/Button.module.css';
import styles from './Shipping.module.css';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import classnames from 'classnames';

const Shipping = ({
  locked,
  disableButton,
  handleSubmit,
  name,
  address,
  phone,
  email,
  shippingOption,
  shippingOptions,
  onChange,
  validation,
  nameError,
  addressError,
  phoneError,
  emailError,
}) => (
  <div className={styles.container}>
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        value={name}
        placeholder="John Snow"
        label="Name*"
        autoFocus={true}
        onChange={onChange}
        onBlur={validation}
        error={nameError}
        required={true}
      />
      <Input
        name="address"
        type="text"
        value={address}
        placeholder=""
        label="Address*"
        autoFocus={false}
        onChange={onChange}
        onBlur={validation}
        error={addressError}
        required={true}
      />
      <Input
        name="phone"
        type="phone"
        value={phone}
        placeholder="+48"
        label="Phone"
        autoFocus={false}
        onChange={onChange}
        onBlur={validation}
        error={phoneError}
        required={false}
      />
      <Input
        name="email"
        type="email"
        value={email}
        placeholder=""
        label="E-mail"
        autoFocus={false}
        onChange={onChange}
        onBlur={validation}
        error={emailError}
        required={false}
      />
      <Select
        locked={locked}
        options={shippingOptions}
        name="shippingOption"
        value={shippingOption}
        label="Shipping options"
        autoFocus={false}
        onChange={onChange}
        onBlur={validation}
        required={false}
      />
      <div className={bottomStyle.bottomContainer}>
      <button
          type="submit"
          disabled={disableButton}
          className={classnames(bottomStyle.link, {
            [bottomStyle.linkDisabled]: disableButton,
          })}
        >
          Pay
        </button>
      </div>
    </form>
  </div>
);

export default Shipping;
