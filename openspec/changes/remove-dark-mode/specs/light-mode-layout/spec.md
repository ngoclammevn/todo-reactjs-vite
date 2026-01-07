# Spec Delta: Remove Dark Mode, Enforce Light Mode, Center Todo List

## MODIFIED Requirements

### Requirement: The app MUST only support light mode
- All dark mode and color-scheme switching logic SHALL be removed from CSS and components.
- The app SHALL always use a light background and text color.

#### Scenario: No dark mode logic in CSS
- index.css contains only light mode color variables and background.

#### Scenario: Responsive, centered todo list
- The todo list is always centered horizontally and vertically on all screen sizes.
- The layout adapts responsively using Tailwind utilities.

---

_This spec delta documents the removal of dark mode and the enforcement of a centered, responsive todo list in light mode._
