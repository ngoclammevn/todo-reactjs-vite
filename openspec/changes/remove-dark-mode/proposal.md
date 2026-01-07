# Proposal: Remove Dark Mode, Enforce Light Mode, and Center Todo List

## Summary
Remove all dark mode and color-scheme switching logic from the project. Enforce a light color scheme for all users. Ensure the todo list remains centered and is fully responsive on all screen sizes.

## Motivation
- Simplify the UI by supporting only light mode.
- Reduce code complexity and potential styling bugs.
- Improve accessibility and predictability of the app's appearance.
- Ensure the todo list is always centered and adapts to different device sizes.

## Scope
- Remove dark mode and color-scheme logic from index.css and any component code.
- Set light mode as the only color scheme.
- Update layout and Tailwind classes to guarantee the todo list is centered and responsive.

## Out of Scope
- Adding new features or UI elements not present in the current app.
- Advanced theming or color customization.

## Risks
- Users who prefer dark mode will not have that option.
- Visual regressions if light mode is not enforced everywhere.

## References
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Current project CSS and layout]

---

_This proposal follows OpenSpec conventions and is based on a review of the current color mode and layout logic._
