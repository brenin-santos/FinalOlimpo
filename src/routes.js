import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import { ChakraProvider } from "@chakra-ui/react";

const RoutesSystem = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
      </Routes>
    </ChakraProvider>
  );
};

export default RoutesSystem;
