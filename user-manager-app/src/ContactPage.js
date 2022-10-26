import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ContactPage() {

  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  }
  return (
    <div>
      <h2>Contact Us</h2>

      <button onClick={onClick}>Back</button>
    </div>
  )
}
