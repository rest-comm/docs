---
sidebar_position: 1
---

# Setting Up Development Environment

:::warning
Make sure that you have installed Node.js via NVM and installed yarn before proceeding! If not done yet, please follow the instructions [here](/docs/category/getting-started).
:::

You will need to set up the following:
- Code Editor/IDE
- GitHub
- Making a copy of the repo

## Code Editor/IDE

We recommend downloading [Visual Studio Code](https://code.visualstudio.com/) for development of rest.com.sg.

### Installation

To set up Visual Studio Code:
1. Go to https://code.visualstudio.com/ and download Visual Studio Code according to your system specification.
2. Run the installer and follow its instructions.

### Configure VSCode Extensions

Perform the following steps to configure basic VSCode Extensions as required by the Tech Lead.
1. In Visual Studio Code, click on the `Extensions` icon on the sidebar.
2. Install the following extensions: `ESLint` and `GitLens`.

### Learn More

Learn more about how to use Visual Studio Code [here](https://code.visualstudio.com/docs/getstarted/introvideos).

## GitHub

:::caution

If you already have a GitHub account and you are already added to the rest-comm GitHub organisation, you can skip this section.

:::

### The Setup

Perform the following steps:
1. Create a GitHub account using your personal email.
2. Request the tech lead to add your GitHub username into the rest-comm GitHub organization.
3. Sign in to your GitHub account in the Visual Studio Code installed.

### Learn More

You can learn more about working with GitHub in VSCode [here](https://code.visualstudio.com/docs/sourcecontrol/github).


## Making a copy of the repo

### Cloning

In your terminal, run:

```bash
git clone https://github.com/rest-comm/web.git
```

### Install Packages

At the root directory of web, download all the required node packages:

```bash
yarn
```

### Local Development

Run the local development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
