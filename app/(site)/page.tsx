import Topbar from '@/components/Topbar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface Homeprops {
    chidren: React.ReactNode;
}

export default async function Home({ chidren }: Homeprops) {
    const images = [];

    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) redirect('login');

    return (
        <div className="w-full h-full">
            <Topbar></Topbar>
            {chidren}
        </div>
    );
}
