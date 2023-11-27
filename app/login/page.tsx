'use client';

import { Auth } from '@supabase/auth-ui-react';
import { useState, useEffect } from 'react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Login = () => {
    const supabaseClient = createClientComponentClient();
    const router = useRouter();

    const [session, setSession] = useState(null);

    supabaseClient.auth.getSession().then((value) => {
        setSession(value.data.session);
    });

    supabaseClient.auth.onAuthStateChange((e) => {
        if (e === 'SIGNED_IN') router.push('/');
    });

    useEffect(() => {
        if (session) redirect('/');
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
                    providers={['github', 'discord', 'facebook', 'google']}
                />
            </div>
        </div>
    );
};

export default Login;
