import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {logoutUser} from '../../api/auth-api';

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

export const RefreshButton = ({press}) => {
  return (
    <Button
      icon={() => <Icon name="refresh" width={25} height={25} fill="#000" />}
      appearance="ghost"
      status="primary"
      onPress={() => press}
    />
  );
};

export const LikeButton = () => {
  const [heart, setHeart] = useState(false);

  return heart ? (
    <Icon
      name="heart"
      fill="#DB3A3A"
      onPress={() => setHeart(!heart)}
      style={{height: 35, width: 35}}
    />
  ) : (
    <Icon
      name="heart-outline"
      onPress={() => setHeart(!heart)}
      style={{height: 35, width: 35}}
    />
  );
};

export const FavButton = () => {
  const [fav, setFav] = useState(false);

  return fav ? (
    <Icon
      name="star"
      fill="#E8DE57"
      onPress={() => setFav(!fav)}
      style={{marginLeft: 10, height: 35, width: 35}}
    />
  ) : (
    <Icon
      name="star-outline"
      onPress={() => setFav(!fav)}
      style={{marginLeft: 10, height: 35, width: 35}}
    />
  );
};

export const DownloadButton = () => {
  const [down, setDown] = useState(false);

  return down ? (
    <Icon
      name="cloud-download"
      onPress={() => setDown(!down)}
      style={{marginLeft: 10, height: 40, width: 40}}
    />
  ) : (
    <Icon
      name="cloud-download-outline"
      onPress={() => setDown(!down)}
      style={{marginLeft: 10, height: 40, width: 40}}
    />
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
