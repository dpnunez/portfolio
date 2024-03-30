import { Editor } from '@/components'

export function ContactForm() {
  return (
    <Editor.EnterCode className="mx-10">
      <h1 className="text-3xl font-bold mb-8">Send me a message</h1>
      <div className="flex w-full">
        <div className="flex-1">
          <Form />
        </div>
        <div className="flex-1">
          <ReqViwer />
        </div>
      </div>
    </Editor.EnterCode>
  )
}

function Form() {
  return <div>form</div>
}

function ReqViwer() {
  return <div>req</div>
}
