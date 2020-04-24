import Heading from './components/heading';
import KiwiImage from './components/kiwi-image';
import React from 'react';

const heading = new Heading();
heading.render(_.upperFirst('kiwi'));

const kiwiImage = new KiwiImage();
kiwiImage.render();
