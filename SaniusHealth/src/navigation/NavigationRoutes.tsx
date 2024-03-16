import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/Dashboard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../pages/Login';
import EditCell from '../pages/EditCell';
import RearrangeBottomTab from '../pages/RearrangeBottomTab';
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                    headerShown: false
                }}
            >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="EditText" component={EditCell} />
            <Stack.Screen name="RearrangeBottomTab" component={RearrangeBottomTab} />

            </Stack.Navigator>
        </NavigationContainer>
    );
  }
  
  export default App;