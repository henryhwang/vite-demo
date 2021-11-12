// @ts-check
import { computed, defineComponent, resolveComponent } from "vue";
import { useRouter, RouterView, RouterLink } from "vue-router";
import appStyle from './app.module.css'

import { FC } from './src/components/fc.jsx'
import { NavBar } from "./src/components/navbar.jsx";

const navbarData = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About', path: '/about' },
]

const App = defineComponent({
  name: 'App',
  props: {
    userName: String
  },
  setup(props) {
    const router = useRouter()
    const CurrentComponent = computed(() => router.currentRoute.value.matched[0]?.components.default)
    /**@type {import('vue').Component} */
    const RV = RouterView

    return () => {
      return (
        <div className={appStyle.appContainer}>
          <NavBar menus={navbarData}>
            {{ default: (_, title) => (<button>{title}</button>) }}
          </NavBar>
          <FC abc="abc-value" data-a1="a1-value">
            {{
              default: () => (<RV></RV>),
              greeting: () => <p>Hello {props.userName}</p>
            }}
          </FC>
          <FC abc="abc-value2" data-a1="a1-value" children={{
            default: () => (CurrentComponent.value && <CurrentComponent.value></CurrentComponent.value>),
            greeting: () => <p>Hello {props.userName}</p>
          }}></FC>
          <NavBar menus={navbarData}>
            {{default: (_, title) => (<button>{title}</button>)}}
          </NavBar>
        </div>
      )
    }
  }
})

export {
  App,
}