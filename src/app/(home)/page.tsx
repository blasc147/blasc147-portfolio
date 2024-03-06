import SectionHero from '@/components/pages/home/hero'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@/components/ui/text'
import { buttonVariants } from '@/components/ui/button'
import { compareDesc, format, parseISO } from 'date-fns'
import { cn } from '@/lib/utils'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

const works = [
  {
    _id: '1',
    title: 'Kennek',
    slug: 'https://kennek.io/',
    date: '2021-01-01',
    thumbnail: '/static/works/kennek.png',
    description:
      'kennek enables every lender to operate smartly and efficiently. Its built by former lenders, and offered as a SaaS. '
  },
  {
    _id: '2',
    title: 'Mate UI',
    slug: 'https://mate-ui.vercel.app/',
    date: '2023-01-01',
    thumbnail: '/static/works/mate-ui.png',
    description:
      'Components library using Tailwind CSS , React, cva, Typescript and Storybook.'
  },
  {
    _id: '3',
    title: 'ECOM Chaco',
    slug: '/works/the-guardian',
    date: '2019-01-01',
    thumbnail: '/static/works/ecom.png',
    description: 'Local software factory in Chaco, Argentina.'
  },
  {
    _id: '4',
    title: 'Clinical History',
    slug: 'https://hc.salud.chaco.gob.ar/',
    date: '2022-01-01',
    thumbnail: '/static/works/hcd.png',
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
            <CardContainer key={work._id} className='col-span-1 inter-var'>
              <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                <CardItem
                  translateZ='50'
                  className='text-xl font-bold text-neutral-600 dark:text-white'
                >
                  {work.title}
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                >
                  {' '}
                  <time
                    dateTime={work.date}
                    className='mb-2 block text-xs text-muted-foreground'
                  >
                    {format(parseISO(work.date), 'yyyy')}
                  </time>
                  {work?.description}
                </CardItem>
                <CardItem translateZ='100' className='w-full mt-4'>
                  <Image
                    src={work.thumbnail || '/static/work/thumb-default.jpg'}
                    priority={true}
                    width={500}
                    height={300}
                    alt={work.title}
                    className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  />
                </CardItem>
                <div className='flex justify-between items-center mt-20'>
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
                  >
                    Try now →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
    </main>
  )
}
