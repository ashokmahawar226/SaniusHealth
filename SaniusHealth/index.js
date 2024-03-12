/**
 * @format
 */

import {AppRegistry} from 'react-native';
import NavigationRoutes from './src/navigation/NavigationRoutes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavigationRoutes);
