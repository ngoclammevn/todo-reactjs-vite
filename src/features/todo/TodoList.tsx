import React, { memo } from 'react';
import styles from './TodoList.module.css';

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoListProps {
  items: TodoItem[];
  onToggle: (id: string) => void;
}

/**
 * Hiển thị danh sách công việc
 * Sử dụng memo để tránh re-render không cần thiết
 * @param items - Danh sách todo
 * @param onToggle - Hàm toggle trạng thái todo
 */
export const TodoList = memo(({ items, onToggle }: TodoListProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} onClick={() => onToggle(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
});

TodoList.displayName = 'TodoList';
