
import { Box, Container, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import {BiRocket } from 'react-icons/bi';
import { RiMoonFoggyLine } from 'react-icons/ri';
import { IoIosBrush } from 'react-icons/io';
import { BiCode } from 'react-icons/bi';
import { GiNorthStarShuriken } from 'react-icons/gi';
import { GiRainbowStar } from 'react-icons/gi';

export default function Features() {
  return (
    <Box py={50}>
      {/* Top Header */}
    <Box textAlign={'center'}>
<Text color={'blue.500'} fontWeight="semibold">

Features
</Text>
<Heading>

What you can expect?
</Heading>
<Text fontSize={20} py='5'>A bundle of 220+ ready-to-use, responsive and accessible components with clever structured sourcecode files.

</Text>
    </Box>
    {/* Features Box */}
    
    <Container maxW={1200}>
    <Box>
    <SimpleGrid columns={2} spacing='10'>
      <Box>
    
<HStack>
      <GiNorthStarShuriken size={50} color={'blue'} />
      <Box>
      <Heading fontSize={18}>220+ Components</Heading>
      <Text>
      All our components come with a light and dark color mode by default.
      </Text>
      </Box>
      </HStack>
      {/* Feature One End */}
    </Box>
    <Box>
<HStack >
<BiRocket size={50} color={'blue'} />
      <Box>
      <Heading fontSize={18}>Themable</Heading>
      <Text>
      Your style. Your brand. Customize the components as you need them. It &apos;s that simple.
      </Text>
      </Box>
      
      </HStack>
      
    
      </Box>
      <Box>
    
<HStack>
      <RiMoonFoggyLine size={50} color={'blue'} />
      <Box>
      <Heading fontSize={18}>Light & Dark</Heading>
      <Text>
      All our components come with a light and dark color mode by default.
      </Text>
      </Box>
      </HStack>
      {/* Feature One End */}
    </Box>
    <Box>
<HStack>
      <IoIosBrush size={50} color={'blue'} />
      <Box>
      <Heading fontSize={18}>Themable</Heading>
      <Text>
      Your style. Your brand. Customize the components as you need them. It &apos;s that simple.
      </Text>
      </Box>
      
      </HStack>
      
    
      </Box>
      <Box>
    
<HStack>
      <BiCode size={50} color={'blue'} />
      <Box>
      <Heading fontSize={18}>Developer Friendly</Heading>
      <Text>
      Components are semantically divided into several files for better developer experience.
      </Text>
      </Box>
      </HStack>
      {/* Feature One End */}
    </Box>
    <Box>
<HStack>
      <GiRainbowStar size={50} color={'blue'} />
      <Box>
      <Heading fontSize={18}>Accessible</Heading>
      <Text>
      Accessibility first. That &apos;s why we pay attention to accessibility right from the start.
      </Text>
      </Box>
      
      </HStack>
      
    
      </Box>
      </SimpleGrid>
      </Box>
    
    
   
    </Container>
   
   
    
    </Box>
  )
}
