import React from 'react';
import classnames from 'classnames';
import styles from './Message.module.css';

const Message = ({ text, type }) => (
  <div className={classnames(styles.alert, styles[type])}>
    <strong>Info!</strong> {text}
  </div>
);

export default Message;
