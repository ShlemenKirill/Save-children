import { useTranslation } from 'react-i18next';

export const useNavigationHeaders = () => {
  const { t } = useTranslation();
  const NAVIGATION_MAIN = t('navigation.main');
  const NAVIGATION_ABOUT = t('navigation.aboutUs');
  const NAVIGATION_OUR_PROJECTS = t('navigation.ourProjects');
  const NAVIGATION_INFORMATION = t('navigation.information');
  const NAVIGATION_REPORTS = t('navigation.reports');
  const NAVIGATION_PARTNERS = t('navigation.partners');
  const NAVIGATION_VOLUNTEERS = t('navigation.volunteers');
  const NAVIGATION_CONTACTS = t('navigation.contacts');

  return {
    NAVIGATION_MAIN,
    NAVIGATION_ABOUT,
    NAVIGATION_OUR_PROJECTS,
    NAVIGATION_INFORMATION,
    NAVIGATION_REPORTS,
    NAVIGATION_PARTNERS,
    NAVIGATION_VOLUNTEERS,
    NAVIGATION_CONTACTS,
  };
};
