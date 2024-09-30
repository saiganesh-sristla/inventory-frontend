import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-4/5 h-screen bg-yellow-300'>
        <div className='flex justify-evenly bg-gray-100 m-4 p-4'>
            <div className='text-center'>
                <h2 className='font-semibold text-xl mb-2'>Total Assets</h2>
                <p>1234</p>
            </div>
            <div className='text-center'>
                <h2 className='font-semibold text-xl mb-2'>Assets in maintenance</h2>
                <p>45</p>
            </div>
            <div className='text-center'>
                <h2 className='font-semibold text-xl mb-2'>Active Location</h2>
                <p>10</p>
            </div>
            <div className='text-center'>
                <h2 className='font-semibold text-xl mb-2'>Last Audit date</h2>
                <p>sep 28, 2024</p>
            </div>
        </div>

        <div className='font-bold text-2xl ml-5 mt-10'>Inventory Summary</div>
        <div className='flex gap-5'>
            <div className='bg-gray-100 w-1/2 m-4 p-4'>
                <div className='font-semibold text-xl'>Active items </div>
                <div className='mt-2'>Guns -</div>
                <div>Radios -</div>
                <div>Body armor - </div>
                <div>Desktop -</div>
            </div>
            <div className='bg-gray-100 w-1/2 m-4 p-4'>hi </div>
        </div>

    </div>
  )
}

export default Dashboard