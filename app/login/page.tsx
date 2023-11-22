'use client';

import { Auth } from '@supabase/auth-ui-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const Login = () => {
    const supabaseClient = useSupabaseClient();
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="h-auto w-3/6 bg-light-black rounded-sm p-8">
                <Auth
                    theme="dark"
                    magicLink
                    supabaseClient={supabaseClient}
                    appearance={{
                        theme: ThemeSupa,
                        variables: {
                            default: {
                                colors: {
                                    brand: '#404040',
                                    brandAccent: '#FFDEDE',
                                },
                            },
                        },
                    }}
                    providers={['github', 'discord', 'facebook', 'google']}
                />
            </div>
        </div>
    );
};

export default Login;
