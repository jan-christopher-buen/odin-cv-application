# CV Studio

A React application that turns personal, education, and work experience details into a readable CV. Built for [The Odin Project's CV Application assignment](https://www.theodinproject.com/lessons/node-path-react-new-cv-application) with JavaScript, Vite, and plain CSS.

[Live demo](https://odin-cv-application-bice.vercel.app/)

## Features

- Personal information, education, and practical experience forms.
- Whole-CV preview with editing and resubmission that preserve entered values.
- Required-field, email, and date validation, including whitespace-only text checks.
- Experience end month constrained by the selected start month.
- Human-readable dates and preserved responsibility line breaks.
- Responsive layouts and safe wrapping for long content.

## Usage

Complete all three sections; every field is required. Select **Create CV** to review the formatted document. Select **Edit CV** to return to the populated form, update your details, and submit again.

Your information stays in the browser's memory and is not sent to a service. Refreshing or closing the page clears it.

## Local development

Prerequisites: Node.js 24 and npm.

Clone the repository, enter its directory, and install dependencies:

```sh
git clone https://github.com/jan-christopher-buen/odin-cv-application.git
cd odin-cv-application
npm ci
npm run dev
```

Open the local URL printed by Vite.

| Command                | Purpose                                                  |
| ---------------------- | -------------------------------------------------------- |
| `npm run dev`          | Start the development server.                            |
| `npm run build`        | Build the production app into `dist/`.                   |
| `npm run preview`      | Serve the production build locally; run the build first. |
| `npm run lint`         | Check JavaScript and React rules with ESLint.            |
| `npm run format:check` | Check formatting with Prettier.                          |
| `npm run format`       | Apply Prettier formatting.                               |

## Architecture and state

Components live in `src/components/`, with CSS in `src/styles/`.

- `App` owns `cvData`, grouped into general, education, and experience objects, and the `isEditing` view flag.
- `CVForm` composes `GeneralInformation`, `EducationInformation`, and `ExperienceInformation`.
- `Field` pairs labels with controlled inputs or a textarea.
- `CVPreview` renders the submitted information as semantic HTML and formats dates for display.

Child components receive data and callbacks through props. Each input change updates the affected nested object immutably using a state updater. Editing changes only the view flag, preserving the same data when the form appears again. Form values have one source of truth; display dates are derived rather than stored in state. React StrictMode remains enabled.

## Responsive design and accessibility

The form uses one column on narrow screens and two columns on wider screens, with layouts designed for widths of 320px and above. Flexible document sizing and text wrapping accommodate long names, emails, and responsibilities.

Fieldsets and legends group related inputs. Explicit labels, appropriate input types, native validation, and visible focus indicators support keyboard use. Each view has one main heading and a logical heading order. Focus moves to the full-name input when the form opens and to **Edit CV** when the preview opens.

## Limitations

- One education entry and one practical experience entry.
- In-memory data only; no persistence between page loads.
- No PDF export, backend, accounts, or cloud storage.

## Learning outcomes

This project applies component composition, controlled inputs, lifting state, immutable nested updates, props, event handling, and conditional rendering. It also practices native form validation, semantic HTML, and responsive CSS.

## Deployment

The live application is hosted on Vercel. To deploy your own instance, import the GitHub repository into Vercel and select the Vite preset:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 24

Use root hosting with Vite's default base path. No environment variables or router configuration are required. Generated `dist/` files and `node_modules/` are excluded from version control.
