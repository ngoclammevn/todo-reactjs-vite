# Design: Tailwind CSS Migration

## Architectural Reasoning
- Migrating to Tailwind CSS centralizes all styling in utility classes, reducing the need for custom CSS and making UI changes faster and more consistent.
- Tailwind's utility-first approach aligns with modern React best practices and improves maintainability.

## Trade-offs
- Some custom effects (e.g., keyframe animations) may require Tailwind plugin extensions or inline styles if not natively supported.
- Exact pixel-perfect matching with previous CSS may not always be possible, but close visual parity is the goal.

## Patterns
- Use Tailwind's responsive, hover, and focus utilities to replicate all interactive and adaptive styles.
- Prefer removing custom CSS files entirely after migration.

---

_This design document is included because the migration impacts all UI styling and may require discussion of animation or advanced effects._
