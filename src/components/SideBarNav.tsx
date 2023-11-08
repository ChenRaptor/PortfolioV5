"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  Cog6ToothIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
//   {
//     name: 'Teams',
//     icon: UsersIcon,
//     current: false,
//     children: [
//       { name: 'Engineering', href: '#' },
//       { name: 'Human Resources', href: '#' },
//       { name: 'Customer Success', href: '#' },
//     ],
//   },
//   {
//     name: 'Projects',
//     icon: FolderIcon,
//     current: false,
//     children: [
//       { name: 'GraphQL API', href: '#' },
//       { name: 'iOS App', href: '#' },
//       { name: 'Android App', href: '#' },
//       { name: 'New Customer Portal', href: '#' },
//     ],
//   },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBarNav() {
  return (
    <div className="flex grow flex-col bg-white w-40 max-w-[15.5rem] min-w-[15.5rem] bg-primary-100">


      <div className="w-full min-h-[4rem] flex h-16 shrink-0 items-center bg-primary-200">
        {/* <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}
      </div>


      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <h2 className="text-text-400 text-xs py-4 px-8">NAVIGATION</h2>
            <ul role="list" className="space-y-1 bg-primary-50 py-2">

              {navigation.map((item) => (
                <li key={item.name} className="px-2 hover:text-text-200 text-text-50">

                  {!item.children ? (

                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md px-5 items-center text-sm leading-6 font-semibold py-4 hover:bg-primary-300'
                      )}
                    >
                      <item.icon className="h-5 w-5 shrink-0 mr-4" aria-hidden="true" />
                      {item.name}
                    </a>

                  ) : (

                    // <Disclosure as="div">
                    //   {({ open }) => (
                    //     <>
                    //       <Disclosure.Button
                    //         className={classNames(
                    //           item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                    //           'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-text-50'
                    //         )}
                    //       >
                    //         <item.icon className="h-5 w-5 shrink-0 text-text-50" aria-hidden="true" />
                    //         {item.name}
                    //         <ChevronRightIcon
                    //           className={classNames(
                    //             open ? 'rotate-90 text-gray-500' : 'text-text-50',
                    //             'ml-auto h-5 w-5 shrink-0'
                    //           )}
                    //           aria-hidden="true"
                    //         />
                    //       </Disclosure.Button>
                    //       <Disclosure.Panel as="ul" className="mt-1 px-2">
                    //         {item.children.map((subItem) => (
                    //           <li key={subItem.name}>
                    //             {/* 44px */}
                    //             <Disclosure.Button
                    //               as="a"
                    //               href={subItem.href}
                    //               className={classNames(
                    //                 subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                    //                 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-text-50'
                    //               )}
                    //             >
                    //               {subItem.name}
                    //             </Disclosure.Button>
                    //           </li>
                    //         ))}
                    //       </Disclosure.Panel>
                    //     </>
                    //   )}
                    // </Disclosure>
                    <p>List</p>
                    
                  )}
                </li>
              ))}
            </ul>

          </li>
          <li className="mt-auto">
            <ul role="list" className="space-y-1 bg-primary-700 py-2">
                <li key="setting" className="px-2 hover:text-text-200 text-text-50">
                    <a
                      href=""
                      className="group flex items-center gap-x-3 rounded-md px-5 text-sm leading-6 font-semibold py-2"
                    >
                            <Cog6ToothIcon className="h-5 w-5 shrink-0 mr-4" aria-hidden="true"/>
                            Settings
                    </a>
                </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}