import React, {Component, Fragment, memo} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import PrevEpList from './components/PrevEpList';
import {Layout} from '@ui-kitten/components';
// import ArchivePlayer from "./ArchivePlayer";

// import firebase from "firebase";
// import "@firebase/firestore";
// import { Collection } from "firestorter";
// import { observer } from "mobx-react";

// const episodes = new Collection("episodes");

const Previous = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#325F49',
        flexDirection: 'column',
      }}>
      <View style={{flex: 0.2, padding: 5, marginTop: 30}}>
        <Button
          color="#427389"
          title="Go to Home"
          onPress={() => navigation.navigate('RootReflexNav')}
        />
      </View>

      <Text
        style={{
          fontSize: 45,
          alignSelf: 'center',
        }}>
        Previous Episodes
      </Text>

      <View style={styles.scrollCont}>
        <ScrollView>
          <Layout style={{padding: 15, backgroundColor: null}}>
            <PrevEpList />
            <PrevEpList />
            <PrevEpList />
            <PrevEpList />
            <PrevEpList />
          </Layout>
        </ScrollView>
      </View>
    </View>
  );
};
// {/* {episodes.docs.reverse().map(doc => (
//       <Data key={doc.id} doc={doc} />
//     ))} */}
// class EpisodeItem extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { name, id, date, description, url } = this.props.doc.data;

//     return (
//       <TouchableOpacity
//         onPress={() =>
//           this.props.navigation.navigate("ArchivePlayer", {
//             name: name,
//             id: id,
//             date: date,
//             description: description,
//             url: url
//           })
//         }
//       >
//         <View style={styles.prevEP}>
//           <View style={styles.cont}>
//             <View>
//               <Text style={styles.title}>{name}</Text>
//               <Text style={styles.id}>Ep.{id}</Text>
//               <Text style={styles.date}>{date}</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }

export default Previous;

const styles = StyleSheet.create({
  scrollCont: {
    flex: 2,
    alignItems: 'center',
    margin: 10,
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 5,
    backgroundColor: '#4C7373',
  },
  scroll: {
    flex: 1,
  },
  titleHome: {
    fontSize: 20,
    textAlign: 'auto',
    marginRight: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'auto',
    marginRight: 75,
    left: 15,
  },
  id: {
    position: 'absolute',
    top: 0,
    fontSize: 20,
    textAlign: 'right',
  },
  description: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  playbutton: {
    position: 'absolute',
    top: 50,
    left: 230,
  },
  stop: {
    position: 'absolute',
    top: 50,
    left: 175,
  },
  prevEP: {
    flex: 2,
    margin: 5,
    borderRadius: 30,
    borderWidth: 5,
    width: 300,
    height: 100,
    backgroundColor: '#BCCBC3',
  },
  cont: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 15,
    marginRight: 50,
    left: 15,
    marginBottom: 100,
  },
  id: {
    fontSize: 17,
    position: 'absolute',
    top: 3,
    left: 230,
  },
  content: {
    margin: 15,
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'rgba(73, 90, 76, 0.5)',
    padding: 10,
    width: 300,
    backgroundColor: 'rgba(73, 90, 76, 0.5)',
  },
  newContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 525,
  },
  homePlay: {
    height: 50,
    width: 150,
  },
});
