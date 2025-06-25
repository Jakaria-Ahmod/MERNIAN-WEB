import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RooteFile from './globalComponents/RootFile';
import PublicProfile from './pages/Home';
import HomePage from './pages/Home/Main';
import NewsFeed from './pages/newsfeed';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RooteFile />,
      children: [
        {
          path: '/',
          element: <PublicProfile />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: 'profile/newsfeed',
              element: <NewsFeed></NewsFeed>,
            },
            {
              path: 'profile/profile',
              element: <HomePage />,
            },
            {
              path: 'profile/groups',
              element: <div>i am Profile</div>,
            },
            {
              path: 'profile/photos',
              element: <div>i am Photos</div>,
            },
            {
              path: 'profile/friends',
              element: <div>i am Friends</div>,
            },
            {
              path: 'profile/friendsRequest',
              element: <div>i am Friends Request</div>,
            },
            {
              path: 'profile/logout',
              element: <div>i am Friends Logout</div>,
            },
          ],
        },
        {
          path: '*',
          element: <div>page not found!</div>,
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
