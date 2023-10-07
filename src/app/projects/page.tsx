"use client"
import Background from '@/components/Background/Background'
import SideBar from '@/components/SideBar/SideBar'
export default function Projects() {
  return (
    <main className="flex min-h-screen h-screen">
      <SideBar/>
      <div className="h-full w-full relative">
        <Background active={false}/>

        <div className="container mx-auto px-36 h-full flex flex-col py-16">
          <h1 className="xs:text-2xl font-bold sm:text-[2.75rem] typography">
            Projects
          </h1>
        </div>

      </div>
    </main>
  )
}