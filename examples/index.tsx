'use strict';

/* Внешние зависимости */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/* Внутрение зависимости */
import Breadcrumb from '../src/components/breadcrumb';

import 'timcowebapps-scss-dir/_reboot.scss';
var styles: any = require('./index.scss');

const App: React.StatelessComponent<any> = (props: any) => {
	return (
		<Breadcrumb schema={{
			properties: {
				classes: {
					pipeline: styles,
					block: "breadcrumb"
				}
			},
			items: [{
				id: 0,
				properties: {
					title: 'Главная',
					link: 'https://timcowebapps.github.io/react-breadcrumb/'
				}
			}, {
				id: 1,
				properties: {
					title: 'Текущая'
				}
			}]
		}} />
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('react-view')
);
