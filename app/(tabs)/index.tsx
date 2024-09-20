import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "@/src/navigation/RootNavigation";
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import store from "@/src/redux/store";
import { Provider } from "react-redux"
import * as Linking from "expo-linking"

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const prefix = Linking.createURL("/")

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Bildirimler: {
          screens: {
            CartScreen: {
              path: "cartScreen/ContentId/:contentId",
              parse:{
                contentId:(message:string)=>`${message}`
              }
            }
          }
        }
      }
    }
  };
  return (
    <Provider store={store}>
      <NavigationContainer independent={true} linking={linking}>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "white"
  }
});

