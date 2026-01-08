import { render } from '@testing-library/react';
import { TodoList, TodoItem } from './TodoList';

describe('TodoList performance', () => {
  it('should render 1000 items in < 200ms', () => {
    const items: TodoItem[] = Array.from({ length: 1000 }, (_, i) => ({
      id: String(i),
      text: `Todo ${i}`,
      completed: false,
    }));
    const onToggle = jest.fn();
    const start = performance.now();
    render(<TodoList items={items} onToggle={onToggle} />);
    const end = performance.now();
    expect(end - start).toBeLessThan(200);
  });
});
