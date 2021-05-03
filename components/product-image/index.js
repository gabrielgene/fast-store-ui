import Image from 'next/image';

export default function ProductImage(props) {
  return <Image {...props} src={props.src} />;
}
