import { faHardHat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Card,
  CardContent,
  Container,
  SvgIcon,
  Typography
} from '@mui/material'

export function Index() {
  return (
    <Container sx={{ mt: 2 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        <Box sx={{ display: 'grid', gridColumn: '2/6' }}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <SvgIcon color="warning" fontSize="large">
                <FontAwesomeIcon icon={faHardHat} />
              </SvgIcon>
              <Typography fontSize="1.5rem">
                Site is currently under construction, please come back soon!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  )
}

export default Index
