import { toast } from "react-toastify";

export const toastSuccess = (message) =>
  toast.success(message, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    type: "success",
  });
export const toastError = (message) =>
  toast.error(message, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    type: "error",
  });
