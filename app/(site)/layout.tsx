import Topbar from '@/components/Topbar';

interface SiteLayoutProps {
    children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
    return (
        <>
            <Topbar />
            {children}
        </>
    );
};

export default SiteLayout;
