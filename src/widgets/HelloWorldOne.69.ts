import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import request from '@dojo/framework/core/request';
import { Outlet } from '@dojo/framework/routing/Outlet';

import 'HelloWorldOne.1.ts';
import 'HelloWorldOne.2.ts';
import 'HelloWorldOne.3.ts';
import 'HelloWorldOne.4.ts';
import 'HelloWorldOne.5.ts';
import 'HelloWorldOne.6.ts';
import 'HelloWorldOne.7.ts';
import 'HelloWorldOne.8.ts';
import 'HelloWorldOne.9.ts';
import 'HelloWorldOne.10.ts';
import 'HelloWorldOne.11.ts';
import 'HelloWorldOne.12.ts';
import 'HelloWorldOne.13.ts';
import 'HelloWorldOne.14.ts';
import 'HelloWorldOne.15.ts';
import 'HelloWorldOne.16.ts';
import 'HelloWorldOne.17.ts';
import 'HelloWorldOne.18.ts';
import 'HelloWorldOne.19.ts';
import 'HelloWorldOne.20.ts';
import 'HelloWorldOne.21.ts';
import 'HelloWorldOne.22.ts';
import 'HelloWorldOne.23.ts';
import 'HelloWorldOne.24.ts';
import 'HelloWorldOne.25.ts';
import 'HelloWorldOne.26.ts';
import 'HelloWorldOne.27.ts';
import 'HelloWorldOne.28.ts';
import 'HelloWorldOne.29.ts';
import 'HelloWorldOne.30.ts';
import 'HelloWorldOne.31.ts';
import 'HelloWorldOne.32.ts';
import 'HelloWorldOne.33.ts';
import 'HelloWorldOne.34.ts';
import 'HelloWorldOne.35.ts';
import 'HelloWorldOne.36.ts';
import 'HelloWorldOne.37.ts';
import 'HelloWorldOne.38.ts';
import 'HelloWorldOne.39.ts';
import 'HelloWorldOne.40.ts';
import 'HelloWorldOne.41.ts';
import 'HelloWorldOne.42.ts';
import 'HelloWorldOne.43.ts';
import 'HelloWorldOne.44.ts';
import 'HelloWorldOne.45.ts';
import 'HelloWorldOne.46.ts';
import 'HelloWorldOne.47.ts';
import 'HelloWorldOne.48.ts';
import 'HelloWorldOne.49.ts';
import 'HelloWorldOne.50.ts';
import 'HelloWorldOne.51.ts';
import 'HelloWorldOne.52.ts';
import 'HelloWorldOne.53.ts';
import 'HelloWorldOne.54.ts';
import 'HelloWorldOne.55.ts';
import 'HelloWorldOne.56.ts';
import 'HelloWorldOne.57.ts';
import 'HelloWorldOne.58.ts';
import 'HelloWorldOne.59.ts';
import 'HelloWorldOne.60.ts';
import 'HelloWorldOne.61.ts';
import 'HelloWorldOne.62.ts';
import 'HelloWorldOne.63.ts';
import 'HelloWorldOne.64.ts';
import 'HelloWorldOne.65.ts';
import 'HelloWorldOne.66.ts';
import 'HelloWorldOne.67.ts';
import 'HelloWorldOne.68.ts';
import 'HelloWorldOne.69.ts';
import 'HelloWorldOne.70.ts';
import 'HelloWorldOne.71.ts';
import 'HelloWorldOne.72.ts';
import 'HelloWorldOne.73.ts';
import 'HelloWorldOne.74.ts';
import 'HelloWorldOne.75.ts';
import 'HelloWorldOne.76.ts';
import 'HelloWorldOne.77.ts';
import 'HelloWorldOne.78.ts';
import 'HelloWorldOne.79.ts';
import 'HelloWorldOne.80.ts';
import 'HelloWorldOne.81.ts';
import 'HelloWorldOne.82.ts';
import 'HelloWorldOne.83.ts';
import 'HelloWorldOne.84.ts';
import 'HelloWorldOne.85.ts';
import 'HelloWorldOne.86.ts';
import 'HelloWorldOne.87.ts';
import 'HelloWorldOne.88.ts';
import 'HelloWorldOne.89.ts';
import 'HelloWorldOne.90.ts';
import 'HelloWorldOne.91.ts';
import 'HelloWorldOne.92.ts';
import 'HelloWorldOne.93.ts';
import 'HelloWorldOne.94.ts';
import 'HelloWorldOne.95.ts';
import 'HelloWorldOne.96.ts';
import 'HelloWorldOne.97.ts';
import 'HelloWorldOne.98.ts';
import 'HelloWorldOne.99.ts';
import 'HelloWorldOne.100.ts';

console.log(request);

import * as css from './styles/helloWorld.m.css';

class A extends WidgetBase {}

const B = Outlet(A, '', {});

console.log(B);

const logo = require('./../img/logo.svg');

/**
 * A "Hello World" widget that renders a spinning Dojo 2 logo and the text "Hello, Dojo 2 World!".
 *
 * Refer to the creating widgets tutorial for help: https://dojo.io/tutorials/003_creating_widgets/
 */
export class HelloWorld extends WidgetBase {
	protected render() {
		return v('div', { classes: css.root }, [
			v('img', { src: logo, classes: css.logo }),
			v('div', { classes: css.label }, ['Hello, Dojo World!'])
		]);
	}
}

export default HelloWorld;
