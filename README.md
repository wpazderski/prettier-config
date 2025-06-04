# prettier-config

Common [Prettier](https://prettier.io/) configs

## Installation and usage

Start by installing this package and `prettier`, for example with `pnpm`:

```sh
pnpm i -D @wpazderski/prettier-config prettier
```

Then create `.prettierrc.js` file:

```js
import { <CONFIG_NAME> } from "@wpazderski/prettier-config/<CONFIG_NAME>.js";

/** @type {import("prettier").Config} */
const config = {
    ...<CONFIG_NAME>,
    // Custom options
};

export default config;
```

Replace `<CONFIG_NAME>` with chosen config (see [Available configs](#available-configs) section), for example:

```js
import { base } from "@wpazderski/prettier-config/base.js";

/** @type {import("prettier").Config} */
const config = {
    ...base,
    // Custom options
};

export default config;
```

Now you can run Prettier as usual, for example:

```sh
pnpm exec prettier . --check
```

## Available configs

Currently only one config is provided - `base`.

## Related projects

- [@wpazderski/eslint-config](https://github.com/wpazderski/eslint-config),
- [@wpazderski/typescript-config](https://github.com/wpazderski/typescript-config)
- [@wpazderski/playwright-config](https://github.com/wpazderski/playwright-config),
- [@wpazderski/playwright-utils](https://github.com/wpazderski/playwright-utils),
- [@wpazderski/configs-utils-example](https://github.com/wpazderski/configs-utils-example) - an example project that shows how to use all configs and utils.
