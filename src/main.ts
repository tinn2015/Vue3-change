import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.less'
import './assets/markdown.less'
import { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu } from 'element-plus'

const app = createApp(App)
app.component(ElMenu.name, ElMenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElMenuItemGroup.name, ElMenuItemGroup)
app.component(ElSubmenu.name, ElSubmenu)

app.use(store).use(router).mount('#app')
