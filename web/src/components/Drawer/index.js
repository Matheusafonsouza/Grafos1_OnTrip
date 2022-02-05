import { Box, Flex, Heading, Select, Button } from '@chakra-ui/react';

export default function Drawer() {
  return (
    <Flex direction="column" align="center">
      <Heading>Bem vindo ao On Trip!</Heading>

      <Box>
        <form>
          <Flex
            direction="column"
            align="center"
            justifyContent="space-between"
          >
            <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Button colorScheme='blue'>Button</Button>
          </Flex>
        </form>
      </Box>
    </Flex >
  )
}