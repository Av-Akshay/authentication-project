import React from 'react';
import useLocalStorageData from '../hook/useLocalStorageData';
import { useNavigate } from 'react-router-dom';

const Protected = ({Children}) => {
    const {localData}= useLocalStorageData();

    const navigate = useNavigate();
  return (
    localData? <Children/> : navigate("/login")
  )
}

export default Protected