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

## with $fetch we dont need json parsing

# Single Page vs Server Side Rendering

## Single Page

1. Send Request to Server
2. Server callback bundle to Client
3. Client Render bundle

- draw back :

1. initial page load is slow (slow on startup, because it need to send bundle)
2. No round trips to server (completely load all the resource we need)

## Server side rendered

1. Very fast start up (because Server are beef machine, and it calling back HTMl which is small load)
2. interaction are slow (because the process is repeated)

## Universal Rendering is the solution

1. No round trips
2. bundle
3. Hydration process to add some content.

# (runtimeConfig) Nuxt Config vs app Config

## runtimeConfig (NuxtConfig)

- Set at runtime externally (.env file)
- contain secrets and sensitive information
- Only String

### use case (Global)

- URLs
- DB connection
- Auth Provider
- API Secrets

## App Config -> Update Reactively

- set at build time
- dont put Sensitive Information!
- any typescript you want

### use case (Different user have different setting)

- Theme
- Feature toggles
- other app meta-data

# Ollama vs OpenAI

- ollama is Free but need configuration
- Open API is premium service

# MDC is a module that can highlight code syntax

# Dynamic Routing : meaning a route that handles GET request

- by example (folder) chats/ (File)[id].vue
