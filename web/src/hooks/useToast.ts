import { type ToastOptions, toast } from "react-toastify"

interface ShowToastProps {
  message: string
  type: "error" | "info"
}

export const useToast = () => {
  const baseParams: ToastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }

  const showToast = ({ message, type }: ShowToastProps) => {
    const typeMap = {
      info: toast.info,
      error: toast.error,
    }

    const toastFn = typeMap[type]
    toastFn(message, baseParams)
  }

  return { showToast }
}
