import Image from 'next/image';
import { EXTERNAL_URI } from '~/apollo/client';

export default function ProductImage(props) {
  const url = `${EXTERNAL_URI}${props.src}`;
  return <Image {...props} src={url} />;
}
