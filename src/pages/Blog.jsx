import React from 'react'
import Layout from '../component/Layout';
import BlogComp from '../component/Blog'

function Blog() {
    return (
        <Layout children={<BlogComp />} />
    )
}

export default Blog