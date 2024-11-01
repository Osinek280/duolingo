import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
}

export const Sidebar = ({className}: Props) => {
  return (
    <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className)}>
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Duolingo</h1>
      </div>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" src="/learn.webp" href="/learn" />
        <SidebarItem label="Leaderboard" src="🏅" href="/leaderboard" />
        <SidebarItem label="Quests" src="🎯" href="/quests" />
      </div>
    </div>
  );
};
