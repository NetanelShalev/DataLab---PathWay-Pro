import React from 'react';

interface PromotionSuggestionProps {
  suggestion?: string;
}

const PromotionSuggestion: React.FC<PromotionSuggestionProps> = ({ suggestion }) => {
  if (!suggestion) return null;

  const sentences = suggestion.split('. ');

  return (
    <div>
      <h2>Suggestion</h2>
      <p
        style={{
          backgroundColor: '#dce6f1',
          borderRadius: '50px',
          padding: '15px',
          lineHeight: '1.5',
          overflowWrap: 'break-word'
        }}
      >
        {sentences.map((sentence, index) => (
          <span key={index}>
            {sentence}.
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default PromotionSuggestion;