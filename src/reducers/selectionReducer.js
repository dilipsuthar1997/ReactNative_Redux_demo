import { ToastAndroid } from 'react-native';

export default (state = null, action) => {
   switch(action.type) {
       case 'select_library': {
            //ToastAndroid.show(action.payload.toString(), ToastAndroid.SHORT);
            return action.payload;
       };
       default:
           return state;
   }
};