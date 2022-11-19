import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import './style.scss'
import { useAppDispatch } from './../../hooks/redux';
import { changeSearchTerm } from '../../redux/slices/searchFilter.slice';

const SearchBar = ({isLoading}: {isLoading:boolean}) => {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch()
  const search = () =>{
    dispatch(changeSearchTerm(value))
  }
  return (
      <div className='search-bar'>
        <div className='icon'>
        <FiSearch />
      </div>
        <input type="text" value={value} onChange={e=> setValue(e.target.value)} placeholder='Plaats, buurt, adres, etc.' />
        <button disabled={isLoading} className='search-bar-btn' onClick={()=>search()} type="button">Search</button>
      </div>
  )
}

export default SearchBar