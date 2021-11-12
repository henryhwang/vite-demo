import { defineComponent } from "vue"
import { Layout } from "../components/layout"

const AboutPage = defineComponent({
  name: 'About',
  setup() {
    return () => {
      return (
        <Layout pageTitle="About Page">
          {() => <p>Hi there. I created this site with Vite and Vue</p>}
        </Layout>
      )
    }
  }
})

export {
  AboutPage,
}