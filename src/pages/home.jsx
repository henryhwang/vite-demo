//@ts-check
import { defineComponent } from 'vue'
import { Layout } from '../components/layout.jsx'

const IndexPage = async () => {
  return (
    <Layout pageTitle='Home Page'>
      {() => <p>This is an example to demo how to use JSX with Vue using vite</p>}
    </Layout>
  )
}

export {
  IndexPage
}