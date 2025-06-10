"use server";
import { handleError } from "@/lib/utils";
import { createClient } from "@/auth/server";

export const loginAction = async (email, password) => {
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


export const signUpAction = async (email, password) => {
    try {
        const client = await createClient();
        const auth = client.auth;

        const { data, error } = await auth.signUp({
            email,
            password
        });

        // if there is an error
        if (error) throw error;

        const userId = data.user?.id;
        if (!userId) throw new Error('Error singing up');

        // if there is no error
        return { errorMessage: null }; 

    }

    catch (error) {
        return handleError(error);
    }

}