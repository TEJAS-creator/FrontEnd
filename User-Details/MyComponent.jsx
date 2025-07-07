import React, { useState } from 'react';
import './MyComponent.css';

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState("1");
  const [comment, setComment] = useState("");
  const [select, setSelect] = useState("");

  const handleDownload = () => {
    const content = `Name: ${name}\nQuantity: ${age}\nComment: ${comment}\nPayment: ${select}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.download = 'UserDetails.txt';
    link.href = url;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="amazon-wrapper">
      <div className="amazon-box">
        <h2>User Details</h2>

        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Name: <span>{name}</span></p>

        <label>Quantity</label>
        <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        <p>Quantity: <span>{age}</span></p>

        <label>Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
        />
        <p>Comment: <span>{comment}</span></p>

        <label>Payment Method</label>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="">Select an option</option>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="Visa">Visa</option>
          <option value="giftcard">GiftCard</option>
        </select>
        <p>Payment: <span>{select}</span></p>

        <button className="amazon-btn" onClick={handleDownload}>Submit</button>
      </div>
    </div>
  );
}

export default MyComponent;
