## Using NVM (Node Version Manager)

-- force update node version.

1. Docs NVM
2. nvm install --lts
3. cat .nvmrc

## Using Eslint

### Init

1. pnpm dlx nuxi module add eslint

### Using

2. pnpm eslint .

### fixing

3. pnpm eslint --fix .

## Using husky to auto linting

1. pnpm add --save-dev husky
2. pnpm exec husky init (init Husky folder)
3. change pre-commit file (pnpm lint || pnpm eslint .)
4. After Commiting, you will unable to git commit

## Composables (Auto Import)

1. Ussually start with use... ex: useChat, useSnackbar. Nested function.
