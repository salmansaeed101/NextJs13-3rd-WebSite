"use client"



import { Box, Heading, Image, List, ListItem ,HStack, Button,Flex, Link} from '@chakra-ui/react'




export default function Header() {
  return (
    <>
    <Box pt={'5px'}>
    <Flex justifyContent={'space-around'} alignItems={'center'}>
<Box>
  <HStack>
  <Image src='logo.png' alt='Logo'></Image>
  
  <List>
  <HStack align={'center'} spacing={5} ml={'40px'} fontWeight={'bold'}>
  <ListItem>Home</ListItem>
  <ListItem>About</ListItem>
  <ListItem>Contact</ListItem>
  </HStack>
</List>
</HStack>
</Box>
  {/* <Box  as="span" pl={'15'}>
  <SearchIcon w={'20px'} h={'20px'} />
  </Box> */}
  <Box  >
    <Link target={"_blank"} href='https://portal.piaic.org/'>
    <Button variant={'outline'} colorScheme='blue'>Go to Piaic</Button>
    </Link>
  </Box>

</Flex>
    </Box>
            
    </>
  )
}
