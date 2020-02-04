import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shipping from '../components/Shipping/Shipping';
import Message from '../components/Message/Message';

const shippingOptionsList = [
  { additionalCoast: 0, name: 'FREE SHIPPING', value: 'FREE SHIPPING' },
  {
    additionalCoast: 9.99,
    name: 'EXPRESS SHIPPING',
    value: 'EXPRESS SHIPPING - additional 9.99 $',
  },
  {
    additionalCoast: 19.99,
    name: 'COURIER SHIPPING',
    value: 'COURIER SHIPPING - additional 19.99 $',
  },
];

const errorState = {
  emailError: {
    status: false,
    message: 'Invalid e-mail',
  },
  nameError: {
    status: false,
    message: "Can't be less then 2 character",
  },
  addressError: {
    status: false,
    message: "Can't be less then 2 character",
  },
  phoneError: {
    status: false,
    message: 'Must be 7-12 numbers, starting with +',
  },
};

class ShippingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phone: '',
      email: '',
      shippingOption: shippingOptionsList[0].name,
      locked: false,
      ...errorState,
    };
  }

  componentDidMount() {
    if (this.props.totalPrice > 300) {
      this.setState({ locked: true });
    }
  }

  onChange = ({ target }) => {
    const value = target.value;
    this.setState({ [target.name]: value });
  };

  validation = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        this.setState({
          emailError: {
            ...this.state.emailError,
            status: !value.match(
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            ),
          },
        });
        break;
      case 'name':
        this.setState({
          nameError: {
            ...this.state.nameError,
            status: value.trim().length <= 2,
          },
        });
        break;
      case 'address':
        this.setState({
          addressError: {
            ...this.state.addressError,
            status: value.trim().length <= 2,
          },
        });
        break;
      case 'phone': {
        this.setState({
          phoneError: {
            ...this.state.phoneError,
            status: !value.match(/^\+[1-9]{1}[0-9]{7,12}$/),
          },
        });
        break;
      }
      default:
        break;
    }
  };

  get disableButton() {
    return (
      this.state.nameError.status ||
      this.state.addressError.status ||
      this.state.emailError.status ||
      this.state.phoneError.status
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const currentShipping = shippingOptionsList.find(
      e => e.name === this.state.shippingOption
    );
    const newTotalPrice =
      Math.round(
        (parseFloat(this.props.totalPrice) +
          parseFloat(currentShipping.additionalCoast)) *
          100
      ) / 100;

    alert(`Total ${newTotalPrice}`);
  };

  render() {
    return (
      <>
        {this.props.totalPrice ? (
          <Shipping
            shippingOptions={shippingOptionsList}
            onChange={this.onChange}
            validation={this.validation}
            disableButton={this.disableButton}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />
        ) : (
          <Message text={'Your cart empty'} type={'info'} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  totalPrice: state.cartItems.totalPrice,
});

export default connect(mapStateToProps, null)(ShippingPage);
