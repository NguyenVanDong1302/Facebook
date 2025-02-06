import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { auth, db } from '~/firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const usersCollectionRef = collection(db, 'users');
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            if (currentUser) {
                await getUsers(user.uid); // Gọi hàm getUsers và truyền uid
            }
        });

        // Cleanup function to unsubscribe from the auth listener
        return () => unsub();
    }, []);

    const getUsers = async (uid) => {
        const data = await getDocs(usersCollectionRef);
        const dataGeted = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) // Lọc người dùng không phải là currentUser
        
        // setListUser(dataGeted); // Cập nhật danh sách người dùng
        
        const foundUser = dataGeted.find((user) => user.uid === uid);
        if (foundUser) {
            setCurrentUser((prevUser) => ({
                ...prevUser,
                ...foundUser,
            }));
        }
    };
    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
