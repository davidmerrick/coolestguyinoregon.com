import {Container, Grid} from "@mui/material";
import BodyText from "./BodyText.jsx";
import Typography from "@mui/material/Typography";
import ReactGA from 'react-ga';
import AdSense from "react-adsense";
import React from 'react'

ReactGA.initialize('UA-8004148-4');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Container justify="center">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" align="center">David Merrick</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1" align="center">is the</Typography>
          <Typography variant="h1" align="center">Coolest Guy in America</Typography>
        </Grid>
        <Grid item xs={12} style={{height: 50}}/>
        <Grid item
              xs={12}
              lg={6}
              justify="space-between"
              style={{
                backgroundImage: `url(coolestguy.jpg)`,
                backgroundSize: 'cover',
                height: 500
              }}
        />
        <Grid item xs={12} lg={6}>
          <BodyText></BodyText>
        </Grid>
        <Grid item xs={12} md={6}>
          <AdSense.Google
            client='ca-pub-2926548784382786'
            slot='5755823672'
            style={{display: 'block'}}
            layout='in-article'
            format='fluid'
          />
        </Grid>
      </Grid>
    </Container>);
  }
}

export default App;
