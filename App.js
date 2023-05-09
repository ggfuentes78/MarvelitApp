import { StyleSheet, View } from 'react-native';

import Characters from './src/screens/Characters';
import Header from './src/components/Header';
import MainScreen from './src/screens/MainScreen';
import colors from './src/constants/colors';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {

  const [loaded] = useFonts({
    "Oswald-VariableFont_wght": require("./src/fonts/Oswald-VariableFont_wght.ttf"),
  });

  const [screen, setScreen] = useState("Main");

  const handleScreenSelection = selectedScreen => {
    setScreen(selectedScreen);
    console.log(screen)
  }
  
  
  let content = <MainScreen onMainScreenOpt={handleScreenSelection}/>

  switch (screen) {
    case 'Main':
      content=(<MainScreen onMainScreenOpt={handleScreenSelection}/>);
      break;
    case 'Characters':
      content=(<Characters/>);
      break;
    // case 'Teams':
    //   setContent(<Teams/>);
    //   break;
    // case 'Comics':
    //   setContent(<Comics/>);
    //   break;
    default:
      content=(<MainScreen onMainScreenOpt={handleScreenSelection}/>);
  }

  if(!loaded) {
    return null;
  }

    return(
      <View style={styles.container}>
        <Header title={"MarvelitApp"} newStyles={styles.titleContainer} />
        {content}
      </View>
    )
    };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Oswald-VariableFont_wght",
  },
  titleContainer:{
    marginTop: 50,
    color: colors.titleFontColor,
  },
});
