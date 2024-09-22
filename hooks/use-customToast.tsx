import { ToastAction } from "@/components/ui/toast";
import { toast } from "./use-toast";

const useSuccessToasts = () => {

    const errorWithAction = (message: string, onErrorAction: () => void) => {
        toast({
            variant: "destructive",
            title: "Error",
            description: `${message}`,
            action: (
                <ToastAction
                    onClick={() => onErrorAction()}
                    altText="Try again"
                >
                    Try again
                </ToastAction>
            ),
        });
    };
    const loginSuccess = () => {
        toast({
            variant: "default",
            title: "Login success",
            description: "Successfully logged in too your account",
        });
    };

    const productCreated = () => {
        toast({
            variant: "default",
            title: "Product created",
            description: "You have successfully created your product",
        });
    }
    const productUpdated = () => {
        toast({
            variant: "default",
            title: "Product updated",
            description: "You have successfully updated your product",
        });
    }
    const changePasswordSuccess = () => {
        toast({
            variant: "default",
            title: "Password change success",
            description: "You have successfully changed your password",
        });
    };

    const signUpSuccess = () => {
        toast({
            variant: "default",
            title: "Sign Up successfully",
            description: "Please Check your email to verify your account",
        });
    };
    const verificationSuccess = () => {
        toast({
            variant: "default",
            title: "Verified successfully",
            description: "Your email has been verified successfully",
        });
    };



    const errorNoAction = (message: string) => {
        toast({
            variant: "destructive",
            title: "Error",
            description: `${message}`,

        });
    }
    return {
        loginSuccess,
        signUpSuccess,
        errorWithAction,
        errorNoAction,
        changePasswordSuccess,
        verificationSuccess,
        productCreated,
        productUpdated
    };
};

export default useSuccessToasts;
