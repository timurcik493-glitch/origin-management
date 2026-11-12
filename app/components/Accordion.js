'use client';
import { useState } from 'react';

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div
              className="accordion-head"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.title}</span>
            </div>
            {isOpen && (
              <div className="accordion-body">
                {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}