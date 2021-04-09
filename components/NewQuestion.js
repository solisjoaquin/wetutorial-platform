import { Menu, Transition } from "@headlessui/react";

export const NewQuestion = () => {
    return (
        <div className="relative inline-block text-left">
            <Menu>
                {({ open }) => (
                    <>
                        <span className="rounded-md shadow-sm">
                            <Menu.Button className="text-ms font-semibold text-gray-500 flex">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                                className="absolute right-0 z-10  w-96 mt-2 origin-top-right border border-gray-900 divide-y  rounded-md shadow-lg outline-none"
                            >
                                <div className="bg-gray-700 py-2 px-2 rounded-lg">
                                    <form action="">
                                        <div>
                                            <div>
                                                <label for="about" className="block text-sm font-medium text-gray-300">
                                                    Question
            </label>
                                                <div className="mt-1">
                                                    <textarea id="about" name="about" rows="3" className="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Write your question here"></textarea>
                                                </div>
                                                <div className="flex items-start mt-2">

                                                    <div className="flex items-center h-5">
                                                        <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 bg-black h-4 w-4 text-red-600 border-gray-300 rounded" />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label for="comments" className="font-medium text-gray-200">Anonym</label>
                                                        <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                <Menu.Item>
                                                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                                        Submit
            </button></Menu.Item>
                                                <Menu.Item>
                                                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                        Cancel
            </button></Menu.Item>
                                            </div>
                                        </div>
                                    </form>
                                </div>



                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu></div>
    )
}