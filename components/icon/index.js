import Image from 'next/image';
import PropTypes from 'prop-types';

function Icon({ name, onClick, width = 30, height = 30 }) {
  return (
    <Image
      onClick={onClick}
      src={`/icons/${name}.svg`}
      width={width}
      height={height}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Icon;
