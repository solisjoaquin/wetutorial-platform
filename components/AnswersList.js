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

export const AnswersList = () => {
    return (
        <div className="overflow-auto lg:h-2/3 w-96  xl:w-full">
            <div>

                {answers.map(answer => (
                    <div className="flex flex-col ">
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
    )
}