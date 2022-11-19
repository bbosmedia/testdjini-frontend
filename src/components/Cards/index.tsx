import React from 'react'
import {SlLocationPin} from 'react-icons/sl'
import { IHomeData } from '../../types/interface.homedata'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './style.scss'
import { formatNumber } from './../../helpers/numwithdots';

const Cards = ({data, isLoading}: {data?: IHomeData[], isLoading: boolean}) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='cards'>
        {isLoading && numbers.map(item=>(
            <div className="card">
            <div className="card-left">
                <Skeleton height={250} />
            </div>
            <div className="card-right">
                <Skeleton count={1} height={25} />
                <Skeleton count={2} height={15} />
                <Skeleton count={1} height={25} />
            </div>
        </div>
        ))}
        {isLoading === false && data && data.map(home =>(
            <div className="card">
            <div className="card-left">
                <img src={home.img} alt="" />
            </div>
            <div className="card-right">
                <h3>{home.title}</h3>
                <div className='location'><span className='card-location-icon'> <SlLocationPin /></span>Murcia, Costa Cálida, Spanje<span></span></div>
                <div className='bedroom'><span>{home.bedrooms} Slaapkamers</span> <span>{home.bathrooms} Badkamers</span></div>
                <p className='cost'>€ {formatNumber(home.cost)}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Cards