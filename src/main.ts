import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import HelloWorld from './widgets/HelloWorld';
import HelloWorldOne from './widgets/HelloWorldOne';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

import request from '@dojo/framework/core/request';
import { deepAssign } from '@dojo/framework/core/lang';

deepAssign({}, {});

console.log(request);

class App extends WidgetBase {
	render() {
		return v('div', [
			w(HelloWorld, {}),
			w(HelloWorldOne, {})
		]);
	}
}

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/
const Projector = ProjectorMixin(App);
const projector = new Projector();

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append();
