export const formData2 = [
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
        id: "parameter10",
        label: "parameter10",
        placeholder: "parameter10",
        type: "select",
        validationType: "string",
        value: "",
        options:["option1","option2","option3"],
        validations: [
          {
            type: "required",
            params: ["parameter10 is required"],
          },
        ],
      },
      {
          id: "parameter14",
        label: "parameter14",
        placeholder: "parameter14",
        type: "text",
        validationType: "boolean",
        value: true,
        validations: [
          
        ],
  
      },
      {
          id: "parameter15",
        label: "parameter15",
        placeholder: "parameter15",
        type: "text",
        validationType: "number",
        value: 0.35,
        validations: [
            {
                type: "min",
                params: [0, "parameter4 should be greater than 0"],
              },
              {
                type: "max",
                params: [1, "parameter4 should be lower than 1"],
              },
        ],
  
      },
      {
        id: "parameter16",
        label: "parameter16",
        placeholder: "parameter16",
        type: "text",
        validationType: "number",
        value: 0.7,
        validations: [
            {
              type: "min",
              params: [-1, "parameter4 should be greater than -1"],
            },
            {
              type: "max",
              params: [1, "parameter4 should be lower than 1"],
            },
        ],
  
      },
      {
          id: "parameter17",
        label: "parameter17",
        placeholder: "parameter17",
        type: "text",
        validationType: "string",
        value: '',
        validations: [
            
        ],
  
      },
      {
        id: "parameter18",
      label: "parameter18",
      placeholder: "parameter18",
      type: "text",
      validationType: "number",
      value: '',
      validations: [
          
      ],

    }
    ];