export default function AboutPage() {
  return (
    <div className='container'>
      <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>About</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of crypto currencies!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
