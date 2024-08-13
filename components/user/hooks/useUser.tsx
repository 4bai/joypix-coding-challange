'use client'

import React, { useState, useContext, createContext, useEffect } from "react";
import { createClient } from '@/utils/supabase/client'

export const UserContext = createContext({
    user: null,
    setUser: (user) => { },
});

export const UserProvider = ({ children }) => {
    const supabase = createClient();
    const fetchUser = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        console.log('fetch user', user);
        return user;
    }

    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(fetchUser());
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default function useUser() {
    const { user, setUser } = useContext(UserContext);
    return [user, setUser];
}