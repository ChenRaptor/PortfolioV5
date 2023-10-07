"use client"
import Background from '@/components/Background/Background'
import SideBar from '@/components/SideBar/SideBar'

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen">
      <SideBar/>
      <div className="h-full w-full relative">
        <Background active={false}/>
        <div className="container mx-auto px-8 h-full flex flex-col py-16">
          <div className="h-full">
            <h1 className="xs:text-2xl font-bold sm:text-[2.75rem] leading-snug typography">
              <p><span>Hi</span><span className="typography-orange">visitor</span><span>,</span></p>
              <p><span>I</span><span>am</span><span>Antoine</span><span>Bonneau</span></p>
              <p><span>Future</span><span className="typography-sky">web</span><span className="typography-sky">developer</span></p>
            </h1>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-2 h-full">
            <div className="bg-primary-400 rounded border-primary-500 border">01</div>
            <div className="bg-primary-400 rounded border-primary-500 border">02</div>
            <div className="bg-primary-400 rounded border-primary-500 border">03</div>
            <div className="bg-primary-400 rounded border-primary-500 border">04</div>
          </div>
        </div>
      </div>

    </main>
  )
}