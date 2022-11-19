import React, { useState } from 'react'
import {FaCaretDown} from 'react-icons/fa'
import './style.scss'
import { useAppDispatch, useAppSelector } from './../../hooks/redux';
import { changeSort, changeType } from '../../redux/slices/searchFilter.slice';

const SideBarTools = () => {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.searchFilter)
  const [openbox, setOpenBox] = useState('')
  const changeSortBy = (value: string) =>{
    dispatch(changeSort(value))
    setOpenBox('')
  }
  const changeTypeBy = (value: string) =>{
    dispatch(changeType(value))
    setOpenBox('')
  }
  return (
    <aside className='sidebar-tools'>
      <div className='sort select-box'>
        <div className="top"><span>Sort by</span> <button onClick={()=>setOpenBox('Sort by')}><span>{filter.sortby}</span> <span className='icon'>
          <FaCaretDown />
          </span></button></div>
        <div className={openbox === 'Sort by' ? 'body active': 'body'}>
          <button className={filter.sortby === 'Date Added' ? 'select-btn active': 'select-btn'} onClick={()=>changeSortBy('Date Added')}>Date Added</button>
          <button className={filter.sortby === 'Highest Price' ? 'select-btn active': 'select-btn'} onClick={()=>changeSortBy('Highest Price')}>Highest Price</button>
          <button className={filter.sortby === 'Lowest Price' ? 'select-btn active': 'select-btn'} onClick={()=>changeSortBy('Lowest Price')}>Lowest Price</button>
        </div>
      </div>
      <div className='sort select-box'>
        <div className="top"><span>Type</span> <button onClick={()=>setOpenBox('Type')}><span>{filter.type}</span> <span className='icon'>
          <FaCaretDown />
          </span></button></div>
        <div className={openbox === 'Type' ? 'body active': 'body'}>
          <button className={filter.type === 'Apartment' ? 'select-btn active': 'select-btn'} onClick={()=>changeTypeBy('Apartment')}>Apartment</button>
          <button className={filter.type === 'Villa' ? 'select-btn active': 'select-btn'} onClick={()=>changeTypeBy('Villa')}>Villa</button>
          <button className={filter.type === 'Town House' ? 'select-btn active': 'select-btn'} onClick={()=>changeTypeBy('Town House')}>Town House</button>
        </div>
      </div>
    </aside>
  )
}

export default SideBarTools