import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ContactsPage from "./Contacts";
import NotFound from "./NotFound";
import { RootLayout } from "./RootLayout";
import ContactDetail from "./ContactDetail";
import HomePage from "./Home";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<RootLayout />}
      errorElement={<NotFound />}
      // loa
    >
      <Route path="" element={<HomePage />}></Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
      <Route path="/contacts/:id" element={<ContactDetail />}></Route>
    </Route>
  )
);

export const appRouter2 = createBrowserRouter([
  {
    path: "",
    Component: RootLayout,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <h2>My Home Page</h2>,
      },
      {
        path: "/contacts",
        // element: <ContactsPage/>
        Component: ContactsPage,
      },
      {
        path: "/contacts/:id",
        Component: ContactDetail,
      },
    ],
  },
]);
