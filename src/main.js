import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { focusDirective, rainbowDirective, customOnDirective } from './directives'
import './styles/styles.css'

const app = createApp(App)

app.config.globalProperties.$filters = {
    currencyUSD(amount) {
        return '$' + amount
    },
}

app.directive('focus', focusDirective)
app.directive('rainbow', rainbowDirective)
app.directive('custom-on', customOnDirective)


app.use(router)
app.use(store)

app.mount('#app')
