import { StyleSheet, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import colors from './src/constants/colors';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    "Oswald-VariableFont_wght": require("./src/fonts/Oswald-VariableFont_wght.ttf"),
  });

   
  if(!loaded) {
    return null;
  }

    return(
       <AppNavigator/>
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
});
