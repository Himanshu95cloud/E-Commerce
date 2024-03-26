// PrivateRoutes.tsx
import { RouteObject } from "react-router-dom";
import EmailVerification from "../modules/authContainer/verification";
import MarkInterest from "../modules/shoppingIntrest";

const PrivateRoutes: RouteObject[] = [
  {
    path: "email-verification",
    element: <EmailVerification />,
  },
  {
    path: "shopping-intrest",
    element: <MarkInterest />,
  },
];

export default PrivateRoutes;
