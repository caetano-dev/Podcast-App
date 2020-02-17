import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Select} from '@ui-kitten/components';

const data = [{text: 'S'}, {text: 'M'}, {text: 'L'}, {text: 'XL'}];

const SizePicker = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <Layout style={styles.container}>
      <Select
        data={data}
        placeholder="Sizes"
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 10,
  },
});

export default SizePicker;
