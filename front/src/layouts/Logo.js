import { Container, Box } from "../components/styled"
import { TrophyIcon } from "../components/icons"

export default function Logo() {
  return (
    <Container items="center" gap="7px" flex>
        <TrophyIcon width={50} height={50}  color={"var(--primary)"}/>
        <Box>
            <h1 className='text-white' style={{marginBottom:0}}>Star wars</h1>
            <h2 style={{marginTop:0}}>Choose your <span className='text-primary'>destiny</span> </h2>
        </Box>
    </Container>
  )
}
