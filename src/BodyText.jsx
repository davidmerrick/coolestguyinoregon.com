import {Link, Typography} from "@mui/material";
import React from 'react'

class BodyText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Typography component={'span'} variant="body1">
        Oh hey there &#128075;. I'm David. This was a site I ranked on Google as a prank
        way back in 2009. I was browsing for domains, and realized that
        coolestguyinoregon.com wasn't taken, so I bought it for $10.
        <br/>
        <br/>
        Subsequently, I realized that <Link href="https://www.coolestguyinamerica.com" target="_blank">www.coolestguyinamerica.com</Link>
        wasn't taken, either, and also bought that for $10.
        <br/>
        <br/>
        For more on me, check out:
        <ul>
          <li>My main website: <Link href="https://www.david-merrick.com" target="_blank">www.david-merrick.com</Link>
          </li>
          <li>My <Link href="https://github.com/davidmerrick" target="_blank">GitHub</Link></li>
        </ul>
      </Typography>
    );
  }
}

export default BodyText;
