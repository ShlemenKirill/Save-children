import { MemoryRouter } from 'react-router-dom';

export interface IContainerForTestsProps {
  children: JSX.Element;
}

const ContainerForTests = ({ children }: IContainerForTestsProps) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

export default ContainerForTests;
