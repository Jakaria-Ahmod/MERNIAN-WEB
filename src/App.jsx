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
          children: [
            {
              path: '/profile',
              children: [
                {
                  path: 'newsfeed',
                  element: <div>i am Newsfeed </div>,
                },
                {
                  path: 'profile',
                  element: <div>i am Profile </div>,
                },
                {
                  path: 'groups',
                  element: <div>i am Profile </div>,
                },
                {
                  path: 'photos',
                  element: <div>i am Photos </div>,
                },
                {
                  path: 'friends',
                  element: <div>i am Friends </div>,
                },
                {
                  path: 'friendsRequest',
                  element: <div>i am Friends Request </div>,
                },
                {
                  path: 'logout',
                  element: <div>i am Friends Logout </div>,
                },
              ],
            },
          ],
        },
        {
          path: '*',
          element: <div>page not found !</div>,
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
