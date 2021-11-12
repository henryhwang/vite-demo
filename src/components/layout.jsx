//@ts-check
import { defineComponent, resolveComponent } from "@vue/runtime-core";
import { container, heading, navLinks, navLinkItem, navLinkText, view } from './layout.module.css'

const Layout = defineComponent({
  name: 'Layout',
  props: {
    pageTitle: String,
  },
  setup(props, { slots }) {
    const RouterLink = resolveComponent('RouterLink')
    const links = [{ path: '/', name: 'Home' }, { path: '/about', name: 'About' }]

    return () => {
      return (
        <div className={container}>
          <title>{props.pageTitle}</title>
          <nav>
            <ul className={navLinks}>
              {links.map(link => {
                return <li className={navLinkItem}><RouterLink to={link.path} className={navLinkText}>{() => link.name}</RouterLink></li>
              })}
            </ul>
          </nav>
          <main className={view}>
            <h1 className={heading}>{props.pageTitle}</h1>
            {slots.default && slots.default()}
          </main>
        </div>
      )
    }
  }
})

export {
  Layout,
}