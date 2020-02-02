import React, {Component} from "react";
import styles from './CartItem.module.css';
import iconDelete from "../../images/icon-delete.png";
import {updateCartItem, deleteCartItem} from '../../actions/actionCreators';
import {connect} from "react-redux";

class QuantityControls extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  onChange = (e) => {
		const target = e.target;
    const value = target.value;
    const id = this.props.id;
    if(this.validation(value)) {
      this.props.updateCartItem({id, quantity: value});
    }
    //this.props.updateCartItem({id, quantity: this.props.quantity});
  }
  
  validation = (value) => {
    if(value>0 && value<51) {
      return true;
    }
    return false;
  }

  onInc = () => {
    const curQuantity = this.props.quantity;
    if(curQuantity<=49)
      this.props.updateCartItem({id: this.props.id, quantity: curQuantity+1});
  }

  onDelete = () => {
    this.props.deleteCartItem(this.props.id);
  }

  onDec = () => {
    const curQuantity = this.props.quantity;
    if(curQuantity>1)
      this.props.updateCartItem({id: this.props.id, quantity: curQuantity-1});
  }

  render() {
    const {price, quantity} = this.props;
    const {onDec, onInc, onDelete, onChange} = this;
    return (
      <div className={styles.controlsContainer}>
        <div>
          <img src={iconDelete} alt="Press to delete item" className={styles.icon} onClick={onDelete}/>
        </div>
        <div className={styles.quantityControl}>
          <div>
            <button className={styles.plusButton} onClick={onInc}> + </button>
            <input className={styles.unborderedInput} type="number" name="quantity" min="1" max="50" value={quantity} onChange={onChange}/>
            <button className={styles.minusButton} onClick={onDec}> - </button>
          </div>        
          <span>{price * quantity}</span>
        </div>  
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteCartItem: (id) => dispatch((deleteCartItem(id))),
  updateCartItem: (item) => dispatch((updateCartItem(item))),
});

export default connect(null, mapDispatchToProps)(QuantityControls);