import { createAuthClient } from "better-auth/react"
import { toast } from "react-toastify";
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})


export const googleSignIn = async () => {
    await authClient.signIn.social({
        provider: "google",
    }, {
        onSuccess: (data) => {
            // Runs immediately after the sign-in request is initiated 
            // successfully, but before the browser redirects to Google.
            // toast.success("Z in with Google!");
        },
        onError: (error) => {
            toast.error("Failed to log in with Google");
        }
    });
};

export const gitHubSignIn = async () => {

    await authClient.signIn.social({
        provider: "github"
    }, {
        onSuccess: (data) => {
            // Runs immediately after the sign-in request is initiated 
            // successfully, but before the browser redirects to GitHub.
            // toast.success("Logged in with GitHub!");
        },
        onError: (error) => {
            toast.error("Failed to log in with GitHub");
        }
    });
};