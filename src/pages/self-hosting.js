import React from 'react';
import Layout from '@theme/Layout';

import {Redirect} from '@docusaurus/router';

function Hello() {
    return <Redirect to="/self-hosting/getting-started" />;
  }

export default Hello;