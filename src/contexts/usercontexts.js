import { createContext, useState, useEffect } from 'react';

import {
  onAuthChangedListener,
  storeUserAuthData
} from '../utils/firebase/firestore.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthChangedListener((user) => {
      if (user) {
        storeUserAuthData(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};