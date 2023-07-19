import { colors } from 'core/constants/colors';
import { fonts } from 'core/constants/fonts';
import { Link } from '@mui/material';
import { IDownloadLinkProps } from 'types/propTypes';
import { useTranslation } from 'react-i18next';

const DownloadLink = ({ fileName, src }: IDownloadLinkProps) => {
  const { t } = useTranslation();
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
      {t('common.download')}
    </Link>
  );
};

export default DownloadLink;
