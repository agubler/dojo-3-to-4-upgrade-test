import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import request from '@dojo/framework/core/request';
import { Outlet } from '@dojo/framework/routing/Outlet';
import { deepAssign } from '@dojo/framework/core/lang';
import uuid from '@dojo/framework/core/uuid';

deepAssign({ id: uuid() }, {});

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
