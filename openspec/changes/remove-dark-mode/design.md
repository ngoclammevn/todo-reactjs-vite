# Design: Remove Dark Mode, Enforce Light Mode, Center Todo List

## Architectural Reasoning
- Removing dark mode and color-scheme logic simplifies the codebase and reduces maintenance.
- Enforcing light mode ensures a consistent user experience.
- Using Tailwind's flex, grid, and responsive utilities guarantees the todo list is always centered and adapts to all device sizes.

## Trade-offs
- Users who prefer dark mode lose that option.
- Some custom color variables may need to be replaced with Tailwind's default palette.

## Patterns
- Use Tailwind's flex, justify-center, items-center, min-h-screen, and responsive width utilities for centering and layout.
- Remove all @media (prefers-color-scheme) and color-scheme CSS.

---

_This design document is included because the change impacts global layout and color logic._
