import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiFilter, IHomeData } from '../types/interface.homedata'

export const homesApi = createApi({
    reducerPath: 'homesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://testdjini.up.railway.app/' }),
    endpoints: (builder) => ({
      getfilteredHouses: builder.mutation<IHomeData[], ApiFilter>({
        query: (body) => ({
            method: 'POST',
            url: 'buildings',
            body,
        })
      }),
    }),
  })

  export const {useGetfilteredHousesMutation} = homesApi

