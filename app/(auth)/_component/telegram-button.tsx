import { Button, buttonVariants } from "@/components/ui/button"

export default function TelegramSignInButton() {
    return (
        <a
            href={'https://t.me/AbelDelalaBot'}
            className={buttonVariants({
                variant: "outline",
                className: "w-full bg-white text-black hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            })}
        // variant="outline"
        // className="w-full bg-white text-black hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2s-.21-.05-.3-.03c-.1.02-1.76 1.11-4.95 3.28-.47.32-.89.47-1.27.46-.42-.01-1.22-.24-1.82-.44-.73-.24-1.32-.37-1.27-.79.03-.24.28-.48.77-.74 3.03-1.31 5.05-2.18 6.08-2.62 2.86-1.23 3.47-1.45 3.87-1.45.09 0 .28.02.41.12.11.08.19.21.21.34.02.14.03.28.01.41z" />
            </svg>
            Sign in  with Telegram
        </a>
    )
}