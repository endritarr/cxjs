import {Md} from '../../../components/Md';

import classAndStyle from './classAndStyle';
import pureContainer from './PureContainer';

export default {
    ...classAndStyle,
    ...pureContainer,
    field: {
        type: 'string',
        key: true,
        description: <cx><Md>
            Name of the property inside the record to be displayed. Used for displaying or sorting.
        </Md></cx>
    },
    header: {
        type: 'string/config',
        key: true,
        description: <cx><Md>
            Text to be shown in the header or a header configuration object. Use the `items` property to put stuff
            inside the header.
        </Md></cx>
    },
    format: {
        type: 'string',
        key: true,
        description: <cx><Md>
            A format to be used for formatting of cell values.
        </Md></cx>
    },
    footer: {
        type: 'string',
        description: <cx><Md>
            Value to be rendered in the footer.
        </Md></cx>
    },
    caption: {
        type: 'string',
        description: <cx><Md>
            Value to be rendered in the group caption.
        </Md></cx>
    },
    aggregate: {
        type: 'string',
        description: <cx><Md>
            Aggregate function used on the column. Allowed values: `sum`, `count`, `distinct`, `avg`.
        </Md></cx>
    },
    aggregateField: {
        type: 'string',
        description: <cx><Md>
            Name of the field used for aggregation. Use if it's different than `field`.
        </Md></cx>
    },
    aggregateAlias: {
        type: 'string',
        description: <cx><Md>
            Name under which aggregate result will be available. Use if it's different than `aggregateField`.
        </Md></cx>
    },
    aggregateValue: {
        type: 'any',
        description: <cx><Md>
            A value or an expression used to retrieve the value that will be passed to the aggregate function.
        </Md></cx>
    },
    weightField: {
        type: 'string',
        description: <cx><Md>
            Name of the field used as a weight for weighted averages.
        </Md></cx>
    },
    align: {
        type: 'text',
        key: true,
        description: <cx><Md>
            Column alignment. One of `left`, `right` or `center`.
        </Md></cx>
    },
    sortable: {
        type: 'text',
        key: true,
        description: <cx><Md>
            Set to `true` if the column is sortable.
        </Md></cx>
    },
    pad: {
        type: 'text',
        description: <cx><Md>
            Set to `false` to remove padding around the cell value.
        </Md></cx>
    },
    sortField: {
        type: 'text',
        description: <cx><Md>
            A field used for sorting purposes. E.g. sort by month number instead of month name.
        </Md></cx>
    },
    editable: {
        type: 'bool',
        description: <cx><Md>
            Indicate if a cell is editable or not. Default value is `true`.
        </Md></cx>
    },
    editor: {
        type: 'config',
        description: <cx><Md>
            Cell editor configuration.
        </Md></cx>
    }
};
