import { Outlet } from "react-router-dom";
import Header from "../components/Navigation/MainHeader";

export default function Root() {
  return (
    <>
      {/* Todo: Add Header */}
      <Header />
      <Outlet />
    </>
  );
}
