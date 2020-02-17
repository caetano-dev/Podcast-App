import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {SimpleCard} from '@paraboly/react-native-card';
import {
  Layout,
  Text,
  Button,
  Card,
  Icon,
  CardHeader,
  CheckBox,
  Select,
} from '@ui-kitten/components';
import SizePicker from './SizePicker';

const Header = () => <CardHeader title="/Shop" description="Season: 1" />;

const ItemHeader = () => (
  <View>
    <Text>Title</Text>
  </View>
);

const ItemFooter = () => {
  return (
    <View style={{marginLeft: -15}}>
      <SizePicker />
    </View>
  );
};

export default StoreList = () => {
  return (
    <Card header={Header} style={{flex: 1}}>
      <ScrollView>
        <Layout style={{flexDirection: 'row'}}>
          <Layout style={styles.cont}>
            <Card
              style={styles.shopItem}
              header={ItemHeader}
              footer={ItemFooter}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../Icons/1.png')}
              />
            </Card>

            <Card
              style={styles.shopItem}
              header={ItemHeader}
              footer={ItemFooter}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../Icons/1.png')}
              />
            </Card>
            <Card
              style={styles.shopItem}
              header={ItemHeader}
              footer={ItemFooter}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../Icons/1.png')}
              />
            </Card>

            <Card
              style={styles.shopItem}
              header={ItemHeader}
              footer={ItemFooter}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../Icons/1.png')}
              />
            </Card>
          </Layout>

          <Layout style={styles.cont}>
            <Card
              style={styles.shopItem}
              header={ItemHeader}
              footer={ItemFooter}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../Icons/1.png')}
              />
            </Card>

            <Card
              style={styles.shopItem}
              header={ItemHeader}
              footer={ItemFooter}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../Icons/1.png')}
              />
            </Card>
            <Card
              style={styles.shopItem}
              header={ItemHeader}
              footer={ItemFooter}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../Icons/1.png')}
              />
            </Card>

            <Card
              style={styles.shopItem}
              header={ItemHeader}
              footer={ItemFooter}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../Icons/1.png')}
              />
            </Card>
          </Layout>
        </Layout>
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  cont: {
    display: 'flex',
    flexDirection: 'column',
  },
  shopItem: {
    width: 150,
    margin: 5,
  },
});
