import React, {Component, useState} from 'react';
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

import {AddButton} from '../../../components/Icons/Icons';

export default class StoreList extends Component {
  render() {
    const {mainHeader} = this.props;

    const Header = () => (
      <CardHeader title={mainHeader} description="Season: 1" />
    );

    const ItemHeader = () => (
      <View>
        <Text>Title</Text>
      </View>
    );

    const ItemFooter = () => {
      return (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View style={{alignSelf: 'flex-start', width: 115, marginLeft: -20}}>
            <SizePicker />
          </View>
          <View style={{marginLeft: -5}}>
            <AddButton />
          </View>
        </View>
      );
    };
    return (
      <Card
        header={Header}
        status="success"
        style={{flex: 1, borderColor: 'black'}}>
        <ScrollView>
          <Layout style={{flexDirection: 'row', marginBottom: 80}}>
            <Layout style={styles.cont}>
              <Card
                style={styles.shopItem}
                header={ItemHeader}
                footer={ItemFooter}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../components/Icons/1.png')}
                />
              </Card>

              <Card
                style={styles.shopItem}
                header={ItemHeader}
                footer={ItemFooter}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../components/Icons/1.png')}
                />
              </Card>
              <Card
                style={styles.shopItem}
                header={ItemHeader}
                footer={ItemFooter}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../components/Icons/1.png')}
                />
              </Card>

              <Card
                style={styles.shopItem}
                header={ItemHeader}
                footer={ItemFooter}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../components/Icons/1.png')}
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
                  source={require('../../../components/Icons/1.png')}
                />
              </Card>

              <Card
                style={styles.shopItem}
                header={ItemHeader}
                footer={ItemFooter}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../components/Icons/1.png')}
                />
              </Card>
              <Card
                style={styles.shopItem}
                header={ItemHeader}
                footer={ItemFooter}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../components/Icons/1.png')}
                />
              </Card>

              <Card
                style={styles.shopItem}
                header={ItemHeader}
                footer={ItemFooter}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../components/Icons/1.png')}
                />
              </Card>
            </Layout>
          </Layout>
        </ScrollView>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    display: 'flex',
    flexDirection: 'column',
  },
  shopItem: {
    borderColor: 'black',
    width: 150,
    margin: 5,
  },
});
