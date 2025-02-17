import '../src/index.css' // Đường dẫn đúng đến file chứa Tailwind CSS của bạn


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
