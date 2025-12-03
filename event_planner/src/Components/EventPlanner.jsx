import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';
// 以下のように属性として Footer コンポーネントを含めます


const EventPlanner = () => {
    return (
        <div className="event-planner-container">

          {/* ページヘッダー */}
           <header>
            <h1>イベントプランナーへようこそ</h1>
           </header>

          {/* アプリの目的や概要を説明するためのセクション */}
           <section className="description">
                <p>
                 Event Plannerを使って、イベントを簡単に計画・整理しましょう。誕生日から企業の会議まで、私たちがサポートします。
                </p>
               {/* 主なコールトゥアクションボタン */}
               <button className="get-started-button">始める</button>
            {/* 説明内容がここに入ります */}
           </section>

          {/* 様々な種類のイベントをリストまたはカテゴライズするためのセクション */}
           <section className="events_categories">
            {/* イベントカテゴリの内容がここに入ります */}
            <ul>
              <h2>社会的イベント:</h2>
               <li>誕生日パーティー</li>
               <li>記念日のお祝い</li>
               <li>結婚披露宴</li>
               <li>ベビーシャワー</li>
               <li>卒業パーティー</li>
               <li>家族の再会</li>
            </ul>  
            
            <ul>
             <h2>Entertainment Events:</h2>
              <li>Concerts</li>
              <li>Music festivals</li>
              <li>Film screenings</li>
              <li>Comedy shows</li>
              <li>Art exhibitions</li>
              <li>Cultural events</li>
            </ul>
              {/* Community-focused event types */}

            <ul>
             <h2>Community Events:</h2>
              <li>Fundraising events</li>
              <li>Charity galas</li>
              <li>Volunteer drives</li>
              <li>Neighborhood block parties</li>
              <li>Community festivals</li>
              <li>Cultural celebrations</li>
            </ul>

           </section>

          {/* アプリの機能や特徴を強調するためのセクション */}
           <section className="features">
            {/* 機能の内容がここに入ります */}
            <h2>Features</h2>
            {/* List of key platform features */}
             <ul>
              <li>Easy event creation and management</li>
              <li>Customizable event templates</li>
              <li>Guest list management</li>
              <li>Real-time collaboration</li>
              <li>Reminders and notifications</li>
             </ul>
           </section>

          {/* ユーザーレビューや推薦の声を紹介するためのセクション */}
           <section className="testimonials">
            {/* 推薦内容がここに入ります */}
             <h2>Testimonials</h2>
              <div className="testimonial">
               <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
               <p className="author">- Emily Johnson</p>

              <div className="testimonial">
                <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                <p className="author">- John Smith</p>
              </div>
            </div>
           </section>

          {/* 連絡先情報や連絡フォームを提供するためのセクション */}
           <section className="contact">
            {/* 連絡内容がここに入ります */}
            <form>
             {/* 名前入力フィールド */}
              <input type="text" placeholder="名前" />
             {/* メール入力フィールド */}
              <input type="email" placeholder="メール" />
             {/* メッセージテキストエリア */}
              <textarea placeholder="メッセージ"></textarea>
             {/* 送信ボタン */}
              <button className="submit-button">送信</button>
            </form>
           </section>
         <Footer/>
        </div>

        
    );
};

export default EventPlanner;
