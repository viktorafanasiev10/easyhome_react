import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title.js';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        $40 per day
      </Typography>
      <div>
        <Link color="primary" href="src/pages/dashboard/Deposits.js#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
