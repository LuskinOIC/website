"use client";

import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
  const [isPatientCareOpen, setIsPatientCareOpen] = React.useState(false);
  const [isMedicalProfessionalsOpen, setIsMedicalProfessionalsOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  const [isWaysToGiveOpen, setIsWaysToGiveOpen] = React.useState(false);

  const toggleHamburgerDropdown = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const togglePatientCareDropdown = () => {
    setIsPatientCareOpen(!isPatientCareOpen);
  };

  const toggleMedicalProfessionalsDropdown = () => {
    setIsMedicalProfessionalsOpen(!isMedicalProfessionalsOpen);

  };
  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isMedicalProfessionalsOpen);

  };
  const toggleWaysToGiveDropdown = () => {
    setIsWaysToGiveOpen(!isWaysToGiveOpen);
  };
  return (
    <NavigationMenu className=''>
      <NavigationMenuList>
        <NavigationMenuItem className='hidden md:flex ml-auto bg-purple-700 px-3 py-1 font-medium text-white text-xs rounded-bl-lg'>
          Urgent Care - Save My Spot
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ul className='hidden md:flex ml-auto text-xs font-bold bg-blue-300 text-black py-1 px-3'>
            <li className='mr-4'> 2137421000 </li>
            <li className='mr-4'> MyChart </li>
            <li className='mr-4'> Espanol </li>
          </ul>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className='flex items-end justify-between py-3'>
        <NavigationMenuItem className='px-3'>
          <Image
            src={"/logo.svg"}
            alt={"Logo"}
            width={72}
            height={62}
            style={{}}
          />
        </NavigationMenuItem>
        {/* mobile */}

        <NavigationMenuItem className='navbar mt-8 justify-end relative container flex w-full md:hidden'>
          <button className='bg-transparent text-white rounded-full p-2'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button
            onClick={toggleHamburgerDropdown} // Toggle the dropdown on button click
            className='bg-transparent text-white rounded-full p-2'
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </NavigationMenuItem>

        {/* mobile */}
        <NavigationMenuList className='hidden md:flex'>
          <NavigationMenuItem>
            <div
              className='relative text-white px-6 pb-10'
              onMouseEnter={togglePatientCareDropdown}
              onMouseLeave={() => setIsPatientCareOpen(false)} // Close on mouse leave
            >
              <button onClick={togglePatientCareDropdown}>Patient Care</button>
              <div
                className={`absolute mt-2 ${
                  isPatientCareOpen ? "block" : "hidden"
                }`}
              >
                <ul className='flex flex-col bg-[#0076AD] border border-blue-400 rounded-md w-64 items-start'>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 1
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 2
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 3
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div
              className='relative text-white px-6 pb-10'
              onMouseEnter={toggleMedicalProfessionalsDropdown}
              onMouseLeave={() => setIsMedicalProfessionalsOpen(false)} // Close on mouse leave
            >
              <button onClick={toggleMedicalProfessionalsDropdown}>
                Medical Professionals
              </button>
              <div
                className={`absolute mt-2 ${
                  isMedicalProfessionalsOpen ? "block" : "hidden"
                }`}
              >
                <ul className='flex flex-col bg-[#0076AD] border border-blue-400 rounded-sm w-64 items-start'>
                  <li className='border-b border-blue-400 w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 1
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className='border-b border-blue-400 rounded-md w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 2
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className='border-b border-blue-400 w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 3
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div
              className='relative text-white px-6 pb-10'
              onMouseEnter={toggleAboutDropdown}
              onMouseLeave={() => setIsAboutOpen(false)} // Close on mouse leave
            >
              <button onClick={toggleAboutDropdown}>
                About
              </button>
              <div
                className={`absolute mt-2 ${
                  isAboutOpen ? "block" : "hidden"
                }`}
              >
                <ul className='flex flex-col bg-[#0076AD] border border-blue-400 rounded-sm w-64 items-start'>
                  <li className='border-b border-blue-400 w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 1
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className='border-b border-blue-400 rounded-md w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 2
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className='border-b border-blue-400 w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 3
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div
              className='relative text-white px-6 pb-10'
              onMouseEnter={toggleWaysToGiveDropdown}
              onMouseLeave={() => setIsWaysToGiveOpen(false)} // Close on mouse leave
            >
              <button onClick={toggleWaysToGiveDropdown}>
                Ways To Give
              </button>
              <div
                className={`absolute mt-2 ${
                  isWaysToGiveOpen ? "block" : "hidden"
                }`}
              >
                <ul className='flex flex-col bg-[#0076AD] border border-blue-400 rounded-sm w-64 items-start'>
                  <li className='border-b border-blue-400 w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 1
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className='border-b border-blue-400 rounded-md w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 2
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className='border-b border-blue-400 w-64'>
                    <NavigationMenuLink asChild>
                      <a href='/' className='px-4 py-2'>
                        Link 3
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem className='relative text-white px-6 pb-10'>
            <button className='text-black bg-yellow-200 rounded-md w-32 text-center py-2'>
              Donate
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuList>
      <NavigationMenuList className='md:hidden'>
        {isHamburgerOpen && (
          // Conditionally render the dropdown content when isDropdownOpen is true
          // <NavigationMenuItem className='bg-red-400 w-full absolute justify-items-center top-12 mt-1 p-4'>
          <ul className='w-full text-sm flex justify-center items-center flex-col'>
            <li className='text-white bg-purple-700 w-full text-center py-2'>
              <Link href='/item1'> URGENT CARE </Link>
            </li>
            <li className='text-white w-full text-center py-2'>
              <button> PATIENT CARE </button>
            </li>
            <li className='text-white w-full text-center py-2'>
              <Link href='/item2'> FOR MEDICAL PROFESSIONALS </Link>
            </li>
            <li className='text-white w-full text-center py-2'>
              <Link href='/item2'> ABOUT LUSKINOIC </Link>
            </li>
            <li className='text-white w-full text-center py-2'>
              <Link href='/item2'> WAYS TO GIVE </Link>
            </li>
            <li className='text-black w-full text-center py-2 bg-yellow-50'>
              <Link href='/item2'> MY CHART </Link>
            </li>
            <li className='text-black w-full text-center py-2 bg-white'>
              <Link href='/item2'></Link>
              <button
                onClick={toggleHamburgerDropdown} // Toggle the dropdown on button click
              >
                CLOSE
              </button>
            </li>
          </ul>
        )}
      </NavigationMenuList>


    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
