# Tasks: Migrate All CSS to Tailwind CSS

1. Inventory all custom CSS classes and rules in index.css, App.css, and TodoApp.css.
2. For each component (App.jsx, TodoApp.jsx), map existing className usage to equivalent Tailwind utility classes.
3. Update component JSX to use Tailwind classes directly, removing className references to custom CSS.
4. Remove unused or empty CSS files after migration.
5. Validate UI visually and with tests to ensure no regressions.
6. Run openspec validate migrate-to-tailwind --strict and resolve any issues.
