import { Box, Button, Flex, Heading,HStack,Text,Link } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { RevealWrapper } from  'next-reveal'


export default function Topcontainer() {
  return (
    <Box backgroundImage={"/ba.webp"} backgroundSize='contain' py='20' mt='5'>
{/* Left */}
<HStack >

<Box w='50%' color='white' pl='44' display={{base:"column", lg:"row" }}>
<RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
<Heading fontSize='70'>Build your next idea even faster</Heading>
</RevealWrapper>
<Text lineHeight={"8"}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>

<Box mt='5'>
<Button colorScheme={'blue'} mr={'4'} >Buy Know</Button>
<Button colorScheme={'blue'} variant={'outline'}  >View Contacts</Button>

</Box>

<Flex alignItems={'center'} >
<AvatarGroup size='md' max={4} mt='5'>
  <Avatar name='Sir Zia' src='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' />
  <Avatar name='Sir Daniyal' src='https://avatars.githubusercontent.com/u/62209503?v=4' />
  <Avatar name='Owais Ali' src='https://chakrademosite-ows-ali.vercel.app/me.jpg' />
  <Avatar name='Salman' src='https://media.licdn.com/dms/image/C4E03AQGiUgOhd1fcDw/profile-displayphoto-shrink_200_200/0/1600069075208?e=1682553600&v=beta&t=wmAapoGImRNmgneKsh05BO7gRlwZ826lcFMwX7569Qc' />
  <Avatar name='Uns' src='' />
</AvatarGroup>
<Text mt='5' ml='3'>Created by:<Link color="blue" target={'_blank'} href={'https://salman-salmansaeed101-gmailcom.vercel.app '}> Salman</Link></Text>
</Flex>
</Box>

<Box w='50%'>
<RevealWrapper  delay={200} duration={1000} distance='500px' reset={true}>
    <Image src='/banner5.png' alt='Front image' width='900' height='900' />
    </RevealWrapper>   
</Box>



</HStack>
    </Box>
  )
}
