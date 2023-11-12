"use client"
import { Button } from "@/components/ui/button";
import CardPaper from "./components/CardPaper/CardPaper";


import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import SlideOvers from "@/components/custom/SlideOvers/SlideOvers";
import { useState } from "react";
import ActionPanel, { ActionPanelConfig } from "@/components/custom/ActionPanel/ActionPanel";

const config : ActionPanelConfig = {
  formTitle: "Upload a project",
  formDescription: "Change the email address you want associated with your account.",
  formFields: [
  {
    name: "projectName",
    type: "text",
    label: "Project name",
    placeholder: "Project name",
    schema: {
    min: 2,
    max: 10
    }
  },
  {
    name: "projectDescription",
    type: "text",
    label: "Project description",
    placeholder: "Project description",
    schema: {
    min: 5,
    max: 12
    }
  },
  ]
}










const people = [{},{},{},{}]

function Example() {
  return (
  <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <button
    type="button"
    className="relative block w-full rounded-lg border-2 border-dashed p-12 text-center hover:border-accent-light hover:text-accent-light"
  >
    <svg
    className="mx-auto h-12 w-12 text-gray-400"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 48 48"
    aria-hidden="true"
    >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
    />
    </svg>
    <span className="mt-2 block text-sm font-semibold text-gray-900">Create a new database</span>
  </button>
    {people.map((person) => (
    <CardPaper/>
    ))}
  </ul>
  )
}

export default function Projects() {

  const [open, setOpen] = useState(true)
  return (
  <div className="overflow-hidden rounded-lg bg-white shadow h-full lg:px-16 w-full">
    <ActionPanel config={config} />
    <div className="px-4 py-5 sm:px-6">
    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-4xl">
      Projects
    </h1>
    </div>
    <div className="px-4 py-5 sm:p-6">
    <Example/>
    </div>
    <div className="px-4 py-4 sm:px-6">
    {/* Content goes here */}
    {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
    </div>
    {/* <SlideOvers open={open} setOpen={setOpen}/> */}
  </div>
  )
}
