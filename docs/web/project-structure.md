---
sidebar_position: 2
---

# Understanding Project Structure

The `Web` project structure follows a domain-driven concept as listed in the [Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md). [Next.js Routing](https://nextjs.org/docs/routing/introduction), [Chakra UI](https://chakra-ui.com/getting-started) and [Storybook](https://storybook.js.org/docs/react/get-started/introduction) are used as well.

## Features Directory

This follows the domain-driven concept as listed in the [Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md).

To summarise, the `features` folders will consist of domain specific `feature` that contain components, hooks, logics, utils, etc specific to that `feature`. Files and folders outside the `features` folder will mainly be used as common/global components, hooks, logics, utils, etc.

Most of the code lives in the `web` folder and looks like this:
```
src
|
+-- .storybook        # storybook configurations
|
+-- common            # shared hooks and types used across the entire application
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- cypress           # contains end-to-end testing files
|
+-- features          # feature based modules
|
+-- pages             # files added in the pages directory are available as routes (Next.js file-system based router)
|
+-- public            # public folder can contain all the static files such as images, fonts, etc.
|
+-- theme             # chakra ui theming files to override base styles
|
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

A feature could have the following structure:

```
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

You should import stuff from other features only by using:

`import {AwesomeComponent} from "@/features/awesome-feature"`

and not

`import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent`

<br />

## Next.js Routing (Pages Directory)

[Next.js Routing](https://nextjs.org/docs/routing/introduction)

### Pages

In Next.js, a **page** is a React Component exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory. Each page is associated with a route based on its file name.

**Example**: If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.

```typescript title=pages/about.js
export default function About() {
  return <div>About</div>
}
```

#### Pages with Dynamic Routes
Next.js supports pages with dynamic routes. For example, if you create a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`, `posts/2`, etc.

To learn more about dynamic routing, check the [Dynamic Routing documentation](https://nextjs.org/docs/routing/dynamic-routes)

### Routing

Next.js has a file-system based router built on the [concept of pages](https://nextjs.org/docs/basic-features/pages).

When a file is added to the `pages` directory, it's automatically available as a route.

The files inside the `pages` directory can be used to define most common patterns.

#### Index routes

The router will automatically route files named `index` to the root of the directory.

- `pages/index.js` → `/`
- `pages/blog/index.js` → `/blog`

#### Nested routes

The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.

- `pages/blog/first-post.js` → `/blog/first-post`
- `pages/dashboard/settings/username.js` → `/dashboard/settings/username`

#### Dynamic route segments

To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.

- `pages/blog/[slug].js` → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.js` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].js` → `/post/*` (`/post/2020/id/title`)

### Linking between pages

The Next.js router allows you to do client-side route transitions between pages, similar to a single-page application.

A React component called `Link` is provided to do this client-side route transition.

```typescript
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  )
}

export default Home
```

The example above uses multiple links. Each one maps a path (`href`) to a known page:

- `/` → `pages/index.js`
- `/about` → `pages/about.js`
- `/blog/hello-world` → `pages/blog/[slug].js`

### Learn More

Learn more about [Next.js Pages](https://nextjs.org/docs/basic-features/pages) and [Next.js Routing](https://nextjs.org/docs/routing/introduction).

<br />

## Chakra UI

[Chakra UI](https://chakra-ui.com/getting-started) is a simple, modular and accessible component library.

### Chakra UI Components

Chakra UI provides prebuild components to help you build your projects faster. Explore them at https://chakra-ui.com/docs/components.

### Customising Chakra UI Theme

#### The `theme` Directory

The `theme` directory structure is as follows
```
📁 theme
  📄 index.js  # my main theme entrypoint
  📄 styles.js  # all my global style overrides
  📁 foundations
    📄 colors.js  # all my colors overrides
    📄 fonts.js   # all my fonts overrides
  📁 components
    📄 button.js  # all my button overrides
```

Thus, the main theme entrypoint file, `index.ts`, will be like this:

```typescript title=theme/index.js
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Global style overrides
import styles from './styles';

// Foundational style overrides
import fonts from './foundations/fonts';
import colors from './foundations/colors';

// Component style overrides
import components from './components';

const overrides = {
  config,
  styles,
  fonts,
  colors,
  components,
};

const theme = extendTheme(overrides);

export default theme;
```

#### Customising Single Components

Using the Chakra UI `Button` component as an example, in the `theme/components` directory, create a new file `Button.tsx`:

```typescript title=theme/components/Button.tsx
import { defineStyleConfig } from '@chakra-ui/react';

const Button: defineStyleConfig({
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
});

export default Button;
```

After creating the `Button.tsx` file, import the `Button` component into the main theme entrypoint file `theme/index.ts`.

#### Other Customisations

- [Multipart or Composite Components](https://chakra-ui.com/docs/styled-system/advanced-theming)
- [Global Styles (`theme/styles.ts`)](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-global-styles)
- [Theme Tokens (`theme/foundations`)](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-theme-tokens)

<br />

## Storybook

### Introduction

Storybook is a frontend workshop for building UI components and pages in isolation.
It can be used for UI development, testing, and documentation.

The basics of Storybook can be learned from https://storybook.js.org/docs/react/writing-stories/introduction. All stories have a `.stories.tsx` extension.

### Example

```typescript title=FormInput.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormInput } from '../FormInput';

export default {
  title: 'Components/Forms/FormInput',
  component: FormInput,
  argTypes: {},
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = args => (
  <FormInput {...args} />
);

// Story 1
export const Default = Template.bind({});
Default.args = {
  label: 'Email Address',
  field: 'email',
  autoComplete: 'email',
  inputType: 'email',
};

// Story 2
export const Password = Template.bind({});
Default.args = {
  label: 'Password',
  field: 'password',
  autoComplete: 'password',
  inputType: 'password',
};
```

### When to use Storybook?

Stories are usually written for testing components in isolation from the main web page.

You can write stories when developing components in `components` or `features` directory.

### Starting Storybook

Navigate to the `website` directory, and run:

```bash
yarn storybook
```

<br />

## Others

- The `common` directory contains global `hooks`, `types`, `utils`, etc shared throughout the app.
- The `components` directory contains elementary components that are not domain specific and are shared globally across the app.
- The `cypress` directory contains end-to-end test files.
