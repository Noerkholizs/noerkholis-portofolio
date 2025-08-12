import { Sidebar } from "@/components/sidebar";
import { MobileNavigation } from "@/components/mobile-navigation";

interface DashBoardLayoutPorps {
    children: React.ReactNode
}

const DashBoardLayout = ({children} : DashBoardLayoutPorps) => {
  return (
    <div className="min-h-screen flex">
        <div className="flex w-full h-full">
            {/* Desktop Sidebar */}
            <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto z-30">
                <Sidebar />
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />

            {/* Main Content */}
            <div className="w-full lg:ml-[264px]">
                <main className="h-full">
                    {children}
                </main>
            </div>
        </div>
    </div>
  )
}

export default DashBoardLayout