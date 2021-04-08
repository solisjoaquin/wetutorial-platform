import Head from 'next/head'
import { useState } from 'react'
import { Menu, Transition } from "@headlessui/react";

const modulos = ["module 1", "module 2", "module 3", "module 4"]

const questionE = []

const questions = [{
  id: 1,
  username: "user",
  likes: 20,
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quam? Sed tenetur debitis enim et consequuntur amet minima esse quam laudantium vel ipsam, alias dolorum nam nobis dolor nulla ducimus",
  selected: false,
  code: true,
  bodyCode: "<div> Lorem ipsum asdad</div>"

},
{
  id: 2,
  username: "username",
  likes: 6,
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quam? Sed tenetur debitis enim et consequuntur amet minima esse quam laudantium vel ipsam, alias dolorum nam nobis dolor nulla ducimus"
  , selected: true,
  code: false,
  bodyCode: ""
},
{
  id: 22,
  username: "username",
  likes: 6,
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quam? Sed tenetur debitis enim et consequuntur amet minima esse quam laudantium vel ipsam, alias dolorum nam nobis dolor nulla ducimus"
  , selected: true,
  code: false,
  bodyCode: ""
},
{
  id: 3,
  username: "username10",
  likes: 5,
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quam? Sed tenetur debitis enim et consequuntur amet minima esse quam laudantium vel ipsam, alias dolorum nam nobis dolor nulla ducimus"
  ,
  selected: false,
  code: true,
  bodyCode: "event - compiled successfully <br /> wait \ncompiling... event - compiled successfully"

},
{
  id: 22,
  username: "username22",
  likes: 6,
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quam? Sed tenetur debitis enim et consequuntur amet minima esse quam laudantium vel ipsam, alias dolorum nam nobis dolor nulla ducimus"
  , selected: true,
  code: false,
  bodyCode: ""
},
{
  id: 26,
  username: "username26",
  likes: 6,
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quam? Sed tenetur debitis enim et consequuntur amet minima esse quam laudantium vel ipsam, alias dolorum nam nobis dolor nulla ducimus"
  , selected: true,
  code: true,
  bodyCode: "const [questionsList, setQuestions] = useState(questions) \nconst [selected, setBgColor] = useState(false)\nconst boxClick = (e) => {\n/*     let idSelected = e.currentTarget.id */\nsetBgColor(!selected)\n}"
},


]

const answers = [{
  username: "user",
  likes: 20,
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quam? Sed tenetur debitis enim et consequuntur amet minima esse quam laudantium vel ipsam, alias dolorum nam nobis dolor nulla ducimus",
  code: true,
  bodyCode: "const [questionsList, setQuestions] = useState(questions) \nconst [selected, setBgColor] = useState(false)\nconst boxClick = (e) => {\n/*     let idSelected = e.currentTarget.id */\nsetBgColor(!selected)\n}"

},
{
  username: "username",
  likes: 6,
  body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quam? Sed tenetur debitis enim et consequuntur amet minima esse quam laudantium vel ipsam, alias dolorum nam nobis dolor nulla ducimus",
  code: false,
  bodyCode: ""

},

]

export default function Home() {
  const [questionsList, setQuestions] = useState(questions)
  const [selected, setBgColor] = useState(false)

  const boxClick = (e) => {
    /*     let idSelected = e.currentTarget.id */
    setBgColor(!selected)

  }


  return (
    <div className="">
      <Head>
        <title>WeTutorial</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex">

        <div className=" px-8 bg-gray-900 hidden sm:flex flex-col items-center h-screen">
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

        <main className=" bg-gray-900 w-full">
          <div className="bg-gray-800 h-16 flex items-center justify-between mb-px">
            <h2 className="text-xl px-8 font-bold text-white">Title of the course</h2>

            <div className="flex px-10 items-center">

              <h1 className="flex-auto text-ms mr-2 text-gray-100">
                Username
              </h1>

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


            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="ms:w-1/2 bg-gray-800 px-8 h-screen mr-px">
              <div className="flex items-center justify-between">
                <h1 className="my-4 text-lg font-semibold text-white">Questions</h1>
                <div className="cursor-pointer">

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
                </div>
              </div>

              {/* <div>
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
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                          Submit
                        </button>
                        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}

              <div className="overflow-auto h-4/5">
                <div className="">

                  {questionsList.map(question => (
                    <div className="flex flex-col" >
                      <div key={question.id} id={question.id} onClick={boxClick} className={`px-5 py-3 mt-3 mb-1 mr-3 ${selected ? "bg-gradient-to-r from-green-600 to-blue-700" : "bg-gray-900"}  shadow-lg rounded-lg`}>
                        <div className="flex flex-wrap items-center">
                          <h1 className={`flex-auto text-lg font-semibold ${selected ? "text-gray-200" : "text-gray-400"}`}>
                            {question.username}
                          </h1>
                          <div className="text-ms font-semibold text-gray-500 flex">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>

                            <p>{question.likes}</p>
                          </div>
                        </div>
                        <p className="my-2 text-gray-200">{question.body}
                        </p>
                      </div>
                      {question.code ?
                        <div className="bg-black pt-2 pb-5 mr-3 rounded-lg font-mono overflow-x-auto">
                          <code>
                            <pre className="text-white py-2 px-3 ">
                              {question.bodyCode}
                            </pre>
                          </code>


                        </div> : null}
                    </div>
                  ))}

                </div>
              </div>

            </div>


            <div className="ms:w-1/2 bg-gray-800 px-8 h-screen">
              <div className="flex items-center justify-between">
                <h1 className="my-4 text-lg font-semibold text-white">Answers</h1>
                <div className="cursor-pointer transition transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="overflow-auto h-4/5">
                <div>

                  {answers.map(answer => (
                    <div>
                      <div className="px-5 py-3 mt-3 mb-1 mr-3 bg-gray-900 shadow-lg rounded-lg">
                        <div className="flex flex-wrap items-center">
                          <h1 className="flex-auto text-lg font-semibold text-gray-400">
                            {answer.username}
                          </h1>
                          <div className="text-ms font-semibold text-gray-500 flex">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>

                            <p>{answer.likes}</p>
                          </div>
                        </div>
                        <p className="my-2 text-gray-200">{answer.body}
                        </p>
                      </div>
                      {answer.code ?
                        <div className="bg-black pt-2 pb-5 mr-3 rounded-lg font-mono overflow-x-auto">
                          <code>
                            <pre className="text-white py-2 px-3 ">
                              {answer.bodyCode}
                            </pre>
                          </code>


                        </div> : null}
                    </div>
                  ))}

                </div>
              </div>

            </div>


          </div>
        </main>
      </div>
    </div>
  )
}
