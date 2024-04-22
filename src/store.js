import { reactive } from 'vue'

export const store = reactive({
    pages: ['Home', 'Pages', 'Blog', 'Shop', 'Events', 'Elements'],
    currentPage:'Home'
})