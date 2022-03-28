import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Users from '../Pages/Users/Users';
import User from '../Pages/Users/User';
import UploadFile from '../Pages/UploadFile/UploadFile';

const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="users/:id" element={<User />} />
        <Route path="upload/" element={<UploadFile />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
