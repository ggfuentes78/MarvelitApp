import { StyleSheet, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import colors from './src/constants/colors';
import { init } from './src/db';
import store from './src/store';
import { useFonts } from 'expo-font';

init()
  .then(() => console.log("Base de datos inicializada"))
  .catch(err => {
    console.log("Conexion con BD fallida!")
    console.log(err.message);
  });

export default function App() {
  
  const [loaded] = useFonts({
    "Oswald-VariableFont_wght": require("./src/fonts/Oswald-VariableFont_wght.ttf"),
  });
   
  if(!loaded) {
    return null;
  }

    return(
      
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNavigator/>
        </NavigationContainer>
      </Provider>
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
