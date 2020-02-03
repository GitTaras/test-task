import React, { Component } from 'react';
import { connect } from "react-redux";
import Shipping from "../components/Shipping/Shipping";

const shippingOptionsList = [
  { additionalCoast: 0, name: "FREE SHIPPING", value: "FREE SHIPPING" },
  { additionalCoast: 9.99, name: "EXPRESS SHIPPING", value: "EXPRESS SHIPPING - additional 9.99 $" },
  { additionalCoast: 19.99, name: "COURIER SHIPPING", value: "COURIER SHIPPING - additional 19.99 $" }
];

const errorState = {
	emailError:{
		status: false,
		message: "Invalid e-mail"
	},
	nameError:{
		status: false,
		message: "Can't be less then 2 character"
	},
  addressError:{
		status: false,
		message: "Must be not empty"
  },
  phoneError:{
		status: false,
		message: "Must be 8 character"
	},
};


class ShippingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      address: "",
      phone: "",
      email: "",
      shippingOption: shippingOptionsList[0],
      locked: false,
      dirty: false, 
      ...errorState,
    };
  }

  componentDidMount() {
    if (this.props.totalPrice > 300)
      this.setState({shippingOption: shippingOptionsList[0], locked: true});
  }

  onChange = ({ target }) => {
		const value = target.value;
		this.setState({ [target.name]: value });
  }

  validation = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
				this.setState({
          ...this.state, 
          emailError: {
            ...this.state.emailError,
            status: !value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
          }
        });
				break;
			case 'name':
				this.setState({
          ...this.state,
          nameError: {
            ...this.state.nameError,
            status: value.trim().length <= 2
          }
        });
        break;
      case 'address':
				this.setState({
          ...this.state,
          addressError: {
            ...this.state.addressError,
            status: value.trim().length <= 2
          }
        });
        break;
      case 'phone': {
        this.setState({
          ...this.state,
          phoneError: {
            ...this.state.phoneError,
            status: !value.match(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/)
          }
        });
        break;
      }
			default:
				break;
		}
	}

  disableButton = () => 
    this.state.nameError.status ||
    this.state.addressError.status ||
    this.state.emailError.status ||
    this.state.phoneError.status;
    
	

  handleSubmit = (e) => {
    e.preventDefault();
    const newTotalPrice = this.props.totalPrice + shippingOptionsList.find(
      e => e.name === this.state.shippingOption
    ).additionalCoast;
    
		alert(`Done ${this.state}`);
	}

  render() {
    return (
      <>
        {
          this.props.totalPrice ?
            <Shipping 
              shippingOptions={shippingOptionsList}
              onChange={this.onChange}
              validation={this.validation}
              disableButton={this.disableButton}
              handleSubmit={this.handleSubmit}
              {...this.state}
            />
          :
            <h1>Your cart empty</h1>
        }
      </>
    );
  }
}


const mapStateToProps = state => ({
  totalPrice: state.cartItems.totalPrice,
});

export default connect(mapStateToProps, null)(ShippingPage);