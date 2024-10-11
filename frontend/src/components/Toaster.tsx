import { ToastContainer,Bounce } from "react-toastify";
const Toaster = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
      transition={Bounce}
    />
  );
}

export default Toaster