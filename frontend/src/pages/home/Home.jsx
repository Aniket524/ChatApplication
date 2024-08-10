import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:h-[450] md:h-[550] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        {/* <Message /> */}
    </div>
  )
}

export default Home