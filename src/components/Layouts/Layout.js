import React from 'react';

import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => (
  <section>
    {children}
    <Navbar />
  </section>
);

export default Layout;
