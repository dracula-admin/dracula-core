# Usage

Create app and import `dracula-core` in your code:

``` JS
import { createApp } from "vue";
import DraculaCore from '@dracula-admin/core'

const app = createApp();
app.use(DraculaCore)

app.mount("#app");
```

Or use individual components:

``` JS
import { createApp } from "vue";
import { hello } from '@dracula-admin/core'

const app = createApp();
app.component(hello)

app.mount("#app");
```