import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './style.scss'
import { useAppDispatch } from './../../hooks/redux'
import { changeSearchTerm } from '../../redux/slices/searchFilter.slice'
import { ClipLoader } from 'react-spinners'

const SearchBar = ({ isLoading }: { isLoading: boolean }) => {
	const [value, setValue] = useState<string>('')
	const dispatch = useAppDispatch()
	const search = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(changeSearchTerm(value))
	}
	return (
		<form onSubmit={e => search(e)} className='search-bar'>
			<div className='icon'>
				<FiSearch />
			</div>
			<input
				type='text'
				className='searchbar-input'
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder='Plaats, buurt, adres, etc.'
			/>
			<button disabled={isLoading} className='search-bar-btn'>
				{isLoading ? (
					<ClipLoader color='#fff' size={15} />
				) : (
					<span>Search</span>
				)}
			</button>
			<button disabled={isLoading} className='search-bar-btn-mobile'>
				{isLoading ? (
					<ClipLoader color='#fff' size={15} />
				) : (
					<span>
						<FiSearch />
					</span>
				)}
			</button>
		</form>
	)
}

export default SearchBar
