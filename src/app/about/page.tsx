import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <section className='container mx-auto'>
      <article className='mx-auto max-w-2xl pb-24'>
        <Image
          alt='Avatar'
          loading='lazy'
          width='180'
          height='180'
          decoding='async'
          data-nimg='1'
          className='mb-8 rounded-full'
          src='/static/works/avatar.jpg'
          style={{ color: 'transparent' }}
        />
        <h1
          className='font-heading mt-2 scroll-m-20 text-4xl font-bold'
          id='about-me'
        >
          <a
            className='font-medium underline underline-offset-4 subheading-anchor'
            aria-label='Link to section'
            href='#about-me'
          >
            <span className='icon icon-link'></span>
          </a>
          ABOUT ME
        </h1>

        <p className='leading-7 mt-6'>
          Hello! I am Blas Cabas Geat, a Senior Front-end Engineer with
          extensive experience in designing and implementing intuitive and
          efficient web solutions. My technical expertise spans cutting-edge
          technologies such as ReactJS, Next.js, HTML, and CSS, supported by a
          strong backend foundation in Node.js, Express, MongoDB, and SQL.
          Beyond mere coding, I excel at crafting user-centric interfaces and
          ensuring optimal user experiences through rigorous testing, with a
          particular emphasis on utilizing Cypress for test automation.{' '}
        </p>
        <p className='leading-7 mt-6'>
          Throughout my career, I have combined a keen aesthetic eye with
          profound technical acumen, positioning myself as a versatile asset to
          any innovative and forward-thinking team. I am always eager to tackle
          new challenges and engage in collaborative ventures. Additionally, I
          have significant experience working in multidisciplinary teams using
          agile practices. My focus is on completing tasks on time, and I am
          skilled at making accurate estimations. Furthermore, I have experience
          in continuously training and mentoring other developers, further
          enhancing my contribution to team growth and success.
        </p>
        <p className='leading-7 mt-6'>
          I am a strong advocate for open-source software and have contributed
          to various projects, Im working on my own projects, one of them is a
          components library based on React, Tailwind, CVA, Typescript and
          Storybook called{' '}
          <Link href='https://mate-ui.vercel.app/' className='text-blue-500'>
            MateUI
          </Link>
        </p>
      </article>
    </section>
  )
}
