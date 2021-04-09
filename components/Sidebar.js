const modulos = ["module 1", "module 2", "module 3", "module 4"]

export const Sidebar = () => {
    return (
        <div className=" px-5 bg-gray-900 hidden sm:flex flex-col items-center h-screen">
            <div className="pt-6 font-bold text-white">
                WeTutorial
          </div>
            <div className="py-16" >
                <ul>
                    {modulos.map(mod =>
                    (
                        <li className="my-3 py-1 bg-gray-900 font-sm cursor-pointer rounded-md text-white">{mod}</li>
                    )
                    )}

                </ul>
            </div>
        </div>
    )
}