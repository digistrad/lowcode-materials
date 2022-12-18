import snippets from './snippets';

export default {
  snippets,
  componentName: 'Upload',
  title: 'Upload',
  category: 'Form',
  props: [
    {
      title: 'Basic',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultFileList',
          title: {
            label: 'defaultFileList',
            tip: 'defaultFileList',
          },
          propType: { type: 'arrayOf', value: 'object' },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'name',
                        title: 'name',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'status',
                        title: 'status',
                        setter: {
                          componentName: 'SelectSetter',
                          props: {
                            options: [
                              'error',
                              'success',
                              'done',
                              'uploading',
                              'removed',
                            ].map((v) => ({ label: v, value: v })),
                          },
                        },
                      },
                      {
                        name: 'url',
                        title: 'url',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'url',
                        title: 'url',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'response',
                        title: 'response',
                        setter: 'StringSetter',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        {
          name: 'fileList',
          title: {
            label: 'fileList',
            tip: 'List of currently uploaded files (controlled)',
          },
          propType: { type: 'arrayOf', value: 'object' },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'name',
                        title: 'name',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'status',
                        title: 'status',
                        setter: {
                          componentName: 'SelectSetter',
                          props: {
                            options: [
                              'error',
                              'success',
                              'done',
                              'uploading',
                              'removed',
                            ].map((v) => ({ label: v, value: v })),
                          },
                        },
                      },
                      {
                        name: 'url',
                        title: 'url',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'url',
                        title: 'url',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'response',
                        title: 'response',
                        setter: 'StringSetter',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        {
          name: 'multiple',
          title: {
            label: 'multiple',
            tip: 'Whether to support multi-select files, `ie10+` support. Hold down ctrl after opening to select multiple files',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'maxCount',
          title: {
            label: 'maxCount',
            tip: 'Limit the number of uploads. When 1, always replace the current file with the latest uploaded file',
          },
          propType: 'number',
          setter: 'NumberSetter',
        },
        {
          name: 'accept',
          title: {
            label: 'accept',
            tip: 'Accept uploaded file types, such as .doc, .docx, application/msword',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'directory',
          title: {
            label: 'directory',
            tip: 'Support for uploading folders',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'disabled',
          title: { label: 'disabled', tip: 'Is it disabled' },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
      ],
    },
    {
      title: 'Advanced',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'openFileDialogOnClick',
          title: {
            label: 'openFileDialogOnClick',
            tip: 'openFileDialogOnClick',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'showUploadList',
          title: {
            label: 'showUploadList',
            tip: 'Whether to display the list of uploaded files,',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'listType',
          title: {
            label: 'listType',
            tip:
              'The built-in style of the upload list, supports three basic styles `text`, `picture` and `picture-card`',
          },
          propType: {
            type: 'oneOf',
            value: ['text', 'picture', 'picture-card'],
          },
          defaultValue: 'text',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'text',
                    value: 'text',
                  },
                  {
                    title: 'picture',
                    value: 'picture',
                  },
                  {
                    title: 'picture-card',
                    value: 'picture-card',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'iconRender',
          title: { label: 'iconRender', tip: 'custom display icon' },
          propType: 'func',
          setter: {
            componentName: 'SlotSetter',
            title: 'custom icon slot',
            initialValue: {
              type: 'JSSlot',
              params: ['file', 'listType'],
              value: [],
            },
          },
        },
        {
          name: 'itemRender',
          title: {
            label: 'itemRender',
            tip: 'Custom Upload List Items',
          },
          propType: 'func',
          setter: {
            componentName: 'SlotSetter',
            title: 'custom list item slot',
            initialValue: {
              type: 'JSSlot',
              params: ['originNode', 'file', 'fileList', 'actions'],
              value: [],
            },
          },
        },
        {
          name: 'progress',
          title: { label: 'progress', tip: 'Custom progress bar style' },
          propType: 'object',
          setter: 'JsonSetter',
        },
      ],
    },
    {
      title: 'Upload parameters',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'action',
          title: { label: 'upload address', tip: 'URL or method of upload' },
          propType: { type: 'oneOfType', value: ['string', 'func'] },
          setter: ['StringSetter', 'FunctionSetter', 'VariableSetter'],
        },
        {
          name: 'name',
          title: { label: 'name', tip: 'The file parameter name sent to the background' },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'method',
          title: {
            label: 'method',
            tip: 'upload request http method',
          },
          propType: {
            type: 'oneOf',
            value: ['get', 'post', 'put', 'head', 'options', 'patch', 'delete'],
          },
          defaultValue: 'post',
          setter: 'StringSetter',
        },
        {
          name: 'headers',
          title: {
            label: 'headers',
            tip: 'Set the upload request header, valid for IE10 and above',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'withCredentials',
          title: {
            label: 'withCredentials',
            tip: 'Whether to carry cookies when uploading requests',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'data',
          title: {
            label: 'extra parameters',
            tip: 'Upload the required extra parameters or return the method of uploading extra parameters',
          },
          propType: { type: 'oneOfType', value: ['object', 'func'] },
          setter: [
            'JsonSetter',
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'onData(file,${extParams}){\n//Additional parameters required for upload\nreturn {};\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: 'Callback',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'beforeUpload',
          title: {
            label: 'beforeUpload',
            tip: 'Callback function before uploading files',
          },
          propType: 'func',
          setter: {
            componentName: 'FunctionSetter',
            props: {
              template:
                'beforeUpload(file,fileList,${extParams}){\n//hook before uploading files\nreturn false;\n}',
            },
          },
        },
        {
          name: 'customRequest',
          title: {
            label: 'customRequest',
            tip: 'You can customize your own upload implementation by overriding the default upload behavior',
          },
          propType: 'func',
          setter: 'FunctionSetter',
        },
        {
          name: 'isImageUrl',
          title: {
            label: 'isImageUrl',
            tip: 'Whether the custom thumbnail is displayed using the <img /> tag',
          },
          propType: 'func',
          setter: {
            componentName: 'FunctionSetter',
            props: {
              template: 'isImageUrl(file,${extParams}){\n//Determine whether it is an image\nreturn true;\n}',
            },
          },
        },
        {
          name: 'previewFile',
          title: {
            label: 'previewFile',
            tip: 'Custom file preview logic',
          },
          propType: 'func',
          setter: 'FunctionSetter',
        },
      ],
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange({file,fileList,event},${extParams}){\n//Callback when the uploaded file changes\nconsole.log('onChange',file,fileList,event);}",
        },
        {
          name: 'onPreview',
          template:
            "onPreview(file,${extParams}){\n//Callback when clicking the file link or preview icon\nconsole.log('onPreview',file);}",
        },
        {
          name: 'onRemove',
          template:
            "onRemove(file,${extParams}){\n//Callback when clicking to remove a file\nconsole.log('onRemove',file);}",
        },
        {
          name: 'onDownload',
          template:
            "onDownload(file,${extParams}){\n//Callback when clicking to download a file\nconsole.log('onDownload',file);}",
        },
      ],
    },
  },
};
