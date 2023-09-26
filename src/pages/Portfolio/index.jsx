import { Box, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'



export default function Portfolio() {
  return (
    <Box
      width={'100%'}
      height={'100vh'}
      bgColor={'#8A2CE2'}
      justifyContent={'start'}
      alignItems={'start'}
      flexDirection={'column'}
      padding={20}
      overflowY={'auto'}
    >

      <Heading color={'white'}>Portfolio</Heading>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {/* Sample Image 1 */}
  <div className="relative">
    <img
      src="https://source.unsplash.com/random/800x600"
      alt="Image 1"
      className="w-full h-auto rounded-lg"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 hover:bg-opacity-75">
      <a
        href="https://source.unsplash.com/random/800x600"
        target="_blank"
        className="text-white font-semibold text-lg"
      >
        View Image
      </a>
    </div>
  </div>
  {/* Sample Image 2 */}
  <div className="relative">
    <img
      src="https://source.unsplash.com/random/800x601"
      alt="Image 2"
      className="w-full h-auto rounded-lg"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 hover:bg-opacity-75">
      <a
        href="https://source.unsplash.com/random/800x601"
        target="_blank"
        className="text-white font-semibold text-lg"
      >
        View Image
      </a>
    </div>
  </div>
  {/* Repeat for more images */}
</div>

    </Box>
  )
}
