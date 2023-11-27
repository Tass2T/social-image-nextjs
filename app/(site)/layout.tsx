import Topbar from '@/components/Topbar';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface SiteLayoutProps {
    children: React.ReactNode;
}

const SiteLayout = async ({ children }: SiteLayoutProps) => {
    const supabase = createServerActionClient({ cookies });

    const {
        data: { session },
    } = await supabase.auth.getSession();
    if (!session) redirect('/login');

    return (
        <>
            <Topbar />
            {children}
        </>
    );
};

export default SiteLayout;
