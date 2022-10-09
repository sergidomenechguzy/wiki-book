import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { nanoid } from "nanoid";
import {
  HomeIcon as HomeIconOutlined,
  DocumentTextIcon as DocumentTextIconOutlined,
} from "@heroicons/react/24/outline";
import { HomeIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

interface IDrawerProps {
  children: ReactNode;
}

interface IListItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  activeIcon: ReactNode;
  active: boolean;
}

const ListItem = ({
  href,
  label,
  icon,
  activeIcon,
  active,
}: IListItemProps) => {
  return (
    <li>
      <Link href={href}>
        <div className={active ? "active" : ""}>
          {active ? activeIcon : icon}
          {label}
        </div>
      </Link>
    </li>
  );
};

const Drawer = ({ children }: IDrawerProps) => {
  const router = useRouter();

  const drawerElements = [
    {
      id: nanoid(5),
      href: "/",
      label: "Home",
      icon: <HomeIconOutlined className="h-5 w-5" />,
      activeIcon: <HomeIcon className="h-5 w-5" />,
    },
    {
      id: nanoid(5),
      href: "/pages",
      label: "Pages",
      icon: <DocumentTextIconOutlined className="h-5 w-5" />,
      activeIcon: <DocumentTextIcon className="h-5 w-5" />,
    },
  ];

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100 sticky top-0 bg-opacity-80 backdrop-blur transition-all duration-100 lg:hidden">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <aside className="w-72 lg:w-60 bg-base-200">
          {/* <h1 className="text-3xl font-bold p-4"> */}
          <h1 className="btn btn-ghost normal-case text-3xl m-4">
            <Link href="/">Wiki</Link>
          </h1>
          <ul className="menu overflow-y-auto p-4 py-0">
            {/* Sidebar */}
            {drawerElements.map((drawerElement) => (
              <ListItem
                key={drawerElement.id}
                href={drawerElement.href}
                label={drawerElement.label}
                icon={drawerElement.icon}
                activeIcon={drawerElement.activeIcon}
                active={router.pathname === drawerElement.href}
              />
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Drawer;
