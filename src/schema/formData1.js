export const formData1 = [
  {
    id: "configName",
    label: "configName",
    placeholder: "configName",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["configName is required"],
      },
    ],
  },
    {
      id: "parameter1",
      label: "parameter1",
      placeholder: "parameter1",
      type: "text",
      validationType: "string",
      value: "",
      validations: [
        {
          type: "required",
          params: ["parameter1 is required"],
        },
      ],
    },
    {
        id: "parameter2",
      label: "parameter2",
      placeholder: "parameter2",
      type: "text",
      validationType: "number",
      value: 5,
      validations: [
        {
          type: "min",
          params: [0, "parameter2 should be greater than 0"],
        },
      ],

    },
    {
        id: "parameter3",
      label: "parameter3",
      placeholder: "parameter3",
      type: "text",
      validationType: "boolean",
      value: false,
      validations: [
        
      ],

    },
    {
      id: "parameter4",
      label: "parameter4",
      placeholder: "parameter4",
      type: "text",
      validationType: "number",
      value: -2,
      validations: [
          {
            type: "min",
            params: [-10, "parameter4 should be greater than -10"],
          },
          {
            type: "max",
            params: [10, "parameter4 should be lower than 10"],
          },
      ],

    },
    {
        id: "parameter8",
      label: "parameter8",
      placeholder: "parameter8",
      type: "text",
      validationType: "string",
      value: '',
      validations: [
          
      ],

    }
  ];