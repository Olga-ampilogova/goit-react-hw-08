import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBaar";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
