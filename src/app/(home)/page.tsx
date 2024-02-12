import SectionHero from '@/components/pages/home/hero'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@/components/ui/text'
import { buttonVariants } from '@/components/ui/button'
import { compareDesc, format, parseISO } from 'date-fns'
import { cn } from '@/lib/utils'

const works = [
  {
    _id: '1',
    title: 'Kennek',
    slug: 'https://kennek.io/',
    date: '2021-01-01',
    thumbnail: '/static/work/thumb-nyt.jpg',
    description:
      'kennek enables every lender to operate smartly and efficiently. Its built by former lenders, and offered as a SaaS. '
  },
  {
    _id: '2',
    title: 'Mate UI',
    slug: 'https://mate-ui.vercel.app/',
    date: '2023-01-01',
    thumbnail: '/static/work/thumb-ny.jpg',
    description:
      'Components library using Tailwind CSS , React, cva, Typescript and Storybook.'
  },
  {
    _id: '3',
    title: 'ECOM Chaco',
    slug: '/works/the-guardian',
    date: '2019-01-01',
    thumbnail: '/static/work/thumb-guardian.jpg',
    description: 'Local software factory in Chaco, Argentina.'
  },
  {
    _id: '4',
    title: 'Clinical History',
    slug: 'https://hc.salud.chaco.gob.ar/',
    date: '2022-01-01',
    thumbnail: '/static/work/thumb-wp.jpg',
    description:
      'A web app to manage clinical history of patients, rooms, emergency care, etc.'
  }
]

export default function Page() {
  return (
    <main className='container'>
      <SectionHero />
      <section className='my-20'>
        <nav className='mb-5 flex items-center justify-between'>
          <div>
            <Text variant='overline'>Selected Works</Text>
          </div>

          <Link
            href='/works'
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'rounded-full pl-6'
            )}
            aria-label='Works page'
          >
            WORKS
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </nav>

        <div className='grid gap-10 lg:grid-cols-2 xl:gap-20'>
          {works.map((work, index) => (
            <article
              key={work._id}
              className={index % 3 === 0 ? 'col-span-2' : 'col-span-1'}
            >
              <Link href={work.slug} className='group relative'>
                <figure className='relative aspect-video overflow-hidden rounded-xl transition-opacity duration-300 group-hover:opacity-60'>
                  <Image
                    src={work.thumbnail || '/static/work/thumb-default.jpg'}
                    fill={true}
                    priority={true}
                    alt={work.title}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw'
                    className='bg-muted object-cover'
                  />
                </figure>
                <h3 className='mt-8 font-semibold uppercase'>{work.title}</h3>
                <time
                  dateTime={work.date}
                  className='mb-2 block text-xs text-muted-foreground'
                >
                  {format(parseISO(work.date), 'yyyy')}
                </time>
              </Link>
              {work.description && (
                <p className='mt-4 max-w-md text-muted-foreground'>
                  {work.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
