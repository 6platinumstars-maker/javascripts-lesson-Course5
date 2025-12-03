import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '' // 評価のための新しい状態
  });

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      名前: ${formData.name}
      メール: ${formData.email}
      フィードバック: ${formData.feedback}
      評価: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`あなたの詳細を確認してください:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('フィードバックを送信しています:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '' // 送信後に評価をリセット
      });
      alert('貴重なフィードバックをありがとうございます！');
    }
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

      <input
          type="text"
          name="name"
          placeholder="あなたの名前"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="あなたのメール"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="あなたのフィードバック"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

          <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>評価してください:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                       
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</p>
                </div>

         <button type="submit">フィードバックを送信</button>
      </form>
    </>
  );
};

export default FeedbackForm;
