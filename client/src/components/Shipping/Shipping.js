import React from "react";
import {Link} from "react-router-dom";
import bottomStyle from "../Cart/Button.module.css";
import styles from "./Shipping.module.css";
import {Input} from "../Input/Input";


const Shipping = ({
  active, handleSubmit, name,
  address, phone, email, shippingOption,
  onChange, validation, nameError, addressError,
  phoneError, emailError, totalPrice
}) => (
  <div className={styles.container}>
    <form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          value={name}
          placeholder='John Snow'
          label='Name*' autoFocus={true}
          onChange={onChange}
          onBlur={validation}
          error={nameError}
          required={true}
        />
        <Input
          name="address"
          type="text"
          value={address}
          placeholder=''
          label='Address' autoFocus={false}
          onChange={onChange}
          onBlur={validation}
          error={addressError}
          required={true}
        />
        <Input
          name="phone"
          type="phone"
          value={phone}
          placeholder='+48'
          label='Phone' autoFocus={false}
          onChange={onChange}
          onBlur={validation}
          error={phoneError}
          required={false}
        />
        <Input
          name="email"
          type="email"
          value={email}
          placeholder=''
          label='Email' autoFocus={false}
          onChange={onChange}
          onBlur={validation}
          error={emailError}
          required={false}
        />
      <div className={bottomStyle.bottomContainer}>
        <Link to="" className={active ? `bottomStyle.link` : `bottomStyle.link styles.linkDissabled`}>Pay</Link>
      </div>
    </form>
  </div>
);

export default Shipping;