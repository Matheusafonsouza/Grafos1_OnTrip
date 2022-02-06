import { Box, Flex, Image, Select, Button, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import logo from "../../assets/logo.png"

export default function Drawer() {
  const toast = useToast();

  const [airports, setAirports] = useState([]);
  const [graph, setGraph] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSourceChange = (e) => setSource(e.target.value);
  const handleDestinationChange = (e) => setDestination(e.target.value);

  useEffect(() => {
    getAirports();
    getGraph();
  }, []);

  const getAirports = async () => {
    try {
      const { data } = await api.get("/airports");
      setAirports(data.airports);
    } catch {
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='red.500'>
            Um erro ocorreu, contate um desenvolvedor
          </Box>
        ),
      })
    }
  };

  const getGraph = async () => {
    try {
      const { data } = await api.get("/graph");
      setGraph(data.airports);
    } catch {
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='red.500'>
            Um erro ocorreu, contate um desenvolvedor
          </Box>
        ),
      })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.get("/path", { source, destination });
      setGraph(data.airports);
    } catch {
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='red.500'>
            Um erro ocorreu, contate um desenvolvedor
          </Box>
        ),
      })
    }
  };

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
        <form onSubmit={handleSubmit}>
          <Flex
            direction="column"
            align="center"
            width="100%"
          >
            <Select
              placeholder="Onde você está?"
              marginBottom="40px"
              width="100%"
              onChange={handleSourceChange}
              required
            >
              {airports.map(airport => (
                <option value={airport}>{airport}</option>
              ))}
            </Select>
            <Select
              placeholder="Para onde quer ir?"
              marginBottom="40px"
              onChange={handleDestinationChange}
              required
            >
              {airports.map(airport => (
                <option value={airport}>{airport}</option>
              ))}
            </Select>
            <Button
              colorScheme="blue"
              isFullWidth
              type="submit"
            >
              Button
            </Button>
          </Flex>
        </form>
      </Box >
    </Flex >
  );
}