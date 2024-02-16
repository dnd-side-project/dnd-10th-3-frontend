import Image from 'next/image';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Image>;

const Img = ({ src, alt }: Props) => {
  return (
    <div className="relative size-md overflow-hidden">
      <Image src={src} alt={alt} className="rounded-sm object-cover" fill />
    </div>
  );
};

export default Img;
