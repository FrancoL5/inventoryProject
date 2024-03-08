import { Box, Container } from "@chakra-ui/react";
import { Inventory } from "./components/inventory/inventory";

function App() {
  return (
    <Box w={"100dvw"}>
      <Container centerContent>
        <Inventory />
      </Container>
    </Box>
  );
}

export default App;
