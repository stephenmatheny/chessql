import WebLayout from '@/Components/Web/WebLayout';
import MobileLayout from '@/Components/Mobile/MobileLayout';

const MainLayout = ({ user, header, children }) => {
    return (
        <div>
            <WebLayout user={user} children={children} />
            <MobileLayout user={user} children={children} />
        </div>
    );
}

export default MainLayout;
