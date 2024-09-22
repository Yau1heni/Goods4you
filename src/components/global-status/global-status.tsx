import {toast, ToastContainer} from "react-toastify";
import {useAppSelector} from "@/hooks";
import {mainSelectors} from "@/store";
import {ERROR_MESSAGE, TOAST_ID} from "@/constants";

export const GlobalStatus = () => {
    const error = useAppSelector(mainSelectors.isError);

    if (error) {
        toast.error(ERROR_MESSAGE, {
            toastId: TOAST_ID
        });
    }

    return (
        <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );
};
