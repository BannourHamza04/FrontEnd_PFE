import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './Principal/Principal'
import Poste from './Poste/Poste'
import Loginn from './Login2/Loginn'
import Register from './Register/Register'
import EditProfile from './EditProfile/EditProfile'
import Securite from './Securite/Securite'
import SettingsC from './SettingsC/SettingsC'
import Search from './Search/Search'
import AddPost from './AddPost/AddPost'
import Notifications from './Notifications/Notifications'
import Followers from './Followers/Followers'
import Followings from './Followings/Followings'
import Accueill from './Accueill/Accueill'
import Profile from './Profile/Profile'
import SessionTest from './SessionTest/SessionTest'
import AddProfil from './EditProfile/AddProfil'
import ProfilFriend from './Search/ProfilFriend'
import ResetPassword from './Login2/ResetPassword'
import EditPassword from './Login2/EditPassword'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/Accueil' element={<Accueill />}></Route>
      <Route path='/Login' element={<Loginn />}></Route>
      <Route path='/EditPassword' element={<EditPassword />}></Route>
      <Route path='/ResetPassword' element={<ResetPassword />}></Route>
      <Route path='/Register' element={<Register />}></Route>
      <Route path='/Search' element={<Search />} />
      <Route path='/SessionTest' element={<SessionTest />} />
        <Route path='/' element={<Principal />}>
          <Route index element={<Poste />} />
          <Route path='Profile' element={<Profile />} />
          <Route path="ProfilFriend/:profilId" element={<ProfilFriend />} />
          <Route path='AddProfil' element={<AddProfil />} />
          <Route path='EditProfile' element={<EditProfile />} />
          <Route path='Securite' element={<Securite />} />
          <Route path='Settings' element={<SettingsC />} />
          <Route path='AddPost' element={<AddPost />} />
          <Route path='Notifications' element={<Notifications />} />
          <Route path='Followers' element={<Followers />} />
          <Route path='Followings' element={<Followings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
