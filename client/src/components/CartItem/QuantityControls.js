import React, {Component} from "react";
import styles from './CartItem.module.css';
import iconDelete from "../../images/icon-delete.png";
import { updateCartItem, deleteCartItem } from '../../actions/actionCreators';
import { connect } from "react-redux";

class QuantityControls extends Component {
  onChange = ({ target: { value} }) => {
    const { id, updateCartItem } = this.props;
    if (this.validation(value)) {
      updateCartItem({ id, quantity: value });
    }
  }
  
  validation = value => value > 0 && value < 51;

  onDelete = () => this.props.deleteCartItem(this.props.id);
  
  updateQuantity = newQuantity => {
    if (newQuantity > 0 && newQuantity <= 50) {
      this.props.updateCartItem({id: this.props.id, quantity: newQuantity});
    }
  }

  render() {
    const { price, quantity } = this.props;
    const { updateQuantity, onDelete, onChange } = this;
    return (
      <div className={styles.controlsContainer}>
        <div>
          <img 
            src={iconDelete}
            alt="Press to delete item"
            className={styles.icon}
            onClick={onDelete}/>
        </div>
        <div className={styles.quantityControl}>
          <div>
            <button
              className={styles.plusButton}
              onClick={() => updateQuantity(quantity + 1)}
            >
             +
            </button>
            <input 
              className={styles.unborderedInput}
              type="number"
              name="quantity"
              min="1"
              max="50"
              value={quantity}
              onChange={onChange}
            />
            <button 
              className={styles.minusButton}
              onClick={() => updateQuantity(quantity - 1)}
            >
             -
            </button>
          </div>        
          <span>{price * quantity}</span>
        </div>  
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteCartItem: id => dispatch((deleteCartItem(id))),
  updateCartItem: item => dispatch((updateCartItem(item))),
});

export default connect(null, mapDispatchToProps)(QuantityControls);