import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle-dropdown'
import ButtonAuth from './auth-button'

export function SiteHeader() {
  return (
    <header className='sticky inset-x-0 top-0 z-50 my-0 w-full bg-background/80 backdrop-blur-md transition-colors md:my-10'>
      <div className='container flex h-12 items-center space-x-5 sm:justify-between md:h-12 md:space-x-16'>
        <Link
          href='/'
          className='flex items-center space-x-2 md:justify-center w-36 '
        >
          <Icons.logo className='h-4 md:h-5' />
          <span className='sr-only'>{siteConfig.name}</span>
        </Link>

        <MainNav items={siteConfig.mainNav} />

        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-2'>
            <Button variant='ghost' size='sm' className='px-1.5' asChild>
              <Link
                href={siteConfig.links.linkedin}
                target='_blank'
                rel='noreferrer'
              >
                <Icons.linkedin className='h-6 w-6' />
              </Link>
            </Button>

            <Button variant='ghost' size='sm' className='px-1.5' asChild>
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
              >
                <Icons.gitHub className='h-6 w-6' />
              </Link>
            </Button>

            <ThemeToggle />
          </nav>
        </div>
        <ButtonAuth />
      </div>
    </header>
  )
}
