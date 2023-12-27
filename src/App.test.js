import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js

import { Default as AppTest } from './App.stories.js';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

test('Checks initial state of button', () => {
    render(<AppTest />);
  
    const buttonElement = screen.getByRole('button', {
      name: 'Click me',
    });

    expect(buttonElement).toBeInTheDocument();
  });

  
test('Checks button click', () => {
    render(<AppTest />);
  
    const buttonElement = screen.getByRole('button', {
        name: 'Click me',
    }); 
    
    fireEvent.click(buttonElement);
    
    expect(screen.getByText('Thanks!')).toBeInTheDocument();
  });

