import Image from 'next/image';

export default function ProductGrind() {
  return (
    <div>
      <Image src={`${SERVER_URL}${image[0].url}`} width={162} height={184} />
      Teste
    </div>
  );
}
