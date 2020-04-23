import './hello-world-button.css';

class HelloWorldButton {
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    button.classList.add('hellow-world-button');
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hellow World';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    };

    const body = document.querySelector('body');
    body.appendChild(button);
  }
}

export default HelloWorldButton;
