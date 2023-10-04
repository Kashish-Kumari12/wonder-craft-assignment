import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, Dimensions, FlatList} from 'react-native';
import FormSelectionBtn from './Components/FormSelectionBtn';
import Submit from './Components/Submit';
import Checkin from './Components/Checkin';
import Header from './Components/Header';
export default function App() {


const restaurants = [
  {
    name: 'User A',
    deliveryTime: '9th of November 2023',
    status: 'Went out and visited the home this weekend i am ready to bid on!',
    image: require('./assets/software.png'),
    id: 1,
  },
  {
    name: 'User B',
    deliveryTime: '9th of November 2023',
    status: 'Went out and visited the home this weekend i am ready to bid on!',
    image: require('./assets/image.png'),
    id: 2,
  },
  {
    name: 'User A',
    deliveryTime: '9th of November 2023',
    status: 'Went out and visited the home this weekend i am ready to bid on!',
    image: require('./assets/software.png'),
    id: 3,
  },
  {
    name: 'User A',
    deliveryTime: '9th of November 2023',
    status: 'Went out and visited the home this weekend i am ready to bid on!',
    image: require('./assets/signup.png'),
    id: 4,
  },
  {
    name: 'User A',
    deliveryTime: '9th of November 2023',
    status: 'Went out and visited the home this weekend i am ready to bid on!',
    image: require('./assets/software.png'),
    id: 5,
  },
];

  return (
 
      <View style={{flex: 1, paddingTop: 60}}>
      <Header label="Checkin" />
        <View style={{flexDirection:'row', padding: 20}}>
          <FormSelectionBtn style={styles.borderLeft} title='Submit'/>
          <FormSelectionBtn style={styles.borderRight} title='Checkin'/>
        </View>

        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
         <Submit/>
        <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <Checkin info={item} />;
        }}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
         
        </ScrollView>

      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft:{
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight:{
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    
  }
});
