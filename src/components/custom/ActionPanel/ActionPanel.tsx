"use client"
 
// Import
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FormGroup, { FormGroupInterface } from "../FormGroup/FormGroup"

// Inteface
export interface ActionPanelConfig {
  formTitle: string
  formDescription: string
  formFields: Array<FormGroupInterface>
}

export interface ActionPanelProps {
  config: ActionPanelConfig
}

export default function ActionPanels({config} : ActionPanelProps) {

  const defaultValues : any = {};
  const defaultSchema : any = {};

  config.formFields.forEach(({name, defaultValue, schema}) => {

    if (defaultValue) defaultValues[name] = defaultValue;

    defaultSchema[name] = z.string().superRefine((data, ctx) => {
      if (data.length > schema.max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Must be at most ${schema.max} characters.`
        });
      }
      if (data.length < schema.min) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Must be at least ${schema.min} characters.`
        });
      }
    })

  })

  const formSchema = z.object(defaultSchema)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-primary-light/90 flex items-center justify-center">

        <div className="bg-primary-base shadow-xl sm:rounded-lg w-fit border border-accent-light/10">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">{config.formTitle}</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>{config.formDescription}</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {config.formFields.map((formField) => (
                    <FormGroup config={formField} form={form} />
                ))}
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </div>

      </div>
    )
  }