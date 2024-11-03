import { Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Routers,
  Routes
} from "react-router-dom";
import { Loading } from "../components";
import AuthRoutes from "../components/core-module/auth-routes/AuthRoutes";
import { Login } from "../pages";
import Dashboard from "../pages/user-module/dashboard/Dashboard";
import { ROUTES } from "../utility/constant";
import Counter from "../pages/user-module/counter/Counter";
import LanguageSwitcher from "../components/core-module/language-switcher/LanguageSwitcher";
import NavBar from "../components/core-module/nav-bar/NavBar";
import Roles from "../pages/roles-module/Roles";
import SearchProvider from "../utility/context/provider/SearchProvider";

/**
 * The main application router.
 *
 * This component wraps the entire application in a `<SearchProvider>`, which
 * provides the search context to all components in the application.
 *
 * The router uses the `<Suspense>` component from React to handle loading states.
 * All routes are wrapped in the `<AuthRoutes>` component, which redirects to the
 * login page if the user is not authenticated.
 *
 * The router contains two types of routes: public routes and protected routes.
 * Public routes are accessible by anyone and do not require authentication.
 * Protected routes require authentication and will redirect to the login page
 * if the user is not authenticated.
 *
 * The public routes are:
 * - `/login`: The login page
 * - `/*`: A catch-all route that redirects to the login page
 *
 * The protected routes are:
 * - `/dashboard`: The dashboard page
 * - `/roles`: The roles page
 *
 * All protected routes are wrapped in the `<NavBar>` component.
 */
const Router: React.FC = (): JSX.Element => {
  return (
    <SearchProvider>
      <Routers>
        <Suspense fallback={<Loading />}>
          {/* <LanguageSwitcher /> */}
          <Routes>
            {/** Public Routes */}
            <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            {/** Protected Routes */}
            <Route element={<AuthRoutes />}>
              <Route element={<NavBar />}>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={ROUTES.ROLES} element={<Roles />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Routers>
    </SearchProvider>
  );
};

export default Router;
