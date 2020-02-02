import React, {Component} from 'react';
import {connect} from "react-redux";
import Shipping from "../components/Shipping";

const shippingOptionsList = [
  "Free shipping",
  "Express shipping",
  "Courier shipping"
];

class ShippingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      address: "",
      phone: "",
      email: "",
      shippingOption: "",
      active: false,
    };
  }

  componentDidMount() {
    if(this.props.totalPrice > 300)
      setState({shippingOption: shippingOptionsList[0]});
  }

  setShipping = () => {

  }

  onChange = (e) => {
    const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({[name]: value}, ()=>{this.validation({target: target})});
  }
	

  validate = () => {

  }

  handleSubmit = (e) => {
		e.preventDefault();
		alert("Done");
	}

  render() {
    const {active, name, address, phone, email, shippingOption} = this.state;
    const totalPrice = this.props;
    return (
      <Shipping 
        active={active}
        name={name}
        address={address}
        phone={phone}
        email={email}
        shippingOption={shippingOption}
        totalPrice={totalPrice}
      />
    );
  }
}


const mapStateToProps = state => ({
  totalPrice: state.cartItems.totalPrice,
});

export default connect(mapStateToProps, null)(ShippingPage);