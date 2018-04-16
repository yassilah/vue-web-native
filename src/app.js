import Vue from 'vue'

import App from './components/App'

import './styles'

const app = new Vue({
  render: h => h(App)
})

/*--@web--*/
app.$mount('#app')
/*--@web--*/

/*--@native--*/
app.$start()
/*--@native--*/
