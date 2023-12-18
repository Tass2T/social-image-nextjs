'use client';

import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useSessionContext } from '@supabase/auth-helpers-react';
import Image from 'next/image';

const Login = () => {
    const supabaseClient = createClientComponentClient();
    const router = useRouter();

    const { session } = useSessionContext();

    const logWithGoogle = async () => {
        const { error } = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) {
            console.error('An error has occured with authentification');
        }
    };

    useEffect(() => {
        if (session) router.push('/');
    }, [session]);

    return (
        <div className="w-full h-full flex justify-center items-center ">
            <button
                className=" w-3/6 border-2 relative overflow-hidden border-teal-200  bg-gradient-to-r from-teal-200 to-white rounded-md  before:content-[''] before:absolute before:-inset-x-2 before:-inset-y-12 before:bg-teal-200 before:opacity-20 before:skew-x-12 before:skew-y-44 before:-translate-x-full hover:before:translate-x-0 before:duration-200"
                onClick={logWithGoogle}
            >
                <div className="bg-black text-base flex justify-center items-center gap-8 p-6 rounded-md h-full">
                    <Image
                        src="/google.png"
                        alt="google icon"
                        width={24}
                        height={24}
                    ></Image>
                    Se connecter avec Google
                </div>
            </button>
        </div>
    );
};

export default Login;
