import snippets from './snippets';

export default {
  snippets,
  componentName: 'Table',
  title: 'Table',
  category: 'Display',
  props: [
    {
      title: 'Data Source',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'dataSource',
          title: { label: 'dataSource', tip: 'dataSource' },
          propType: 'object',
          setter: 'JsonSetter',
          supportVariable: true,
        },
        {
          name: 'loading',
          title: { label: 'loading', tip: 'loading' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          supportVariable: true,
        },
        {
          name: 'rowKey',
          title: {
            label: 'rowKey',
            tip: 'The value of the table row key, which can be a string or a function',
          },
          propType: { type: 'oneOfType', value: ['string', 'func'] },
          setter: [
            'StringSetter',
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getRowKey(record,index,${extParams}){\n//Get table row key through function\nreturn record.id;\n}',
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'id',
        },
      ],
    },
    {
      name: 'columns',
      title: { label: 'columns', tip: 'The configuration description of the table column, see the table below for specific items' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'title',
                    title: { label: 'title', tip: 'title' },
                    propType: { type: 'oneOfType', value: ['string', 'func'] },
                    setter: [
                      'StringSetter',
                      {
                        componentName: 'SlotSetter',
                        title: 'column header slot',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['options'],
                          value: [],
                        },
                      },
                    ],
                  },
                  {
                    name: 'dataIndex',
                    title: { label: 'dataIndex', tip: 'dataIndex' },
                    propType: 'string',
                    setter: 'StringSetter',
                    isRequired: true,
                  },
                  {
                    name: 'key',
                    title: { label: 'React key', tip: 'key' },
                    propType: 'string',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'align',
                    title: { label: 'align', tip: 'align' },
                    propType: {
                      type: 'oneOf',
                      value: ['left', 'right', 'center'],
                    },
                    defaultValue: 'left',
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'left',
                              value: 'left',
                            },
                            {
                              title: 'right',
                              value: 'right',
                            },
                            {
                              title: 'center',
                              value: 'center',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                  {
                    name: 'fixed',
                    title: { label: 'fixed', tip: 'fixed' },
                    description: '(Invalid under IE) Whether the column is fixed, optional true (equivalent to left) left right',
                    defaultValue: '',
                    propType: {
                      type: 'oneOf',
                      value: ['', 'left', 'right'],
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'not fixed',
                              value: '',
                            },
                            {
                              title: 'left',
                              value: 'left',
                            },
                            {
                              title: 'right',
                              value: 'right',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                  {
                    name: 'className',
                    title: {
                      label: 'className',
                      tip: 'className',
                    },
                    propType: 'string',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'width',
                    title: { label: 'width', tip: 'width' },
                    propType: {
                      type: 'oneOfType',
                      value: ['number', 'string'],
                    },
                    setter: ['NumberSetter', 'StringSetter', 'VariableSetter'],
                  },
                  {
                    name: 'sorter',
                    title: {
                      label: 'sorter',
                      tip: 'Sorting function, local sorting uses a function, which needs to be set to true for server-side sorting',
                    },
                    propType: { type: 'oneOfType', value: ['bool', 'func'] },
                    setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter'],
                  },
                  {
                    name: 'hidden',
                    title: {
                      label: 'hidden',
                      tip: 'Whether to hide the current column',
                    },
                    propType: 'bool',
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'filters',
                    title: {
                      label: 'filters',
                      tip: 'Filter menu items in header',
                    },
                    propType: 'object',
                    setter: 'JsonSetter',
                  },
                  {
                    name: 'render',
                    title: {
                      label: 'render',
                      tip:
                        'The material expression in the slot can get the current row data through this.record, and this.index gets the index',
                    },
                    propType: 'func',
                    setter: [
                      {
                        componentName: 'SlotSetter',
                        title: 'cell slot',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['text', 'record', 'index'],
                          value: [],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                ],
              },
            },
            initialValue: { title: 'Title' },
          },
        },
      },
    },
    {
      title: 'Exterior',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'showHeader',
          title: { label: 'showHeader', tip: 'showHeader' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'bordered',
          title: {
            label: 'bordered',
            tip: 'bordered',
          },
          propType: 'bool',
          setter: 'BoolSetter',
        },
        {
          name: 'size',
          title: { label: 'size', tip: 'size' },
          propType: {
            type: 'oneOf',
            value: ['default', 'middle', 'small'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'default',
                    value: 'default',
                  },
                  {
                    title: 'middle',
                    value: 'middle',
                  },
                  {
                    title: 'small',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'default',
        },
        {
          name: 'tableLayout',
          title: { label: 'tableLayout', tip: 'tableLayout' },
          defaultValue: '',
          propType: {
            type: 'oneOf',
            value: ['', 'auto', 'fixed'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'default',
                    value: '',
                  },
                  {
                    title: 'auto',
                    value: 'auto',
                  },
                  {
                    title: 'fixed',
                    value: 'fixed',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: 'Paging',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'pagination',
          title: { label: 'pagination', tip: 'pagination' },
          propType: 'object',
          setter: 'BoolSetter',
          extraProps: {
            setValue: (target, value) => {
              if (value) {
                target.parent.setPropValue('pagination', {
                  pageSize: 10,
                });
              }
            },
          },
        },
        {
          name: 'pagination.pageSize',
          title: { label: 'pageSize', tip: 'pagination.pageSize' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.total',
          title: { label: 'total', tip: 'pagination.total' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.defaultCurrent',
          title: {
            label: 'defaultCurrent',
            tip: 'Default current page number',
          },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.current',
          title: { label: 'current', tip: 'current page number' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showTotal',
          title: {
            label: 'showTotal',
            tip: 'Used to display the total amount of data and the current data sequence',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'showTotal(total,range,${extParams}){\n//Used to format and display the total amount of table data\nreturn `Total ${total} items`;\n}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showSizeChanger',
          title: {
            label: 'showSizeChanger',
            tip: 'Whether to show the pageSize switcher',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showQuickJumper',
          title: {
            label: 'showQuickJumper',
            tip: 'Is it possible to quickly jump to a certain page',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.simple',
          title: { label: 'simple', tip: 'pagination.simple' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.size',
          title: { label: 'size', tip: 'pagination.size' },
          propType: {
            type: 'oneOf',
            value: ['default', 'small'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'default',
                    value: 'default',
                  },
                  {
                    title: 'small',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'default',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.position',
          title: { label: 'position', tip: 'pagination.position' },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    {
                      title: 'topLeft',
                      value: 'topLeft',
                    },
                    {
                      title: 'topCenter',
                      value: 'topCenter',
                    },
                    {
                      title: 'topRight',
                      value: 'topRight',
                    },
                    {
                      title: 'bottomLeft',
                      value: 'bottomLeft',
                    },
                    {
                      title: 'bottomCenter',
                      value: 'bottomCenter',
                    },
                    {
                      title: 'bottomRight',
                      value: 'bottomRight',
                    },
                  ],
                },
                initialValue: 'bottomRight',
              },
            },
          },
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
      ],
    },
    {
      title: 'Scroll',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'scroll.scrollToFirstRowOnChange',
          title: {
            label: 'scrollToFirstRowOnChange',
            tip: 'scroll.scrollToFirstRowOnChange',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'scroll.x',
          title: {
            label: 'horizontal scroll',
            tip:
              'set horizontal scrolling, can also be used to specify the width of the scrolling area, can be set as pixel value, percentage, true and max-content',
          },
          propType: { type: 'oneOfType', value: ['number', 'bool'] },
          setter: ['NumberSetter', 'BoolSetter', 'VariableSetter'],
        },
        {
          name: 'scroll.y',
          title: {
            label: 'vertical scroll',
            tip: 'Set the vertical scrolling, and can also be used to specify the height of the scrolling area, which can be set as a pixel value',
          },
          propType: 'number',
          setter: ['NumberSetter', 'VariableSetter'],
        },
      ],
    },
    {
      title: 'Row Selector',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'rowSelection',
          title: { label: 'rowSelection', tip: 'rowSelection' },
          propType: 'object',
          setter: 'BoolSetter',
          extraProps: {
            setValue: (target, value) => {
              if (value) {
                target.parent.setPropValue('rowSelection', {
                  type: 'radio',
                });
              }
            },
          },
        },
        {
          name: 'rowSelection.type',
          title: { label: 'type', tip: 'rowSelection.type' },
          propType: {
            type: 'oneOf',
            value: ['checkbox', 'radio'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'checkbox',
                    value: 'checkbox',
                  },
                  {
                    title: 'radio',
                    value: 'radio',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.fixed',
          title: {
            label: 'fixed',
            tip: 'rowSelection.fixed',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.selectedRowKeys',
          title: {
            label: 'selectedRowKeys',
            tip: 'rowSelection.selectedRowKeys',
          },
          propType: 'object',
          setter: 'JsonSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.preserveSelectedRowKeys',
          title: { label: 'preserveSelectedRowKeys', tip: 'Retain option when data is deleted' },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.getCheckboxProps',
          title: {
            label: 'getCheckboxProps',
            tip: 'The default attribute configuration of the selection box',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getCheckboxProps(record,${extParams}){\n//The default property configuration of the checkbox\nreturn { disabled: false };\n}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
      ],
    },
    {
      title: 'Row Expand',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'expandable.expandedRowRender',
          title: {
            label: 'expandedRowRender',
            tip: 'expandable.expandedRowRender',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: 'expand row slot',
              initialValue: {
                type: 'JSSlot',
                params: ['record', 'index', 'indent', 'expanded'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'expandedRowRender(record,index,indent,expanded,${extParams}){\n//Expanded row rendering\nreturn `${record.id}`}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'expandable.rowExpandable',
          title: {
            label: 'rowExpandable',
            tip: 'whether the row is expandable',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'rowExpandable(record,${extParams}){\n//Whether the row can be expanded\nreturn true;\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: 'Expand',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'title',
          title: { label: 'title', tip: 'title' },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: 'table title slot',
              initialValue: {
                type: 'JSSlot',
                params: ['currentPageData'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'renderTitle(currentPageData,${extParams}){\n//custom rendering table top\nreturn "table top";\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'footer',
          title: { label: 'footer', tip: 'footer' },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: 'table footer slot',
              initialValue: {
                type: 'JSSlot',
                params: ['currentPageData'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'renderFooter(currentPageData,${extParams}){\n//custom rendering table footer\nreturn "table footer";\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'onHeaderRow',
          title: { label: 'onHeaderRow', tip: 'Set header row properties' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onHeaderRow(columns,index,${extParams}){\n//Set header row properties\nreturn {onClick:()=>{}};\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'onRow',
          title: { label: 'onRow', tip: 'Set row properties' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onRow(record,index,${extParams}){\n//Set row properties\nreturn {onClick:event=>{}};\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'rowClassName',
          title: { label: 'rowClassName', tip: 'rowClassName' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'rowClassName(record,index,${extParams}){\n//The class name of the table row\nreturn `className-${record.type}`;\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(pagination,filters,sorter,extra,${extParams}){\n//form page turning event\nconsole.log('onChange', pagination);}",
        },
        {
          name: 'rowSelection.onChange',
          template:
            "onRowSelectionChange(selectedRowKeys,selectedRows,${extParams}){\n//Callback when the selected item changes\nconsole.log('onRowSelectionChange', selectedRowKeys, selectedRows);}",
        },
        {
          name: 'expandable.onExpand',
          template:
            "onExpandableExpand(expanded,record){\n//Triggered when the expand icon is clicked\nconsole.log('onRowSelectionChange', expanded, record);}",
        },
      ],
    },
  },
};
