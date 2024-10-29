import PropTypes from 'prop-types';
import './Thumbnail.css';
import { Card } from '@mui/material';

function Thumbnail({ id, image, title, setSelectedDepartId }) {

  const handleClick = () => {
    setSelectedDepartId(id)
  }

  return (
    <a
      href="#todo"
      className="thumbnail-component"
      onClick={() => handleClick()}
    >
      <Card elevation={3}>
        <div style={{ display:'flex', flexDirection: 'column', height: '100%' }}>
          <div>
            <img src={image} alt={title} />
          </div>
          <p>{title}</p>
        </div>
      </Card>
    </a>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
