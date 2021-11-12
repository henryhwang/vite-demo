<script>
import { defineComponent } from "vue"

export default defineComponent({
    name: 'Demo',
    props: {},
    setup() {
        return () => {
            return (
                <div>Hello from Demo</div>
            )
        }
    }
})
</script>