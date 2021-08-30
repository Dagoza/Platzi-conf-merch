import React from 'react'
import { MetaHelmet } from '../components/MetaHelmet'
import { Products } from '../components/Products'

export const Home = () => {
    const meta = {
        title:"Productos",
        description:"Encuentra todos tus productos favoritos",
        image:"inserte aqui imagen tumbnail",
        url:"inserte aquí dominio"
     };
    return (
    <>
        <MetaHelmet {...meta}/>
        <Products />
    </>
    )
}
