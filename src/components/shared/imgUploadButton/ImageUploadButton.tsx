import { ChangeEvent } from 'react';

import { Icon } from '@/components/common/icon';

type Props = { uploadHandler: (e: ChangeEvent<HTMLInputElement>) => void };

const ImageUploadButton = ({ uploadHandler }: Props) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="file" className="cursor-pointer">
        <Icon icon="photo" color="gray-300" size={20} />
      </label>
      <input type="file" id="file" accept="image/*" className="hidden" onChange={uploadHandler} />
    </>
  );
};

export default ImageUploadButton;
