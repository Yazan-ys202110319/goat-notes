"use server";
import { handleError } from "@/lib/utils";

export const loginUserAction = async (email, password) => {
    try {
        const client = await createClient();
        const auth = client.auth;

        const { error } = await auth.signInWithPassword({
            email,
            password
        });

        // if there is an error
        if (error) throw error;

        // if there is no error
        return { errorMessage: null }; 

    }

    catch (error) {
        return handleError(error);
    }

}