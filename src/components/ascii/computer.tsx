import { cn } from '@/lib/utils'

interface ComputerBackgroundProps {
  className?: string
}
export function ComputerBackground({ className }: ComputerBackgroundProps) {
  return (
    <pre className={cn('text-2xl pointer-events-none', className)}>
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
