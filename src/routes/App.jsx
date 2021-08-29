import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout'
import { Home, CheckOut, Information, Payment, Success, NotFound } from "../containers"
import AppProvider from '../context/AppContext'

export const App = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/"><Home/></Route>
                        <Route exact path="/checkout"><CheckOut /></Route>
                        <Route exact path="/checkout/information"><Information /></Route>
                        <Route exact path="/checkout/payment"><Payment /></Route>
                        <Route exact path="/checkout/success"><Success /></Route>
                        <Route><NotFound /></Route>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppProvider>
    )
}
