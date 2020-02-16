import React from 'react';
import {StyleSheet} from 'react-native';

import {Button, Icon} from '@ui-kitten/components';

const CartIcon = style => (
  <Icon name="shopping-cart-outline" style={{height: 30, width: 30}} />
);
const CartIconFilled = style => <Icon name="shopping-cart" {...style} />;

export const CartButton = ({cart}) => (
  <Button
    icon={cart ? CartIconFilled : CartIcon}
    appearance="ghost"
    style={styles.cart}
  />
);

export const LogoutButton = () => (
  <Button status="basic" appearance="ghost" style={styles.logout}>
    Log Out
  </Button>
);

const styles = StyleSheet.create({
  cart: {
    height: 50,
    width: 100,
  },
  logout: {
    height: 50,
    width: 100,
  },
});
