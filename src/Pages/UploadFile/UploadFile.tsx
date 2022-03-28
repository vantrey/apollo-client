import React, { ChangeEvent, FC } from 'react';
import { useUploadMutation } from '../../queries/uploadFile.generated';

const UploadFile: FC = () => {
  const [upload, { data }] = useUploadMutation();

  const onFileChange = async ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    const file = files && files[0];

    if (file) {
      await upload({ variables: { file } });
    }
  };

  return (
    <>
      <input type="file" name="file" onChange={onFileChange} />
      <div>
        {data?.uploadFile && <>FILE UPLOADED</>}
      </div>
    </>
  );
};

export default UploadFile;
