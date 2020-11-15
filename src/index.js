import './assets/stylus/app.styl'
import * as components from './components/index'

const baseOptions = {
  prefix: 'Drac'
}

export default {
  install(app, customOptions) {

    // // Vue 2
    // if (app.prototype.$draculaCore) {
    //   return
    // }
    // app.prototype.$draculaCore = {
    //   installed: true
    // }

    // Vue 3
    // if (app.config.globalProperties.$draculaCore) {
    //   return
    // }
    // app.config.globalProperties.$draculaCore = {
    //   installed: true
    // }

    const options = Object.assign({}, baseOptions, customOptions);

    Object
      .entries(components)
      .forEach(([name, component]) => app.component(`${options.prefix}${name}`, component))
  }
}

export * from './components/index'