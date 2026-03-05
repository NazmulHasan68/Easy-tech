# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```





<!-- 1️⃣ React Website → Mobile App (Android / iOS)

সবচেয়ে সহজ উপায় হলো Capacitor বা Apache Cordova ব্যবহার করা।

Recommended: Capacitor (modern)

Developed by Ionic.

Step 1

React project build করো

npm run build
Step 2

Capacitor install

npm install @capacitor/core @capacitor/cli
Step 3

Initialize

npx cap init

Example

App name: MyApp
App ID: com.myapp.app
Step 4

Android add করো

npm install @capacitor/android
npx cap add android
Step 5

Build copy

npx cap copy
Step 6

Android Studio open

npx cap open android

এখন Android Studio থেকে APK / Play Store build করতে পারবে।

2️⃣ React Website → PWA App (Installable App)

যেটা Play Store ছাড়া install করা যায়।

React এ PWA enable করতে হয়।

Example:

npm install vite-plugin-pwa

বা Create React App হলে:

serviceWorker.register();

Then user browser থেকে Install App করতে পারবে।

🔥 Best Option (Most Professional)
Method	Result
Capacitor	Real Android App
PWA	Installable Website
React Native	Full Mobile App 

email : nazmulhasan00068@gmail.com
password : emailjs
-->