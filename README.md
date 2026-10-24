# CV Studio

A focused React application for creating a professional CV from personal, education, and practical experience details. Built for [The Odin Project's CV Application assignment](https://www.theodinproject.com/lessons/node-path-react-new-cv-application).

## Features

- Controlled forms with clearly labeled personal, education, and experience fields.
- Whole-CV submission, readable document preview, and repeatable editing with values preserved.
- Native required-field, email, and date validation, plus whitespace-only text validation.
- Experience end month constrained by the selected start month.
- Human-readable dates and preserved responsibility line breaks.
- Responsive layouts, visible keyboard focus, and safe wrapping for long content.

## Run locally

Use an actively supported Node.js version compatible with Vite: Node 20.19+, 22.12+, or newer supported releases. Node 24 was used for development. In WSL, use Linux Node/npm rather than Windows npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production build and local preview:

```sh
npm run build
npm run preview
```

Project checks:

```sh
npm run lint
npm run format:check
npm run format
```

The last command applies formatting. Prettier is installed locally with an exact version; the optional VS Code extension is `esbenp.prettier-vscode`.

## Use

Complete all three sections; every field is required. Select **Create CV** to display your information as a CV. Select **Edit CV** to return to the populated form, change any field, and submit again.

Data stays in React memory and is not sent to a service. Refreshing or closing the page clears it.

## Design

`App` owns the nested `cvData` object and `isEditing` state. `CVForm` groups `GeneralInformation`, `EducationInformation`, and `ExperienceInformation`. A small `Field` component keeps labels and controlled inputs consistent. `CVPreview` renders the same data as semantic HTML and formats dates only for display.

Input callbacks pass a section and field change to `App`, which copies the affected nested object with a state updater. Editing changes only the view flag, so the data remains available when the form mounts again. There is no duplicate saved/draft state, effect, ref, reducer, or persistence layer. React StrictMode stays enabled.

Forms use fieldsets, legends, associated labels, native validation, and a logical tab order. Each view has one main heading. System fonts, visible focus outlines, flexible grids, and content wrapping support narrow screens. The full-name input and Edit CV button receive autofocus when their respective views mount, keeping keyboard interaction available without effects or refs. Browser and assistive-technology behavior should be checked during manual review.

This project practices component composition, controlled inputs, lifting state, immutable updates, props, event handling, and conditional rendering.

## Limitations

- One education entry and one practical experience entry.
- In-memory data only; refresh clears the form.
- No PDF export, backend, accounts, or cloud storage.
- No automated browser or React test suite.

## Deployment

After pushing the repository, import it into Vercel or Netlify using the provider's GitHub repository import. Use the Vite preset, build command `npm run build`, and output directory `dist`. Use a compatible Node.js version. Root hosting requires no subpath base or router configuration. No environment secrets are required.

`node_modules/` and `dist/` are intentionally ignored. A live-demo URL can be added after deployment is verified.

## Manual review

Run `npm run dev` and open the printed URL in a modern browser. No browser automation dependency is required.

1. Confirm all 11 fields have labels. Submit an empty form, then try an invalid email and whitespace-only name, school, company, or responsibilities; each must prevent submission. Correct each value and confirm its error clears.
2. Use fictional details such as `Alex Sample`, `alex@example.com`, `+63 917 000 0000`, `Sample University`, `Computer Science`, `2020-06-15`, `Example Company`, `Developer`, `2021-01`, and `2023-12`. Enter two lines in responsibilities. Confirm the international phone format is accepted.
3. Set the end month before the start month and attempt submission. Correct it, then move the start month after the end month and confirm submission is blocked again. Equal start/end months should be accepted.
4. Create the CV and check every value, readable dates, and responsibility line breaks. Enter Unicode, long names/emails, and literal `<script>` text to check safe text rendering and wrapping.
5. Select Edit CV, verify every value remains, change several fields, and repeat the submit/edit cycle at least twice.
6. Use only Tab, Shift+Tab, and Enter to review labels, visible focus, error feedback, and focus after switching views. Inspect the browser console for React warnings or errors.
7. Review both views at viewport widths of 320, 390, 768, and 1280 pixels. Check that long content wraps without clipping or horizontal page scrolling.
8. Repeat a complete create/edit cycle with `npm run build` and `npm run preview`. Refresh and confirm the blank form returns.
