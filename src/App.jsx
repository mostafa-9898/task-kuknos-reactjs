import { Provider } from 'react-redux'
import useSWR from 'swr'
// theme
import MuiThemeProvider from './utils/MuiTheme'
// mui
import { Box, CircularProgress } from '@mui/material'
// componetns
import Users from './components/Users'
import Posts from './components/Posts'
import Selected from './components/Selected'
// redux
import store from './redux/store'



function App() {

  // fetch data
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: users, isLoading: usersLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
  const { data: posts, isLoading: postsLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  // loading
  if (usersLoading && postsLoading && !users && !posts) return (
    <Box sx={{
      display: "flex", alignItems: "center",
      justifyContent: "center", gap: "32px", height: "100vh"
    }}>
      <CircularProgress color="success" />
    </Box>
  )

  // after loading
  return (
    <MuiThemeProvider>
      <Provider store={store}>

        <Box sx={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: "32px", height: "100vh"
        }}>
          <Users usersData={users} />
          <Posts postsData={posts} />
          <Selected />
        </Box>

      </Provider>
    </MuiThemeProvider>
  )
}

export default App
