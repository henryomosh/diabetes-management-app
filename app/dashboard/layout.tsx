import SideNav from "@/app/ui/dashboard/sidenav";
import UserDropdown from "../ui/dashboard/user-dropdown";
import { lusitana } from "@/app/ui/fonts";
// export const experimental_ppr = true; // Enable PPR

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-56">
        <SideNav />
      </div>
      <div className="flex-grow  md:p-0  md:py-2">
        <div className="shadow-xl  p-3 py-5 mb-4 border-bottom">
          <span className={`${lusitana.className}  text-xl md:text-2xl `}>
            Dashboard
          </span>
          <UserDropdown />
        </div>
        <div className="md:overflow-auto h-screen">{children}</div>
      </div>
    </div>
  );
}
