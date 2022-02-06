import { Box, Flex, Image, Select, Button } from "@chakra-ui/react";
import logo from "../../assets/logo.png"

export default function Drawer() {
  return (
    <Flex
      direction="column"
      align="center"
      height="100%"
      width="100%"
      justify="space-around"
    >
      <Box marginTop="40px">
        <Image src={logo} />
      </Box>

      <Box flex="1"
        width="100%"
        padding="30px"
      >
        <form>
          <Flex
            direction="column"
            align="center"
            width="100%"
          >
            <Select
              placeholder="Onde você está?"
              marginBottom="40px"
              width="100%"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select
              placeholder="Para onde quer ir?"
              marginBottom="40px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Button
              colorScheme="blue"
              isFullWidth
            >
              Button
            </Button>
          </Flex>
        </form >
      </Box >
    </Flex >
  )
}