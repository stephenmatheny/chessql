import PageHeader from "../Dynamic/PageHeader";
import MobileNavigation from "./MobileNavigation";

const MobileLayout = ({ user, children }) => {
 return (
    <div className="sm:hidden flex justify-start min-h-screen size-full bg-cyan-100 dark:bg-cyan-900">
        <div className="flex flex-col size-full min-h-screen">
            <PageHeader user={user} />

            <main className="flex-grow">{children}</main>

            <MobileNavigation />
        </div>


    </div>
 );
}

export default MobileLayout;
