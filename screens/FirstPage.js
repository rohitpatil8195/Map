
import React,{Component} from 'react';
import { Button,StyleSheet,TouchableOpacity, View,TextInput, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import
MaterialIcons
from 'react-native-vector-icons/MaterialIcons';


class FirstPage extends Component {
    constructor(props){
        super(props);
        this.state={
            result_data:[],
            filterd_result_data:[],
            Search:''

        }
    }
    componentDidMount=()=>{
        this.Api_call();
    }
    Api_call=()=>{

              
          const request_option={
             method :'GET'
          }
          
          fetch("https://run.mocky.io/v3/82f1d43e-2176-4a34-820e-2e0aa4566b5c", request_option)
          .then(async response =>{
              const data =await response.json();
              console.log("data yee"+(data.length));
          const result = (data);
               this.setState({
                   result_data:result,
                   filterd_result_data:result
               })
              console.log("result_data",(this.state.result_data))
          }).catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
            }

            
        

             searchFilterFunction = (text) => {
              // Check if searched text is not blank
            //  let newData =[this.state.result_data]
              console.log("text",text)
              if (text != '') {
                // Inserted text is not blank
                // Filter the masterDataSource
                // Update FilteredDataSource
             
                 newData = this.state.result_data.filter(
                  function (item) {
                    const itemData = item.title
                      ? item.title.toUpperCase()
                      : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
                //console.log("newdata",newData)
                this.setState({
                  filterd_result_data:newData,
                  Search:text
                })
                // setFilteredDataSource(newData);
                // Search(text);
              } else {
                // Inserted text is blank
                // Update FilteredDataSource with masterDataSource
                this.setState({
                  filterd_result_data:result_data,
                  Search:text
                })
                // setFilteredDataSource(masterDataSource);
                // setSearch(text);
              }
            };
          

// options={{
//   title: 'First Page', //Set Header Title
//   headerStyle: {
//     backgroundColor: '#f4511e', //Set Header color
//   },
//   headerTintColor: '#fff', //Set Header text color
//   headerTitleStyle: {
//     fontWeight: 'bold', //Set Header text style
//   },
//   headerRight: ({props}) =>
//    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ThirdPage')}> 
//    <MaterialCommunityIcons
//   name="map"
//  style={{fontSize:40,marginRight:20,color:'white'}}/>
//  </TouchableOpacity>
// }

// }

// static navigationOptions=({ navigation})=>{
//   return{
//   title: 'First Page', //Set Header Title
//   headerStyle: {
//     backgroundColor: '#f4511e', //Set Header color
//   },
//   headerTintColor: '#fff', //Set Header text color
//   headerTitleStyle: {
//     fontWeight: 'bold', //Set Header text style
//   },
//   headerRight: () =>
//    <TouchableOpacity onPress={()=>{ navigation.navigate('ThirdPage')}}> 
//    <MaterialCommunityIcons
//   name="map"
//  style={{fontSize:40,marginRight:20,color:'white'}}/>
//  </TouchableOpacity>
//  }
// }



navi=()=>{
  this.props.navigation.navigate('ThirdPage',{all_data:this.state.result_data})
}

    render(){
        
        return (
          
      <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    width:'80%',
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10}}>
            <MaterialCommunityIcons
                name="magnify"
               style={{fontSize:24}}
              />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Enter Your Name Here"
                underlineColorAndroid="transparent"
                onChangeText={(text)=>this.searchFilterFunction(text)}
            />
         
        </View>
        <MaterialIcons
                name="filter-alt"
               style={{fontSize:24}}
              />
                <TouchableOpacity onPress={this.navi}> 
             <MaterialCommunityIcons
            name="map"
           style={{fontSize:24,color:'black'}}/>
           </TouchableOpacity>
        </View>

         <FlatList
      data={ this.state.filterd_result_data }
      ItemSeparatorComponent = {this.ItemSeparatorLine}
      keyExtractor={(item, index) => index}
  renderItem={({item}) => 
   <TouchableOpacity>
   <View style={styles.rect}>
        <View style={styles.loremIpsumRow}>
          <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
          <View style={styles.loremIpsum5Column}>
            <Text style={styles.loremIpsum5}>{item.title}</Text>
            <Text style={styles.loremIpsum6}>{item.subtitle}</Text>
          </View>
          {/* <Text style={styles.loremIpsum8}>{item.status}</Text> */}
        </View>
        <View style={styles.rect2}>
          <View style={styles.loremIpsum11Row}>
          <MaterialCommunityIcons
                name="calendar-arrow-right"
               style={{fontSize:22}}
              />
            <Text style={styles.loremIpsum12}>Created:</Text>
            <Text style={styles.loremIpsum13}>{item.created}</Text>
            <Text style={styles.abv3}>abv</Text>
          </View>
        </View>
        <View style={styles.abvRow}>
        <MaterialCommunityIcons
                name="format-list-bulleted-square"
               style={{fontSize:22}}
              />
          <Text style={styles.loremIpsum16}>{item.short_desc}</Text>
        </View>
        <View style={styles.abv1Row}>
        <MaterialCommunityIcons
                name="clipboard-text"
               style={{fontSize:22}}
              />
          <Text style={styles.loremIpsum17}>{item.long_desc}</Text>
        </View>
        <Text style={styles.abv2}>V</Text>
      </View>

</TouchableOpacity>
}

/>

      </View>
        
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rect: {
      width: 380,
      height: 198,
      backgroundColor: "#E6E6E6",
      marginRight: 5,
      marginLeft: 15,marginTop:15,backgroundColor:'white'
    },
    loremIpsum: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 39,
      width: 60,
      marginTop: 8
    },
    loremIpsum5: {
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    loremIpsum6: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 4
    },
    loremIpsum5Column: {
      width: 147,
      marginTop: 8,
      marginBottom: 3
    },
    loremIpsum8: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 15
    },
    loremIpsumRow: {
      height: 47,
      flexDirection: "row",
      marginTop: 11,
      marginLeft: 22,
      marginRight: 15
    },
    rect2: {
      width: 380,
      height: 44,
      backgroundColor: "white",
      borderBottomWidth: 1,borderTopWidth:1,
      borderColor: "rgba(145,126,126,1)",
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 2
    },
    loremIpsum11: {
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    loremIpsum12: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 9
    },
    loremIpsum13: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 7
    },
    abv3: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 15
    },
    loremIpsum11Row: {
      height: 16,
      flexDirection: "row",
      flex: 1,
      marginRight: 2,
      marginLeft: 13,
      marginTop: 14
    },
    abv: {
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    loremIpsum16: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 10
    },
    abvRow: {
      height: 16,
      flexDirection: "row",
      marginTop: 18,
      marginLeft: 14,
      marginRight: 22
    },
    abv1: {
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    loremIpsum17: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 17
    },
    abv1Row: {
      height: 16,
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 14,
      marginRight: 15
    },
    abv2: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 7,
      marginLeft: 170
    }
  });
  

export default FirstPage;