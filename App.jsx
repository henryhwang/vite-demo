import { defineComponent } from "vue";

const App = defineComponent({
  name: 'App',
  props: {},
  setup() {
    return () => {
      return (
        <div>Hello World</div>
      )
    }
  }
})

export {
  App,
}