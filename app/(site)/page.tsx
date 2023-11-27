import Topbar from '@/components/Topbar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
    const images = [];

    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) redirect('login');

    return <div className="w-full h-full">main page</div>;
}
