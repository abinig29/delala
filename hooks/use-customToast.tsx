import { toast } from "./use-toast";

const useSuccessToasts = () => {
    type SendErrorType = {
        email: string;
        sendPdfToMail: (email: string) => void;
    };

    const loginSuccess = () => {
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



    return {
        loginSuccess,
        pdfGenerationSuccess,
        saveInvoiceSuccess,
        modifiedInvoiceSuccess,
        sendPdfSuccess,
    };
};

export default useSuccessToasts;
