---
sidebar_position: 4
---

# How to Contribute




## Git Workflow

- Branch name (nameing convention)
- Updates via Rebase
- Pull request (pr name + pass all tests)
- Request review


## Creating new files

- Create a `index.ts` file, if it does not exist in the same directory as the created file.
- Export the newly created component in the `index.ts` file that exist in the same directory as the newly created file.

:::caution

The creation of a `index.ts` file and exporting the newly created component/functions/constants may not be required according to how the the feature you are working on is designed. Consult the tech lead if you are unsure.

:::


## Imports

- Use imports via path alias whenever possible (note that deep imports via path alias is restricted due to ESLint configuration set up)


