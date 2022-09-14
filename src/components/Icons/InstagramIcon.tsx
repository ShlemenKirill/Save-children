import { ISVGIconProps } from 'types/propTypes';

const InstagramIcon = ({ color = '#662C91' }: ISVGIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z'
      ></path>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M16 11.37a4 4 0 11-7.914 1.174A4 4 0 0116 11.37zM17.5 6.5h.01'
      ></path>
    </svg>
  );
};

export default InstagramIcon;
