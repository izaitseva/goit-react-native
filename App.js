import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
