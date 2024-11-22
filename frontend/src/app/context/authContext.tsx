import { createContext, useContext } from "react";
import { useState } from "react";

// Define the context type
interface AuthContextType {
  userRole: string | undefined;
  setUserRole: (role: string) => void;
  setIsRegistered: (isRegistered: boolean) => void;
  isRegistered: boolean;
}

// Create context with type and default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook with type safety
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}

// Provider component with type safety
interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userRole, setuserRole] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const value: AuthContextType = {
    userRole,
    setIsRegistered: setIsRegistered,
    isRegistered: isRegistered,
    setUserRole: setuserRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}