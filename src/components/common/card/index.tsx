import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '../skeleton'

interface CardProps {
  primaryTitle?: React.ReactNode
  secondaryTitle?: React.ReactNode
  extra?: string
  image?: string
  href?: string
  tags?: string[]
}

export function Card({
  href,
  image,
  tags,
  secondaryTitle,
  primaryTitle,
  extra,
}: CardProps) {
  const Container = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <Link href={href} className="flex flex-col group">
          {children}
        </Link>
      )
    }

    return <div className="flex flex-col group cursor-pointer">{children}</div>
  }
  return (
    <Container>
      <div className="flex gap-4 mb-2 mx-2">
        <h3 className="text-editor-primary font-bold">{primaryTitle}</h3>{' '}
        {extra && (
          <span className="opacity-50">
            {'// '}
            {extra}
          </span>
        )}
      </div>
      <div className="rounded-xl overflow-hidden ring-1 ring-foreground/15 group-hover:ring-editor-primary cursor-pointer transition-all flex-1">
        <div className="aspect-video overflow-hidden border-b border-foreground/15">
          {image ? (
            <Image
              className="aspect-video w-full object-cover group-hover:scale-125 transition-transform duration-700"
              width={500}
              height={500}
              src={image}
              alt={String(primaryTitle || secondaryTitle)}
            />
          ) : (
            <Skeleton className="aspect-video w-full" />
          )}
        </div>
        <div className="p-4 gap-4 flex flex-col items-start">
          {secondaryTitle && (
            <h3 className="line-clamp-3 w-full">{secondaryTitle}</h3>
          )}
          <div className="flex gap-2">
            {tags
              ? tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn('text-xs bg-foreground/15 p-1 rounded-md')}
                  >
                    {tag}
                  </span>
                ))
              : null}
          </div>
        </div>
      </div>
    </Container>
  )
}
