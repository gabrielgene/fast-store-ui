import Image from 'next/image';
import { SERVER_URI } from '~/config/apollo-client';

export default function ProductImage(props) {
  const url = `${SERVER_URI}${props.src}`;
  return <Image {...props} src={url} />;
}
