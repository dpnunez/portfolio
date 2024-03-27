import { Editor } from '@/components'
import { PrismLight } from 'react-syntax-highlighter'

export default function Page() {
  return (
    <Editor.CodeSide
      fullSize
      className="col-span-1 flex items-center justify-center relative"
    >
      <div className="flex flex-col gap-4">
        <span>Hi all, I&apos;m</span>
        <h1 className="font-extrabold text-6xl">
          <span>Daniel Núñez</span>
        </h1>
        <h2 className="text-lg">
          <span>{'> '}</span>
          <span>
            Full Stack Engineer, specialized in Javascript environment
          </span>
        </h2>

        <span></span>
        <PrismLight className="!bg-transparent" language="javascript">
          {`// fell free to access the code of this page in my github\nconst url = "https://github.com/dpnunez/portfolio"`}
        </PrismLight>
        <ComputerBackground />
      </div>
    </Editor.CodeSide>
  )
}

function ComputerBackground() {
  return (
    <pre className="absolute text-2xl top-0 left-0 opacity-5 pointer-events-none">
      {`.,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         '.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   '.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     '.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"';:::       '.
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
'..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  '..........:::::::::::::::::::::::;iof688888888888b.     'YBBBP^'
    '........::::::::::::::::;iof688888888888888888888b.     '
      '......:::::::::;iof688888888888888888888888888888b.
        '....:::;iof688888888888888888888888888888888899fT!
          '..::!8888888888888888888888888888888899fT|!^"'
            '' !!988888888888888888888888899fT|!^"'
                '!!8888888888888888899fT|!^"'
                  '!988888888899fT|!^"'
                    '!9899fT|!^"'
                      '!^"'`}
    </pre>
  )
}
