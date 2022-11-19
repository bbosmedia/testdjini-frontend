export interface IHomeData{
    id: number
    title: string
    address: string
    cost: number
    bathrooms: number
    bedrooms: number
    type: string
    date: string
    img: string
}

export interface ApiFilter {
    sortby: string
    type: string
    searchTerm: string
}