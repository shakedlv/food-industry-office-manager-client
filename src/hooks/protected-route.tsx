import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";
import UnauthorizedPage from "../routes/unauthorized-page/unauthorized-page";


type ProtectedRouteProps = {
    children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useAuth0();
    if (!user) {
        // user is not authenticated
        return <UnauthorizedPage />;
    }
    return children;
};