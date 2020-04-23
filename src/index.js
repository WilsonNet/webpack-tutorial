import HelloWorldButton from './components/hello-world-button';
import Heading from './components/heading';
import addImage from './add-image.js';

const heading = new Heading();
heading.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('prod');
} else if (process.env.NODE_ENV === 'development') {
  console.log('dev');
}

