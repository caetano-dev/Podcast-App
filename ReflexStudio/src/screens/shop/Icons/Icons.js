import React from 'react';
import {StyleSheet} from 'react-native';
import {logoutUser} from '../../../api/auth-api';

import {Button, Icon} from '@ui-kitten/components';

const CartIcon = style => (
  <Icon name="shopping-cart-outline" style={{height: 30, width: 30}} />
);

const CartIconFilled = style => <Icon name="shopping-cart" {...style} />;

export const CartButton = ({cart, navigation}) => (
  <Button
    icon={cart ? CartIconFilled : CartIcon}
    appearance="ghost"
    style={styles.button}
    onPress={() => navigation.navigation('Cart')}
  />
);

const addIcon = style => <Icon name="plus-circle" {...style} />;

export const AddButton = () => (
  <Button icon={addIcon} appearance="ghost" style={styles.addButton} />
);

export const LogoutButton = () => (
  <Button
    status="basic"
    appearance="ghost"
    onPress={() => logoutUser()}
    style={styles.button}>
    Log Out
  </Button>
);

export const RootButton = navigation => (
  <Button
    status="basic"
    appearance="ghost"
    onPress={() => navigation.navigate('Root')}
    style={styles.button}>
    Root
  </Button>
);

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
  },
  addButton: {
    width: 20,
    height: 40,
  },
});
