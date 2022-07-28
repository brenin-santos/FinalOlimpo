import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

const Faq = () => {
  return (
    <Accordion
      style={{
        width: "800px",

        border: "none",
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      allowToggle={true}
      allowMultiple={true}
    >
      <AccordionItem
        style={{
          background: "#23316b",
          border: "none",
          borderRadius: "0.25rem",
        }}
      >
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                border: "none",
                borderRadius: "0.25rem",
              }}
            >
              How many is the ᄃΉΛMPIӨПƧ ӨF ZΣЦƧ supply?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>10,000</AccordionPanel>
      </AccordionItem>

      <AccordionItem
        style={{
          background: "#23316b",
          marginTop: "2rem",
          border: "none",
          borderRadius: "0.25rem",
        }}
      >
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              When is the MIПƬ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>July 28th</AccordionPanel>
      </AccordionItem>
      <AccordionItem
        style={{
          background: "#23316b",
          marginTop: "2rem",
          border: "none",
          borderRadius: "0.25rem",
        }}
      >
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              How much will it cost?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          ᄃΉΛMPIӨПƧ Щᄂ free PЦBᄂIᄃ .005 each
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem
        style={{
          background: "#23316b",
          marginTop: "2rem",
          border: "none",
          borderRadius: "0.25rem",
        }}
      >
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              How many can mint?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          ᄃΉΛMPIӨПƧ Щᄂ 2 per wallet PЦBᄂIᄃ 4 per wallet
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem
        style={{
          background: "#23316b",
          marginTop: "2rem",
          border: "none",
          borderRadius: "0.25rem",
        }}
      >
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Where the ᄃΉΛMPIӨПƧ battle?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>We battle in ETH Blockchain</AccordionPanel>
      </AccordionItem>
      <AccordionItem
        style={{
          background: "#23316b",
          marginTop: "2rem",
          border: "none",
          borderRadius: "0.25rem",
        }}
      >
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              What kind of smart contract will we use?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>ERC721A</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default Faq;
