import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import { Dashboard } from './dashboard';

const Login = React.lazy(() => import('login/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
