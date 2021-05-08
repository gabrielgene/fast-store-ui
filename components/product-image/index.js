import Image from 'next/image';

const loader = ({ src, width }) => {
  return `https://ik.imagekit.io/9bgpx0om9/${src}?w=${width}`;
};;

export default function ProductImage(props) {
  return <Image {...props} src={props.src} loader={loader} />;
}
