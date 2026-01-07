# Proposal: Migrate All CSS to Tailwind CSS

## Summary
Migrate all custom CSS in the project (index.css, App.css, TodoApp.css) to Tailwind CSS utility classes. Remove or minimize custom CSS files, updating all React components to use Tailwind for all layout, color, spacing, and typography.

## Motivation
- Unify styling under Tailwind for consistency and maintainability.
- Reduce custom CSS and leverage Tailwind's utility-first approach.
- Enable easier future UI changes and theming.

## Scope
- All styles in src/index.css, src/App.css, and src/TodoApp.css.
- All components: App.jsx, TodoApp.jsx, and any others using these styles.

## Out of Scope
- Adding new features or UI elements not present in the current app.
- Advanced Tailwind configuration (beyond basic setup).

## Risks
- Visual regressions if Tailwind classes do not match previous custom styles exactly.
- Loss of custom animations or effects not easily replicated in Tailwind.

## References
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Current project CSS files]

---

_This proposal follows OpenSpec conventions and is based on a full review of the current CSS and component usage._
