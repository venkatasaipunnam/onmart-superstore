import React, { useState } from 'react';

const ProductDetails = ({ departement }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [overviewMore, setoverviewMore] = useState('none');
  const [categoryMore, setCategoryMore] = useState('none');

  return (
    <div>
      <h2>{departement?.title}</h2>

      <div>
        <button onClick={() => setActiveTab('overview')}>Overview</button>
        <button onClick={() => setActiveTab('categories')}>Categories</button>
      </div>

      {activeTab === 'overview' && (
        <div>
          <p>This is an over view of the {departement?.title}</p>

          <div>
            <button onClick={()=>setoverviewMore('block')}>Show More Details</button>
            <div style={{ display: overviewMore }}>
              <p>Additional Details of the Department : {departement?.description}</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'categories' && (
        <div>
          <h3>Categories</h3>

          <div>
            <button onClick={()=>setCategoryMore('block')}>Show More Details</button>
            <div style={{ display: categoryMore }}>
              <ul>
                {departement?.categories.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default ProductDetails;