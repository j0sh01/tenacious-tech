# TenaciousTech Web App

## Features
- Modern React web app
- Full internationalization (i18n) support using [react-i18next](https://react.i18next.com/)
- Language toggle for English and Kiswahili (Swahili)
- Easily extensible to more languages

## Internationalization (i18n)

### How it works
- All user-facing text is managed via translation files in `src/locales/en.json` (English) and `src/locales/sw.json` (Kiswahili).
- The language can be toggled at runtime using the language toggle in the navigation bar.
- The current language is remembered in localStorage.

### Adding/Editing Translations
- To update or add translations, edit the files:
  - `src/locales/en.json` for English
  - `src/locales/sw.json` for Kiswahili
- Each key in these files corresponds to a phrase or label in the UI.
- To add a new language, create a new JSON file (e.g., `fr.json` for French), add it to `src/lib/i18n.ts`, and provide translations for all keys.

### Example translation key (in en.json):
```json
{
  "contact_tag": "Contact Us",
  "contact_heading": "Let's Create Something",
  "contact_heading_accent": "Extraordinary"
}
```

### Using translations in code
- Use the `useTranslation` hook from `react-i18next`:
```js
import { useTranslation } from 'react-i18next';
const { t } = useTranslation();
...
<h1>{t('contact_heading')}</h1>
```

## Running the App
- Install dependencies: `npm install`
- Start the dev server: `npm run dev`

## Adding a New Language
1. Create a new file in `src/locales/` (e.g., `fr.json` for French).
2. Add your translations for all keys.
3. Import and add the new language to the `resources` in `src/lib/i18n.ts`.
4. Add the language to the language toggle in `src/components/LanguageToggle.tsx`.

## Contributing
- Please keep translation keys consistent across all language files.
- When adding new UI text, add a new key to all translation files.

---

For any questions or issues, please contact the TenaciousTech team.

---

## How can I edit this code?

You can work locally using your own IDE by cloning this repo and pushing changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
