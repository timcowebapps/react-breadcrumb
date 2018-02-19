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

	return (
		<ul className={options.properties.classes.pipeline[options.properties.classes.block]}>
			{schema.items.map((item: IJsonSchema, idx: number) => {
				return (
					<li key={idx} className=""> {
						_.isEmpty(item.properties.link) ? item.properties.title :
							<a href={item.properties.link}>{item.properties.title}</a>
					}
					</li>
				)
			})}
		</ul>
	);
};

Breadcrumb.propTypes = BreadcrumbProps.types;
Breadcrumb.defaultProps = BreadcrumbProps.defaults;

export default Breadcrumb;
