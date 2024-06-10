import { NavbarUser } from "../../components/navbar/navbar";
import { Container, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text } from '@chakra-ui/react'
export const NOMBRE = () => {
  return (
    <>
      <NavbarUser />
      <Container mt="10rem" minW="100rem">
        <SimpleGrid spacing={100} p={5} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
          <Card minW="20rem" alignItems="center" textAlign="center" p={2} boxShadow="2px 2px 10px 1px">
            <CardHeader>
              <Heading minW="15rem" minH="2rem" size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card minW="20rem" alignItems="center" textAlign="center" p={2} boxShadow="2px 2px 10px 1px">
            <CardHeader>
              <Heading minW="15rem" minH="2rem" size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card minW="20rem" alignItems="center" textAlign="center" p={2} boxShadow="2px 2px 10px 1px">
            <CardHeader>
              <Heading minW="15rem" minH="2rem" size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
};
