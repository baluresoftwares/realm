import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
    "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
    {
        variants: {
            variant: {
                default: "bg-slate-950 text-slate-50 border-slate-700 dark:bg-background dark:text-foreground",
                destructive:
                    "border-red-700 text-red-700 [&>svg]:text-red-700 dark:border-red-200 dark:text-red-200 dark:[&>svg]:text-red-200",
                success: 
                    "border-emerald-700 text-emerald-700 [&>svg]:text-emerald-700 dark:border-emerald-200 dark:text-emerald-200 dark:[&>svg]:text-emerald-200",
                info:
                    "border-indigo-700 text-indigo-700 [&>svg]:text-indigo-700 dark:border-indigo-200 dark:text-indigo-200 dark:[&>svg]:text-indigo-200",
                warning: 
                    "border-yellow-700 text-yellow-700 [&>svg]:text-yellow-700 dark:border-yellow-200 dark:text-yellow-200 dark:[&>svg]:text-yellow-200",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn("mb-1 font-medium leading-none tracking-tight", className)}
        {...props}
    />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm [&_p]:leading-relaxed", className)}
        {...props}
    />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }