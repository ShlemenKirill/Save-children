import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerForTests from 'containers/ContainerForTests/ContainerForTests';
import { IProjectCardProps } from 'types/propTypes';
import ProjectCard from '../ProjectCard/ProjectCard';

const props: IProjectCardProps = {
  imageUrl: '',
  headerText: 'Test header',
  text: 'Test text',
  pathUrl: '',
};

describe('Project Card', () => {
  beforeEach(() => {
    render(
      <ContainerForTests>
        <ProjectCard {...props} />
      </ContainerForTests>,
    );
  });
  test('should correct render main text', () => {
    const mainText = screen.getByTestId('projectCard-mainText').textContent;
    expect(mainText).toBe(props.text);
  });
  test('should correct render header text', () => {
    const headerText = screen.getByTestId('projectCard-headerText').textContent;
    expect(headerText).toBe(props.headerText);
  });
});
