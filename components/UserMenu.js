import { Menu, Transition } from "@headlessui/react";

export const UserMenu = () => {
    return (
        <div className="relative inline-block text-left">
            <Menu>
                {({ open }) => (
                    <>
                        <span className="rounded-md shadow-sm">
                            <Menu.Button className="text-ms font-semibold text-gray-500 flex">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                            </Menu.Button>
                        </span>

                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="absolute right-0 z-10  w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                            >
                                <div className="px-4 py-3">
                                    <p className="text-sm leading-5">Signed in as</p>
                                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                        tom@example.com
                        </p>
                                </div>

                                <div className="py-1">

                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#support"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item
                                        as="span"
                                        disabled
                                        className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                    >
                                        New feature (soon)
                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#license"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#sign-out"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>

                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu></div>
    )
}