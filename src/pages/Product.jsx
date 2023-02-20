import CommingSoon from '../component/CommingSoon'
import Layout from '../component/Layout'

function Product() {
  return (
    <Layout children={<CommingSoon />} />
  )
}

export default Product