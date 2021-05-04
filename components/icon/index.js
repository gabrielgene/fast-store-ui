import Image from 'next/image';
import PropTypes from 'prop-types';
import { LOCAL_URI } from '~/apollo/client';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
  // return `${LOCAL_URI}/${src}?w=${width}&q=${quality || 75}`;
};;

function Icon({ name, onClick, width = 30, height = 30 }) {
  return (
    <Image
      onClick={onClick}
      loader={myLoader}
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
