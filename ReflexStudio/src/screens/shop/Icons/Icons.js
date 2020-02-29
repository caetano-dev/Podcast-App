import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {logoutUser} from '../../../api/auth-api';

import {Button, Icon, Text} from '@ui-kitten/components';

export const CartButton = ({navigation, cartNum}) => {
  const [count, setCount] = useState(cartNum);

  const CartIcon = style => {
    return count >= 1 ? (
      <>
        <Icon name="shopping-cart" style={{height: 32, width: 32}} />
        <Text category="h6" style={{marginRight: -10}}>
          {count}
        </Text>
      </>
    ) : (
      <>
        <Icon name="shopping-cart-outline" style={{height: 32, width: 32}} />
      </>
    );
  };

  return (
    <Button
      icon={CartIcon}
      appearance="ghost"
      style={styles.button}
      onPress={() => navigation.navigation('Cart')}
    />
  );
};

export const AddButton = () => {
  const addIcon = style => <Icon name="plus-circle" {...style} />;

  return (
    <Button
      icon={addIcon}
      appearance="ghost"
      onPress={() => console.log('add to cart')}
      style={styles.addButton}
    />
  );
};

export const LogoutButton = () => (
  <Button
    status="basic"
    appearance="ghost"
    onPress={() => logoutUser()}
    style={styles.button}>
    Log Out
  </Button>
);

export const BackHomeButton = ({navigation: {goBack}}) => {
  return (
    <Button
      icon={() => (
        <Icon name="arrow-ios-back" style={{height: 20, width: 20}} />
      )}
      appearance="ghost"
      status="primary"
      onPress={() => goBack()}>
      home
    </Button>
  );
};

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
