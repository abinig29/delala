// ShadCn
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";

const useSucessToasts = () => {
    type SendErrorType = {
        email: string;
        sendPdfToMail: (email: string) => void;
    };

    const loginSucess = () => {
        toast({
            variant: "default",
            title: "Login success",
            description: "Successfully logged in too your account",
        });
    };


    const pdfGenerationSuccess = () => {
        toast({
            variant: "default",
            title: "Your invoice has been generated!",
            description:
                "You can preview, download, or save it from the actions tab",
        });
    };

    const saveInvoiceSuccess = () => {
        toast({
            variant: "default",
            title: "Saved Invoice",
            description: "Your invoice details are saved now",
        });
    };

    const modifiedInvoiceSuccess = () => {
        toast({
            variant: "default",
            title: "Modified Invoice",
            description: "Successfully modified your invoice",
        });
    };

    const sendPdfSuccess = () => {
        toast({
            variant: "default",
            title: "Email sent",
            description: "Your invoice has been sent to the specified email",
        });
    };

    const loginError = (message: string) => {
        toast({
            variant: "destructive",
            title: "Error",
            description: `${message}`,
            action: (
                <ToastAction
                    // onClick={() => sendPdfToMail(email)}
                    altText="Try again"
                >
                    Try again
                </ToastAction>
            ),
        });
    };

    return {
        loginSucess,
        pdfGenerationSuccess,
        saveInvoiceSuccess,
        modifiedInvoiceSuccess,
        sendPdfSuccess,
        loginError,
    };
};

export default useSucessToasts;
