import { VStack, HStack, Heading, Text, Progress, Button } from '@chakra-ui/react';
import { useState, useEffect } from "react";

const solanaWeb3 = "";
const fundraiseContract = "";


function App({ container }) {

  const fundraiseId = container.getAttribute("data-fundraise-id");
  const [ fundraise, setFundraise ] = useState();
  const [ fundingAmount, setFundingAmount ] = useState(0);
  const [ progressPercentage, setProgressPercentage ] = useState();
  const [ daysToGo, setDaysToGo ] = useState();
  const [ isPhantomInstalled, setIsPhantomInstalled ] = useState(false);


  const calculatePercentage = (amountFunded, amountToBeRaised) => {
    console.log(amountFunded, amountToBeRaised);
    setProgressPercentage((amountFunded * 100) / amountToBeRaised);
    console.log((amountFunded * 100) / amountToBeRaised);
  }

  const handleFundingAmount = ({ target }) => {
    setFundingAmount(target.value);
  }

  const donate = async () => {
    // function to perform the contract call and donate. 
  }

  const claimDonation = async () => {
    // optional
  }

  const calculateDaysToGo = (timestamp) => {
    setDaysToGo(`Donate before - ${new Date(timestamp * 1000).getDate()}/${new Date(timestamp * 1000).getMonth()}/${new Date(timestamp * 1000).getFullYear()} ${new Date(timestamp * 1000).getHours()}:${new Date(timestamp * 1000).getMinutes()}:${new Date(timestamp * 1000).getSeconds()}`);
  }

  const init = async () => {
    const fundraise = {

    }
  }


  return (
    <VStack background="white" boxShadow="lg" alignItems="flex-start" border="2px solid #0058f7" spacing={5} width="100%" borderRadius="12px" py="20px" px="10px">
      <HStack alignItems="flex-end">
          <Heading fontSize="25px">₹ </Heading><Text>raised of ₹  goal</Text>
      </HStack>
      <Progress value={40} width="100%" borderRadius="12px" colorScheme="brand"  />
      <HStack justifyContent="space-between" width="100%">
          <Heading fontSize="20px"> days left</Heading>
          <Button alignSelf="flex-end">Donate</Button>            
      </HStack>
    </VStack>
  );
}

export default App;
