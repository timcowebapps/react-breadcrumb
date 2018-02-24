'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes, IJsonSchema } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { BreadcrumbProps } from './breadcrumb-props';

const Breadcrumb: React.StatelessComponent<any> = (props: BreadcrumbProps.IProps) => {
	const { schema, ...attributes } = props;
	const options = _.merge({}, this.default.defaultProps.schema, schema);

	const classes = options.properties.classes;
	const itemLength = schema.items.length;

	// https://timcowebapps.github.io/react-breadcrumb/ru
	const microdataRoot = {
		href: '/ru',
		content: 'Russian'
	}

	return (
		<ul itemScope itemType="https://schema.org/BreadcrumbList" className={classes.pipeline[classes.block]}>
			<span itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
				<link href={microdataRoot.href} itemProp="item" />
				<meta content={microdataRoot.content} itemProp="name" />
			</span>

			{schema.items.map((item: IJsonSchema, idx: number) => {
				if (idx == itemLength - 1 && _.isEmpty(item.properties.link)) {
					return (
						<li className={Classes.bem(classes.pipeline, classes.block, { element: 'item' })} key={idx}>
							{item.properties.title}
						</li>
					)
				} else {
					return (
						<li className={Classes.bem(classes.pipeline, classes.block, { element: 'item' })} key={idx} itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
							<a itemProp="item" href={item.properties.link}><span itemProp="name">{item.properties.title}</span></a>
						</li>
					)
				}
			})}
		</ul>
	);
};

Breadcrumb.propTypes = BreadcrumbProps.types;
Breadcrumb.defaultProps = BreadcrumbProps.defaults;

export default Breadcrumb;
