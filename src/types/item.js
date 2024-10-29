import PropTypes from 'prop-types';

const DeptType = PropTypes.shape({
  Id: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  categories: PropTypes.array,
});

export default DeptType;
