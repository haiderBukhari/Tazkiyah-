import { toast } from 'react-toastify';

const ToastContainer = (str) => {
    toast.success(str, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}
export default ToastContainer;