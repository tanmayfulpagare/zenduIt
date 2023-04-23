export const HEADER_TABS = [
    {
      name:'Forms',imagePath:'assets/form.svg',isTabActive:false
    },
    {
      name:'Customers',imagePath:'assets/cust.svg',isTabActive:false
    },
    {
      name:'Submissions',imagePath:'assets/sub.svg',isTabActive:true
    },
    {
      name:'History',imagePath:'assets/his.svg',isTabActive:false
    },
    {
      name:'Reports',imagePath:'assets/rep.svg',isTabActive:false
    },
    {
      name:'Workflow',imagePath:'assets/workflow.svg',isTabActive:false
    }
  ]

export const LIST_DATA = [
    { id: 1, task: 'Task 14', status: 'Low Risk', from: 'tanmay', to: 'Location 2', customerAddress: 'Address 1', dueDate: '2023-04-30', selected: false },
    { id: 2, task: 'Task 2', status: 'Uncomplete', from: 'amol', to: 'Location 4', customerAddress: 'Address 2', dueDate: '2023-05-15', selected: false },
    { id: 3, task: 'Task 3', status: 'Unassigned', from: 'sagar', to: 'Location 6', customerAddress: 'Address 3', dueDate: '2023-05-30', selected: false },
    { id: 4, task: 'Task 2', status: 'Low Risk', from: 'tanmay', to: 'Location 2', customerAddress: 'Address 1', dueDate: '2023-04-30', selected: false },
    { id: 5, task: 'Task 2', status: 'Uncomplete', from: 'sagar', to: 'Location 4', customerAddress: 'Address 2', dueDate: '2023-05-15', selected: false },
    { id: 6, task: 'Task 1', status: 'Unassigned', from: 'tanmay', to: 'Location 6', customerAddress: 'Address 3', dueDate: '2023-05-30', selected: false },
    { id: 7, task: 'Task 1', status: 'Low Risk', from: 'sagar', to: 'Location 2', customerAddress: 'Address 1', dueDate: '2023-04-30', selected: false },
    { id: 8, task: 'Task 2', status: 'Uncomplete', from: 'amol', to: 'Location 4', customerAddress: 'Address 2', dueDate: '2023-05-15', selected: false },
    { id: 9, task: 'Task 2', status: 'Unassigned', from: 'tanmay', to: 'Location 6', customerAddress: 'Address 3', dueDate: '2023-05-30', selected: false },
    { id: 10, task: 'Task 1', status: 'Low Risk', from: 'sagar', to: 'Location 2', customerAddress: 'Address 1', dueDate: '2023-04-30', selected: false },
    { id: 11, task: 'Task 1', status: 'Uncomplete', from: 'tanmay', to: 'Location 4', customerAddress: 'Address 2', dueDate: '2023-05-15', selected: false },
    { id: 12, task: 'Task 3', status: 'Unassigned', from: 'sagar', to: 'Location 6', customerAddress: 'Address 3', dueDate: '2023-05-30', selected: false },
    { id: 13, task: 'Task 3', status: 'Low Risk', from: 'tanmay', to: 'Location 2', customerAddress: 'Address 1', dueDate: '2023-04-30', selected: false },
    { id: 14, task: 'Task 2', status: 'Uncomplete', from: 'amol', to: 'Location 4', customerAddress: 'Address 2', dueDate: '2023-05-15', selected: false },
  ]  

export const  STATUS_OPTIONS = [
    {value:"Low Risk", label:"Low Risk"},
    {value:"Uncomplete", label:"Uncomplete"},
    {value:"Unassigned", label:"Unassigned"},
]


export const  FROM_OPTIONS = [
  {value:"tanmay", label:"tanmay"},
  {value:"sagar", label:"sagar"},
  {value:"amol", label:"amol"},
]