import './assets/stylus/app.styl'
import * as components from './components/index'

const baseOptions = {
  prefix: 'Drac'
}

export default {
  install(app, customOptions) {
    if (app.config.globalProperties.$draculaCore) {
      return
    }

    const options = Object.assign({}, baseOptions, customOptions);

    app.config.globalProperties.$draculaCore = {
      installed: true
    }

    Object
      .entries(components)
      .forEach(([name, component]) => app.component(`${options.prefix}${name}`, component))
  }
}

export * from './components/index'