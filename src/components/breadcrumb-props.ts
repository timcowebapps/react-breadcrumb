'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export namespace BreadcrumbProps {
	export interface IProps extends React.Props<any> {
		/**
		 * Схема.
		 * 
		 * @type {IJsonSchema}
		 * @memberof BreadcrumbProps.IProps
		 */
		schema: IJsonSchema;
	}

	export const types = {
		schema: PropTypes.shape({
			properties: PropTypes.shape({
				classes: PropTypes.shape({
					pipeline: PropTypes.object.isRequired,
					block: PropTypes.string,
					//modifiers: PropTypes.oneOfType
				})
			})
		})
	}

	export const defaults = {
		schema: {
			properties: {
				classes: {
					pipeline: null,
					block: "breadcrumb"
				}
			}
		}
	};
};