import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
  mutation Upload($file: Upload) {
    uploadFile(file: $file)
  }
`;
