import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // ✅ 3つのstateを初期化
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({}); // 今後のリスト入力用（現時点では未使用でもOK）




     // ✅ 見出し追加用の関数
   const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');
     }
    };

      // ✅ 見出し削除用の関数（Display Todo Heading の説明に対応）
  const handleDeleteTodo = (index) => {
     const newTodos = [...todos];
     newTodos.splice(index, 1);
     setTodos(newTodos);
  };

  // 特定のtodo見出しに新しいリストアイテムを追加するための関数
  const handleAddList = (index) => {
    // 与えられたインデックスの入力が空でないか、単なる空白でないかチェック
    if (listInputs[index] && listInputs[index].trim() !== '') {
        const newTodos = [...todos]; // 現在のtodos配列のコピーを作成
        newTodos[index].lists.push(listInputs[index]); // 対応する見出しのリストに新しいリストアイテムを追加
        setTodos(newTodos); // 新しいリストアイテムでtodos状態を更新
        setListInputs({ ...listInputs, [index]: '' }); // そのインデックスの入力フィールドをクリア
    }
    };

   // 特定の見出しインデックスのリスト入力値を更新するための関数
   const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value }); // 対応するインデックスのlistInputs状態を更新
    };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>

        {/* 見出し入力＋追加ボタン */}
        <div className="input-container">
          <input
            type="text"
            className="heading-input"              // CSSクラス
            placeholder="Enter heading"            // 何も入っていないときの表示
            value= {headingInput}             
            onChange={(e) => setHeadingInput(e.target.value)} // 入力変化でstate更新
          />
          <button
            className="add-list-button"
            onClick={handleAddTodo}                // クリックで見出し追加
          >
            Add Heading
          </button>
        </div>
      </div>

      {/* 見出しカードを表示するメイン部分 */}
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              {/* 見出しタイトル */}
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
                <li key={listIndex} className='todo_inside_list'>
                <p>{list}</p>
                </li>
               ))}
              </ul> 

             {/* 特定の見出しの下に新しいアイテムを追加するための入力フィールド */}
             <div className='add_list'>
              <input
               type="text"
               className="list-input"
               placeholder="リストを追加"
               value={listInputs[index] || ''}// 現在の見出しインデックスに基づいてlistInputs配列から値を使用
               onChange={(e) => 
                handleListInputChange(index, e.target.value)
               }
               />
               <button 
                 className="add-list-button" 
                 onClick={() => handleAddList(index)}
               >
                リストを追加
                </button>
           </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
