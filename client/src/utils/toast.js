import { toast } from "react-toastify";

export const toastSuccess = (message) =>
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    type: "success",
  });
export const toastError = (message) =>
  toast.error(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    type: "error",
  });
