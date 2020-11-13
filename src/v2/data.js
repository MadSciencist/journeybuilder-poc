export const initialStages_clean = [
  {
    id: "stage1",
    title: "Stage one",
    processes: [
      {
        id: "proc1",
        title: "First Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
      {
        id: "proc2",
        title: "Second Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 663, title: "End Journey" },
        ],
      },
    ],
  },
  {
    id: "stage2",
    title: "Stage Two",
    processes: [
      {
        id: "proc11",
        title: "First Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
      {
        id: "proc23",
        title: "Second Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 663, title: "End Journey" },
        ],
      },
    ],
  },
];

export const initialStages_HasTaskLevelDecision = [
  {
    id: "stage1",
    title: "Stage one",
    processes: [
      {
        id: "proc1",
        title: "First Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
      {
        id: "proc2",
        title: "Second Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          {
            id: 534,
            type: "decision",
            title: "Decision",
            outcomes: [
              { id: 55666, title: "Outcome 1" },
              { id: 5566654, title: "Outcome 2" },
              { id: 6654, title: "Outcome 3" },
            ],
          },
          { id: 663, title: "End Journey" },
        ],
      },
    ],
  },
  {
    id: "Customer Checks",
    title: "Customer Checks",
    processes: [
      {
        id: "Screening",
        title: "Screening",
        tasks: [
          {
            id: "Send for Screening",
            title: "Send for Screening",
          },
          {
            id: "Material Hits Present",
            type: "decision",
            title: "Material Hits Present",
            outcomes: [
              { id: 556266, title: "[Yes] Escalate & End Journey" },
              { id: 231212, title: "[Else]" },
            ],
          },
          {
            id: "Screening Complete",
            title: "Screening Complete",
          },
        ],
      },
      {
        id: "Risk",
        title: "Risk",
        tasks: [
          {
            id: "R12isk Assessment",
            title: "Risk Assessment",
          },
          {
            id: "12High Risk",
            type: "decision",
            title: "High Risk",
            outcomes: [
              { id: 5533666, title: "[Yes] Escalate & End Journey" },
              { id: 2351112, title: "[Else]" },
            ],
          },
          {
            id: "Radomplete Request",
            title: "Complete Request",
          },
        ],
      },
    ],
  },
  {
    id: "Final Review",
    title: "Final Review",
    processes: [
      {
        id: "Reviews",
        title: "Reviews",
        tasks: [
          { id: 123, title: "Onboarding Review" },
          {
            id: 123444,
            title: "Additional Escalation Triggers",
            type: "decision",
            outcomes: [
              { id: 55666, title: "[Yes] Compliance Review" },
              { id: 556661, title: "[Else] Compliance Review" },
            ],
          },
          { id: "8975653", title: "Downstream Integration" },
          { id: "322", title: "Complete Journey" },
        ],
      },
    ],
  },
];

export const initialStages_HasProcessLevelDecision = [
  {
    id: "stage1",
    title: "Stage one",
    processes: [
      {
        id: "proc1",
        title: "First Process",
        tasks: [
          { id: 123, title: "Capture KYC Data" },
          { id: 123444, title: "Risk Assessment" },
        ],
      },
      {
        id: "proc2",
        title: "Decision",
        tasks: [],
        type: "decision",
        outcomes: [
          {
            id: "Proc outcome 1",
            title: "Proc outcome 1",
            tasks: [
              { id: 123, title: "Capture KYC Data" },
              { id: 123444, title: "Risk Assessment" },
            ],
          },
          {
            id: "Proc outcome 2",
            title: "Proc outcome2",
            tasks: [
              { id: 12434, title: "Capture KYC Data" },
              { id: 12344444, title: "Risk Assessment" },
              { id: 123333444, title: "End Journey" },
            ],
          },
        ],
      },
      {
        id: "Last Processdas",
        title: "Last Process",
        tasks: [
          { id: 188723, title: "Capture KYC Data" },
          { id: 12377444, title: "Risk Assessment" },
        ],
      },
    ],
  },
];
