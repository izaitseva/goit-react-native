import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import useRoute from './screens/router';

export default function App() {

  const router = useRoute(true);

  return (
    <NavigationContainer>
      {router}
    </NavigationContainer>
  );
}