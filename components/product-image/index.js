import Image from 'next/image';

const loader = ({ src, width }) => {
  return `${src}?w=${width}`;
};;

export default function ProductImage(props) {
  return <Image {...props} src={props.src} loader={loader} />;
}
