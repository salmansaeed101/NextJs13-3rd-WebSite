import { Box,Text,Heading, Container,Button,Flex, Center } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { BsSpeedometer2 } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';




export default function Highlights() {
  return (
    
<Box py={50}>
      {/* Top Header */}
    <Box textAlign={'center'}>
<Text color={'blue.500'} fontWeight="semibold">

Highlights
</Text>
<Heading size="md">

Why Chakra UI Pro?
</Heading>
<Text fontSize={20} py='5'>Because these beautiful and responsive React components will help you realize your next idea in no time.

</Text>
    </Box>
    <Container maxW={1200}>
        <Flex gap={3}>

    <Card align='center' mt={5}>
  <CardHeader>
    <Center color={'blue.500' }>
  <BsSpeedometer2 size={80} />
  </Center>
    <Heading size='md'> Speed up your workflow</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center' mt={5}>
  <CardHeader>
    <Center color={'blue.500' }>
        <FaMoneyBillAlt size={80}/>
    </Center>
    <Heading size='md'> Save good money</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center' mt={5}>
  <CardHeader>
    <Center color={'blue.500' }>
    <FaMoneyBillAlt size={70}/>    
    </Center>
    <Heading size='md'> Easily customizable</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center' mt={5}>
  <CardHeader>
    <Center color={'blue.500'}>
    <FaMoneyBillAlt size={70}/>
    </Center>
    <Heading size='md'> Support Chakra UI</Heading>
  </CardHeader>
  <CardBody>
    <Text>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>

</Flex>

    </Container>
    </Box>



    
  )
}
