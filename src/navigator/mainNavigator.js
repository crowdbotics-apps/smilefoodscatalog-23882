import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList193709Navigator from '../features/ArticleList193709/navigator';
import ArticleList193708Navigator from '../features/ArticleList193708/navigator';
import ArticleList193707Navigator from '../features/ArticleList193707/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList193709: { screen: ArticleList193709Navigator },
ArticleList193708: { screen: ArticleList193708Navigator },
ArticleList193707: { screen: ArticleList193707Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
