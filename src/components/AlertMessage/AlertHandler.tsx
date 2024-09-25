import { Alert, AlertDescription, AlertTitle } from "@/components/UI/alert";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { AlertType } from "./Interfaces/IAlertTypes";

export const AlertMessage = ({ type, message }: { type: AlertType; message: string }) => {
    const icons = {
        error: AlertCircle,
        success: CheckCircle,
        info: Info,
        warning: AlertTriangle
    };

    const Icon = icons[type];
    const variants: { [key in AlertType]: "default" | "destructive" | "success" | "info" | "warning" } = {
        error: "destructive",
        success: "success",
        info: "info",
        warning: "warning"
    };
	
    const titles = {
        error: "Error",
        success: "Success",
        info: "Information",
        warning: "Warning"
    };

    return (
        <Alert variant={variants[type]} className="mb-4">
            <Icon className="h-4 w-4" />
            <AlertTitle>{titles[type]}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
};