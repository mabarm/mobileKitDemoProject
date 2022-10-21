import * as React from 'react';
import {Keyboard, Platform} from 'react-native';

export default function useIsKeyboardShown({onShow, onHide}) {
  React.useEffect(() => {
    let willShowSubscription;
    let willHideSubscription;
    let didShowSubscription;
    let didHideSubscription;

    if (Platform.OS === 'ios') {
      willShowSubscription = Keyboard.addListener('keyboardWillShow', onShow);
      willHideSubscription = Keyboard.addListener('keyboardWillHide', onHide);
    } else {
      didShowSubscription = Keyboard.addListener('keyboardDidShow', onShow);
      didHideSubscription = Keyboard.addListener('keyboardDidHide', onHide);
    }

    return () => {
      if (Platform.OS === 'ios') {
        if (willShowSubscription?.remove) {
          willShowSubscription.remove();
        } else {
          Keyboard.removeListener('keyboardWillShow', onShow);
        }

        if (willHideSubscription?.remove) {
          willHideSubscription.remove();
        } else {
          Keyboard.removeListener('keyboardWillHide', onHide);
        }
      } else {
        if (didShowSubscription?.remove) {
          didShowSubscription.remove();
        } else {
          Keyboard.removeListener('keyboardDidShow', onShow);
        }

        if (didHideSubscription?.remove) {
          didHideSubscription.remove();
        } else {
          Keyboard.removeListener('keyboardDidHide', onHide);
        }
      }
    };
  }, [onHide, onShow]);
}
