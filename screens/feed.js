import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    FlatList
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import StoryCard from './storyCard';

var customFonts = {
   "Bubblegum-Sans" : require("../assets/fonts/BubblegumSans-Regular.ttf")
}

var stories = require("./stories.json")

export default class Feed extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false
        };
    }
    
    async loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    
    componentDidMount() {
        this.loadFontsAsync();
    }
    
    display = ({item: story})=>{
     return(
      <StoryCard story = {story} navigation = {this.props.navigation}/>
     )
    }

    render(){
        if(this.state.fontsLoaded){
          SplashScreen.hideAsync();
          return(
            <View style = {styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Storytelling App</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                    keyExtractor={(item,index)=>{index.toString()}}
                    data={stories}
                    renderItem={this.display}
                    />
                </View>
            </View>
          )
        }
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.93
    }
  });