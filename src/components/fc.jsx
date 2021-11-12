//@ts-check

/**@typedef MyProps
 * @property {string | JSX.Element} abc
 * @property {number} [id]
 * @property {{default?: () => JSX.Element | string, greeting?: () => JSX.Element | string}} [children]
 */

/**
 * 
 * @param {MyProps} props 
 * @param {import('vue').SetupContext} context 
 * @returns
 */
const FC = (props, context) => {
  const slots = props.children ? props.children : context.slots
  return (
    <div>
      <h2>From functional component</h2>
      {props.abc}
      {slots.greeting && slots.greeting()}
      {slots.default && slots.default()}
    </div>
  )
}
FC.props = ['abc', 'children']
FC.inheritAttrs = false

export {
  FC,
}