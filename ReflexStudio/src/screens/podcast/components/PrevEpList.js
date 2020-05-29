import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, CardHeader, Text} from '@ui-kitten/components';

export default PrevEpList = () => {
  const [button, setButton] = useState(false);

  const Header = () => <CardHeader title="Title" description="Ep. 20" />;

  const Footer = () => (
    <View style={styles.footerContainer}>
      <Button
        onPress={() => setButton(!button)}
        style={styles.footerControl}
        size="small"
        status="basic">
        Description
      </Button>
    </View>
  );

  return (
    <Card header={Header} footer={Footer} style={styles.card}>
      {button ? (
        <Text style={{color: 'black'}}>
          In this interview, Nipsey Hussle spoke on a variety of topics
          including not trying to be pigeonholed as a specific type of rapper,
          getting every dollar that is owed to him, and creating music that will
          stand the test of time.
        </Text>
      ) : null}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: '#4C7373',
    width: 260,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 4,
  },
});
