import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge"

interface SidebarItemProps {
  icon: IconType
  label: string
  active?: boolean
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href
}) => {
  return ( 
    <Link
       href={href}
       className={twMerge(`
         flex
         flex-row
         h-auto
         items-center
         w-full
         gap-x-4
         text-md
         font-medium
         cursor-pointer
         hover:text-orange-400
         transition
         text-neutral-400
       `,
         active && 'text-orange-400'
       )}
    >
      <Icon size={26}/>
      <p className="truncate w-full">{label}</p>
    </Link>
   );
}
 
export default SidebarItem;