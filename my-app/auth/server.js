import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = cookies();

  const client = createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (err) {}
        },
      },
    }
  );
  return client;
}

export async function getUser() {
    try {
        const client = await createClient();
        const auth = client.auth;

        const { data, error } = await auth.getUser();

        if (error) {
            console.error(error);
            return null; // if there is an error
        }

        return data.user;
    } catch (error) {
        console.error("Auth error:", error.message);
        return null; // Return null for any exceptions, including AuthSessionMissingError
    }
}
