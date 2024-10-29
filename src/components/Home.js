import { useState } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import { deptImages } from '../items';
import './Home.css';
import DeptType from '../types/item';
import ProductDetails from './ProductDetails';

function Home({ departments }) {

  const [selectedDeptId, setSelectedDeptId] = useState(undefined);
  const selectedDept = departments.find(dept => dept.Id === selectedDeptId);

  return (
    <div className="department-component">
      <div className="departments">
        {departments.map((item) => (
          <Thumbnail
            key={item.itemId}
            id={item.Id}
            image={deptImages[item.imageId]}
            title={item.title}
            setSelectedDepartId={setSelectedDeptId}
          />
        ))}
      </div>
      <div className='selected-departement' style={{ display: selectedDeptId === undefined ? 'none' : 'flex' }}>
        <ProductDetails departement={selectedDept}/>
      </div>
    </div>
  );
}

Home.propTypes = {
  departments: PropTypes.arrayOf(DeptType).isRequired,
};

export default Home;
