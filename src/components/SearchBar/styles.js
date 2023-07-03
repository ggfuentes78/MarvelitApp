import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      borderRadius: 5,
      marginVertical:10,
      marginHorizontal: 5,
      padding: 10,
    },
    input: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      fontSize: 16,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    searchButton: {
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 5,
      marginLeft: 5,
    },
    cancelButton: {
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 5,
      marginLeft: 5,
    },
  });

  export default styles;