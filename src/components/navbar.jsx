import { defineComponent } from "vue"
import { RouterLink } from "vue-router"

/**@typedef MyMenu
 * @property {string} title
 * @property {number} id
 * @property {string} path
 */

/**@typedef MyProps
 * @property {MyMenu[]} menus
 * @property {number} [id]
 * @property {{default?: () => JSX.Element | string, greeting?: () => JSX.Element | string}} [children]
 */

/**
 * 
 * @param {MyProps} props 
 * @param {import('vue').SetupContext} context 
 * @returns
 */
const NavBar = (props, context) => {
  const menus = props.menus || [{ title: 'item1', id: 1, path: '/' }, { title: 'item2', id: 2, path: '/about' }]
  const Link = (_, { attrs }) => {
    return <RouterLink to={attrs.path}>{() => context.slots.default?.(attrs.path, attrs.title)}</RouterLink>
  }
  return (
    <ul>
      {menus.map(menu => (
        <li key={menu.id}>
          <Link path={menu.path} title={menu.title}></Link>
        </li>
      ))}
    </ul>
  )
}
// NavBar.props = ['menus']
// NavBar.inheritAttrs = true

export {
  NavBar,
}