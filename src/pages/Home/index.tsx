import React, {useEffect} from 'react'
import { Cards, SearchBar, SideBarTool } from '../../components'
import { useAppSelector } from '../../hooks/redux'
import { useGetfilteredHousesMutation } from '../../services/getAndSearch.home'
import './style.scss'

const Home = () => {
  const [searchHouse, {isLoading, isError, data}] =useGetfilteredHousesMutation()
  const searchFilter= useAppSelector(state=> state.searchFilter) 

  useEffect(()=>{
    searchHouse(searchFilter)
  }, [searchFilter])
  return (
    <main className='home-page'>
        <div className="container">
          <div className="inner">
            <SideBarTool />
            <div className='main'>
              <SearchBar isLoading={isLoading} />
              <div className="cards">
                {isError && <p>Something went wrongly.</p>}
                <Cards isLoading={isLoading} data={data} />
                {data && data.length === 0 && <p>Not found any house</p>}
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home