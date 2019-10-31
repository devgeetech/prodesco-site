import React from "react"
import { Helmet } from "react-helmet"

import classes from '../styles/index.module.css'

import Layout from '../components/hoc/Layout/Layout'

import Hero from '../components/sections/hero'

const indexPage = () => {
    return(
        <Layout>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <title>PRODESCO</title>
            </Helmet>
            <Hero />
        </Layout>

    )
}

export default indexPage;

