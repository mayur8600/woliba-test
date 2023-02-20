import React from 'react'
import BlogDetails from '../component/BlogDetails'
import Layout from '../component/Layout'

function BlogView() {
    return (
        <Layout children={<BlogDetails />} />
    )
}

export default BlogView