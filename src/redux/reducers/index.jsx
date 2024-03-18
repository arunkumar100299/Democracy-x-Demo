import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../../pages/user/slice';
import modeReducer from '../../DarkMode/DarkModeSlice';
import langReducer from '../../language/LanguageSlice';
import menuReducer from '../../layout/MenuSlice';
import layoutReducer from '../../layout/LayoutSlice';

const rootReducer = combineReducers({
  user: userReducer,
  screenMode: modeReducer,
  langMode: langReducer,
  menuToggle: menuReducer,
  layout: layoutReducer,
});

export default rootReducer;
