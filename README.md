[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]

<h1 align="center">
  StuntCoders 2022 website running on Gatsbyjs
</h1>

## 🏃‍♂️ Quick start

1.  **Start the website locally.**

    Use the Gatsby CLI to start site:

    ```shell
    yarn install
    npm run develop
    ```

2.  **Start developing.**

    Edit `jsx` files in `src/pages/` to see our site update in real-time!

3.  **Open the site locally and start customizing!**

    Our site is now running at http://localhost:8000!

## Make code prettier?

```
yarn install
npx prettier --write src/pages/.jsx
```

## Test the website?

Build images:

```
npm test -- -u
```

Run tests:

```
npm test
```

Check coverage:

```
npm run test --coverage
```

End-to-end tests?

```
npm run test:e2e
```

## Setup pre-commit hooks

```
pre-commit install
```

## 🚀 Deploy?

First run `npm run build` to be sure all is running smoothly. Otherwise, you'll be wasting Netlify minutes.

Once you're 100% sure it's running, do `git push`, then navigate to [Netlify link](https://vibrant-brown-359096.netlify.app/).

### 😵‍💫 Changes not visible?

You must go to [app.netlify.com](https://app.netlify.com/) >> Project name >> Deploy >> See build errors.
