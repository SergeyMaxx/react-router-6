import React from 'react'
import Layout from './components/layout'
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import UserListPage from './components/userListPage'
import UserProfilePage from './components/userProfilePage'
import EditUserPage from './components/editUserPage'

const MainPage = () => <h1>Main Page</h1>

function App() {
  return (
    <div>
      <h1>React Router 6</h1>
      <Routes>
        <Route path="users" element={<Layout/>}>
          <Route index element={<UserListPage/>}/>
          <Route path=":userId/*" element={<UserProfilePage/>}/>
          <Route path=":userId/edit" element={<EditUserPage/>}/>
          <Route path=":userId" element={<Navigate to=":userId/profile"/>}/>
        </Route>
        <Route index element={<MainPage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      <Link to="users">Users list Page</Link>
    </div>
  )
}

export default App