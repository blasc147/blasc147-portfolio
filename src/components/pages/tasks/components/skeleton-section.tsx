export const SkeletonTable = () => {
  return (
    <div className='animate-pulse'>
      <div className='rounded bg-gray-300 h-6 w-3/4 mb-4'></div>
      <div className='space-y-2'>
        {[...Array(10)].map((_, index) => (
          <div key={index} className='flex space-x-4'>
            <div className='rounded bg-gray-300 h-6 w-1/5'></div>
            <div className='rounded bg-gray-300 h-6 w-2/5'></div>
            <div className='rounded bg-gray-300 h-6 w-1/4'></div>
            <div className='rounded bg-gray-300 h-6 w-1/6'></div>
          </div>
        ))}
      </div>
    </div>
  )
}
