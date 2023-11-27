'use client';

import { Auth } from '@supabase/auth-ui-react';
import { useEffect } from 'react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useSessionContext } from '@supabase/auth-helpers-react';

const Login = () => {
    const supabaseClient = createClientComponentClient();
    const router = useRouter();

    const { session } = useSessionContext();

    useEffect(() => {
        if (session) router.push('/');
    }, [session]);

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
                    providers={['github', 'google']}
                />
            </div>
        </div>
    );
};

export default Login;
