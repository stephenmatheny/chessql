import WebPageHeader from "../Web/WebPageHeader";
import MobileNavigation from "./MobileNavigation";
import MobilePageHeader from "./MobilePageHeader";

const MobileLayout = ({ user, children }) => {
 return (
    <div className="sm:hidden flex justify-start min-h-screen bg-cyan-100 dark:bg-cyan-900">
        <div className="flex flex-col size-full">
            <MobilePageHeader user={user} />

            <main>{children}</main>

            <MobileNavigation />
        </div>


    </div>
 );
}

export default MobileLayout;
