import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // ✅ 3つの state
  const [todos, setTodos] = useState([]);          // [{ heading: 'Grocery', lists: ['milk', ...] }, ...]
  const [headingInput, setHeadingInput] = useState(''); // 見出し入力用
  const [listInputs, setListInputs] = useState({});     // 各見出しごとのリスト入力用

  // ✅ 見出しを追加する
  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');
    }
  };

  // ✅ 見出しを削除する
  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  // ✅ 特定の見出し（index）にリスト項目を追加する
  const handleAddList = (index) => {
    // その見出しに対応する入力値が空でないかチェック
    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos];                         // todosのコピーを作る
      newTodos[index].lists.push(listInputs[index]);       // 対象headingのlistsに1件追加
      setTodos(newTodos);                                  // state更新
      setListInputs({ ...listInputs, [index]: '' });       // その見出し用の入力欄をクリア
    }
  };

  // ✅ 各見出しごとのリスト入力欄の値を更新
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>

        {/* 見出し入力＋追加ボタン */}
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)}
          />
          <button
            className="add-list-button"
            onClick={handleAddTodo}
          >
            Add Heading
          </button>
        </div>
      </div>

      {/* 見出しカード＋その下にリストとリスト追加UI */}
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              {/* 見出し表示 */}
              <h3>{todo.heading}</h3>

              {/* 見出し削除ボタン */}
              <button
                className="delete-button-heading"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete Heading
              </button>
            </div>

            {/* ✅ ここでリストを表示（ulの中でtodo.listsをmap） */}
            <ul>
              {todo.lists.map((list, listIndex) => (
                <li key={listIndex} className="todo_inside_list">
                  <p>{list}</p>
                </li>
              ))}
            </ul>

            {/* ✅ リスト追加用の入力＋ボタン（add_list） */}
            <div className="add_list">
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={listInputs[index] || ''} // 見出しごとに別の値を保持
                onChange={(e) =>
                  handleListInputChange(index, e.target.value)
                }
              />
              <button
                className="add-list-button"
                onClick={() => handleAddList(index)}
              >
                Add List
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
