import React from 'react';

interface PromotionChancesProps {
  chance?: string;
}

const PromotionChances: React.FC<PromotionChancesProps> = ({ chance }) => {
  const rotation = chance === 'Low' ? '315deg' : chance === 'Medium' ? '0deg' : '45deg';

  return (
    <div>
      <h2 style={{ margin: 0 }}>Chances of Promotion</h2>
      <p>{chance}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '200px', height: '100px', margin: '10px' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '100px 100px 0 0',
              background: 'linear-gradient(to right, red 33%, yellow 33%, yellow 66%, green 66%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: '2px',
              height: '70px',
              backgroundColor: '#000',
              transformOrigin: 'bottom',
              transform: `translateX(-50%) rotate(${rotation})`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionChances;