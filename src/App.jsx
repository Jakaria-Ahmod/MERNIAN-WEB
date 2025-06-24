import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RooteFile from './globalComponents/RootFile';
import PublicProfile from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RooteFile />,
      children: [
        {
          path: '/',
          element: <PublicProfile></PublicProfile>,
        },
        {
          path: '/about',
          element: <div>about</div>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
