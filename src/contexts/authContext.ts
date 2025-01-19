// import { createContext, ReactNode, useContext, useState } from 'react';
// import { User } from '../interfaces/user.interface';

// interface AuthContextType {
//     user: Omit<User, 'id' | 'username'> | null;
//     login: (userData: Omit<User, 'id' | 'username'>) => void;
//     logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//     const [user, setUser] = useState<Omit<User, 'id' | 'username'> | null>(null);

//     const login = (userData: Omit<User, 'id' | 'username'>) => {
//         setUser(userData);
//         localStorage.setItem('user', JSON.stringify(userData));
//     };

//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('user');
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };
