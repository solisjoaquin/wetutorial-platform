import Head from 'next/head'

import { Sidebar } from '../components/Sidebar'
import { UserMenu } from '../components/UserMenu';
import { NewQuestion } from '../components/NewQuestion';
import { AnswersList } from '../components/AnswersList';
import { QuestionList } from '../components/QuestionList';

const questionE = []




export default function Home() {

  return (
    <div className="lg:overflow-hidden">
      <Head>
        <title>WeTutorial</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex w-full bg-red-300">
        <Sidebar />
        <main className=" bg-gray-900 w-full h-screen">

          <div className="bg-gray-800 h-16 flex items-center justify-between mb-px ">
            <h2 className="text-xl px-4 font-bold text-white">Title of the course</h2>
            <div className="flex pr-10 items-center">
              <h1 className="flex-auto text-sm mr-2 text-gray-100">
                Username
              </h1>
              <UserMenu />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mb-1 h-screen">

            <div className="sm:w-1/2 bg-gray-800 px-4 sm:h-screen mr-px mt-px">
              <div className="flex items-center justify-between">
                <h1 className="my-4 text-lg font-semibold text-white">Questions</h1>
                <div className="cursor-pointer">

                  <NewQuestion />
                </div>
              </div>
              <QuestionList />

            </div>


            <div className="sm:w-1/2 bg-gray-800 px-4 sm:h-screen mt-12 lg:mt-px">
              <div className="flex items-center justify-between">
                <h1 className="my-4 text-lg font-semibold text-white">Answers</h1>
                <div className="cursor-pointer">

                  <NewQuestion />
                </div>
              </div>

              <AnswersList />
            </div>


          </div>
        </main>
      </div>
    </div>
  )
}
