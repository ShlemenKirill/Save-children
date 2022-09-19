import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { Link } from '@mui/material';
import { IDownloadLinkProps } from 'types/propTypes';

const DownloadLink = ({ fileName, src }: IDownloadLinkProps) => {
  return (
    <Link
      download={fileName}
      href={src}
      sx={{
        color: colors.violet,
        ...fonts.montserratNormal16,
        textDecorationColor: colors.violet,
        textUnderlineOffset: '2px',
      }}
    >
      {' '}
      Скачати
    </Link>
  );
};

export default DownloadLink;
