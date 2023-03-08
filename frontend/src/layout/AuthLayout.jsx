import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <>
      <main className=" container mx-auto items-center md:grid md:grid-cols-2 mt-11 gap-16 p-5">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
