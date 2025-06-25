import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RooteFile from './globalComponents/RootFile';
import PublicProfile from './pages/Home';
import HomePage from './pages/Home/Main';
import NewsFeed from './pages/newsfeed';
import Fridends from './pages/Friends';
import AboutPage from './pages/about';

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
              path: 'profile/about',
              element: <AboutPage></AboutPage>,
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
              element: <Fridends></Fridends>,
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
