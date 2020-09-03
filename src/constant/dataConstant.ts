export const dataConstant = {
  MessageType: {
    danger: 'danger',
    warning: 'warning',
    success: 'success-msg',
    failure: 'failure',
    error: 'Error-msg',
  },
  APIStatus: {
    Success: "Success",
    Failure: "Failure",
    Warning: "Warning",
    RecordNotFound: "Record Detail Not Exist",
    Exists: "Exists",
    NotFound: "NotFound",
    DuplicateRecord: "DuplicateRecord",
    ChildRecordExist: "ChildRecordExist"
  },
  StatusCode: {
    //Success
    200: '200',//OK
    201: '201',//Created
    204: '204',//No Content
    //Redirection
    304: '304',//Not Modified
    //Client Error
    400: '400',//Bad Request
    401: '401',//Unauthorized
    402: '402',//Created
    403: '403',//Forbidden
    404: '404',//Not Found
    409: '409',//Conflict
  },
  DateFilter: {
    OldesttoNewest: "Oldest to Newest",
    NewesttoOldest: "Newest to Oldest"
  },
  datePattern: /^\d{2}-\d{2}-\d{4}$/,
  NumberWithDecimal: /^[0-9]+(\.[0-9]{1,2})?$/,
  // DecimalWithTwoPointPattern: /^[1-9][0-9]{0,2}(?:,?[0-9]{2}){0,1}(?:\.[0-9]{0,2})?$/,
  DecimalWithSevenPointPattern: /^[1-9][0-9]{0,4}(?:,?[0-9]{3}){0,2}(?:\.[0-9]{0,7})?$/,
  //NumberWithtentwoDecimal: /^[1-9][0-9]{0,3}(?:,?[0-9]{2}){0,2}(?:\.[0-9]{0,2})?$/,
  Numberony: /^[0-9]*$/,
  PasswordPattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?!.*\s).{6,}$/,
  PhoneNoPattern: /^(?:\+?\d{1,3}\s*-?)?\(?(?:\d{3})?\)?[- ]?\d{3}[- ]?\d{4}$/,
  EmailPattren: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  WeekDay: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  Months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  DateFormatArray:
    ['dd/MM/yyyy'                       //00. 13-12-2018
      , 'dd-MMMM-yyyy'                //01. 13-12-2018
      , 'yyyy/MM/dd'                  //02. 2018/12/13
      , 'dd.MM.yyyy'                  //03. 13.12.2016
      , 'shortDate'                   //04. 
      , 'MM/dd/yyyy'                  //05. 12/13/2018
      , 'MM/dd/yyyy HH:mm'            //06. 12/13/2018 15:12
      , 'yyyy-MM-dd hh:mm a'          //07. 2018-12-13 03:12 PM
      , 'yyyy/MM/dd hh:mm a'          //08. 2018/12/13 03:12 PM
      , 'yyyy-MM-dd'                  //09. 2018-12-13
      , 'hh:mm a'                     //10. 03:12 PM
      , 'MMM dd,yyyy hh:mm a'         //11. DEC 13,2018 03:12 PM
      , 'dd MMMM, yyyy'               //12. 13 DECEMBER, 2018
      , 'dd MMM yyyy'                 //13. 13 DEC, 2018
      , 'MM/DD/YYYY  HH:mm:ss'        //14. 12/13/2018 15:12:20
    ],

  Pagination: {
    IsCSVExport: 'false',
    ItemsPerPage: 10,
    Page: 1,
    SearchColumns: [],
    SortColumns: []
  },
  ModuleNames: {
    User: {
      Name: 'User'
    }
  },
  PageSize: [10, 25, 50, 75, 100],
  SearchDataType:
  {
    StringContains: 'StringContains',
    StringEquals: 'StringEquals',
    DateTime: 'DateTime',
    Date: 'Date',
    Number: 'Number',
    Decimal: 'Decimal',
    LongNumber: 'LongNumber',
    Boolean: 'Boolean',
  },
  Status: [
    { name: "Active", value: "Active" },
    { name: "InActive", value: "InActive" },
  ],
  EnableColumnFiltering: false,
  IsPinOption: false,
  IsShowHideColumn: false,
  IsShowClearFilter: true,
  ApplicationName: 'Pencil',
  SwalConfirmButtonColor: '#3085d6',
  SwalCancelButtonColor: '#d33',
  StatusActive: 'Active',
  StatusDeleted: 'Deleted',
  KeyArea: [
    { name: "Line 1", value: "Line 1" },
    { name: "Line 2", value: "Line 2" },
    { name: "Line 1 | Line 2", value: "Line 1 | Line 2" },
  ],
  StaticDropdown: [
    { name: "0", value: "Value 1" },
    { name: "1", value: "Value 2" },
    { name: "2", value: "Value 3" },
  ],
  HERCARequired: [
    { name: true, value: "Yes" },
    { name: false, value: "No" },
  ],
  ClaimStatus: [
    { name: 1, value: "Started" },
    { name: 2, value: "Initial review" },
    { name: 3, value: "Investigating the claim" },
    { name: 4, value: "Final review" },
    { name: 5, value: "Complete" },
  ],
  ClaimStatusForActionCenter: [
    { name: 1, value: "Assigned" },
    { name: 2, value: "Complete" },
    { name: 3, value: "Overdue" },
  ],
  StartYear: 2015,
  EndYear: 2025,
  ClaimPhotoCategories: [
    { name: 0, value: "Initial Defect Photos from Salesman" },
    { name: 1, value: "Site Visit" },
    { name: 2, value: "QK - How Made Photos" },
    { name: 3, value: "QK - Why Shipped Photos" },
  ],
  BoolVaue: [
    { name: true, value: "Yes" },
    { name: false, value: "No" },
  ],
  SafetyStatus: [
    { name: 1, value: "Submitted" },
    { name: 2, value: "Initial review" },
    { name: 3, value: "Reduction Plan" },
    { name: 4, value: "Final review" },
    { name: 5, value: "Complete" },
  ],
  ChangeManagementStatus: [
    { name: 1, value: "Initiated" },
    { name: 2, value: "Test Imp." },
    { name: 3, value: "Final Imp." },
    { name: 5, value: "Completed" },
  ],
  DecimalWithTwoPointPattern: /^[1-9][0-9]{0,4}(?:,?[0-9]{3}){0,2}(?:\.[0-9]{0,7})?$/,
  ConcernedStandardAssociated: [
    { value: "STD1 - HS Management" },
    { value: "STD2 - The Workplace" },
    { value: "STD3 - Visitors" },
    { value: "STD4 - Contractors" },
    { value: "STD5 - Fork Lift Trucks" },
    { value: "STD6 - Fatal Incident" },
    { value: "STD7 - Accident Reporting" },
    { value: "STD8 - Machinery Safety" },
    { value: "STD9 - Warehousing and Loading" },
    { value: "STD10 - Vehicles and Pedestrians" },
    { value: "STD11 - Working at Height" },
    { value: "STD13 - Electrical Safety" },
    { value: "STD14 - SMAT" },
    { value: "STD15 - Noise at Work" },
    { value: "STD16 - Confined Spaces" },
    { value: "STD17 - Risk Assessments" },
    { value: "STD18 - Lifting Equipment" },
    { value: "STD19 - Raw Materials, Chemicals & Additives" },
    { value: "STD20 - Permits to Work" },
    { value: "STD21 - Personal Protective Equipment" },
    { value: "STD23 - Combustion Systems" },
    { value: "STD24 - Management of Asbestos" },
    { value: "STD25 - Management of Fibrous Materials" },
    { value: "STD26 - Lock Out / Tag Out" },
    { value: "STD27 - Emergency Response Plans" },
    { value: "STD28 - Mobile Phones Leaflet" },
    { value: "SDT29 - Road Risk" }
  ],
  RiskProbability: [
    { value: 1 },
    { value: 4 },
    { value: 6 },
    { value: 8 },
    { value: 10 },
  ],
  RiskSeverity: [
    { value: 2 },
    { value: 8 },
    { value: 21 },
    { value: 40 },
    { value: 100 },
  ],
  SafetyFormType: [
    { value: "CR" },
    { value: "SHEARO" },
    { value: "SMAT" }
  ],
  ChangeManagementFormLevels: [
    { value: "A" },
    { value: "B" },
    { value: "C" },
    { value: "CORP" }
  ],
  ClaimFormName: "Claim",
  SmatFormName: "SMAT",
  CrFormName: "CR",
  ShearoName: "SHEARO",
  ChangeManagementFormName: "ChangeManagement",
  PillarBoardName: "PillarProject",
  PillarBoardActionName: "PillarRoadMapAction",
  SafetyPhotoCategories: [
    { name: 0, value: "Submission" },
    { name: 1, value: "InitialReview" },
    { name: 2, value: "Investigation" },
    { name: 3, value: "Risk Reduction" },
  ],
  SIPCategories: [
    { value: "C1 - Entry to machine area wihout personal LOTO" },
    { value: "C2 - Entry to confined space without permit to work" },
    { value: "C3 - Any unsecured confined space" },
    { value: "C4 - Any unguarded access to the dangerous parts of equipment" },
    { value: "C5 - Any collision of vehicle or it's load with a building, another vehicle or person" },
    { value: "C6 - Any roll over or tip-over of a vehicle" },
    { value: "C7 - Any loss of load or part load from a vehicle" },
    { value: "C8 - Any collapse of a stack" },
    { value: "C9 - Any object falling or likely to fall from height" },
    { value: "C10 - Any failure of lifting equipment or falling load" },
    { value: "C11 - Open access point to Permit Required roof" },
    { value: "C12 - Person working unsafely at height" },
    { value: "C13 - Use of electric extension cable without earth leakage protection" },
    { value: "C14 - Any fire or exlposion" },
    { value: "C15 - Any other incident that could cause a serious injury" }
  ],
  GenericHazards: [
    { value: "G1 - Manual Handling < 50 lbs" },
    { value: "G2 - Manual Handling > 50 lbs" },
    { value: "G3 - Awkward Position / Poor Ergonomics" },
    { value: "G4 - Repetitive Work" },
    { value: "G5 - Fatigue" },
    { value: "G6 - Isolated Work / Lone Worker" },
    { value: "G7 - Chemical Exposure" },
    { value: "G8 - Biological and Bacteriological Exposure" },
    { value: "G9 - Vibrations" },
    { value: "G10 - Noise" },
    { value: "G11 - Extreme Heat" },
    { value: "G12 - Extreme Cold" },
    { value: "G13 - Lack of Light" },
    { value: "G14 - Radiation" },
    { value: "G15 - Working Atmosphere" },
    { value: "G16 - Falls on Same Level" },
    { value: "G17 - Falls from Elevation" },
    { value: "G18 - Object Falls" },
    { value: "G19 - Electricity" },
    { value: "G20 - Fire, Explosion (Materials or substances which can lead to an explosion)" },
    { value: "G21 - Fluids Under Pressure (Air, Water, Oil, Material)" },
    { value: "G22 - Shearing, Cutting, Punch Press" },
    { value: "G23 - Crushed, Nip, Pinch, Entaglement" },
    { value: "G24 - Lifting Objects with Equipment, Rolling, Moving" },
    { value: "G25 - Struck / Line of Fire" },
    { value: "G26 - Rubbing or Abrasion" },
    { value: "G27 - Ejection, Objects Shatter" },
    { value: "G28 - Internal Transporation / On SG Site" },
    { value: "G29 - External Transportation / Off SG Site" },
    { value: "G30 - Physical Attack" },
    { value: "G31 - Natural Risks, Lighting, Flood, Earthquake" },
    { value: "G32 - Snakes, Insects" },
    { value: "G33 - Other Hazards" }
  ],
  EventCategories: [
    { value: "TF" },
    { value: "SRE" }
  ],
  TFLevels: [
    { value: "TF-1", actualText: "TF1" },
    { value: "TF-2", actualText: "TF2" },
    { value: "TF-3", actualText: "TF3" },
    { value: "TF-4", actualText: "TF4" },
    { value: "TF-5", actualText: "TF5" }
  ],
  SRELevels: [
    { value: "SRE-1" },
    { value: "SRE-2" },
    { value: "SRE-3" },
    { value: "SRE-4" },
    { value: "SRE-5" }
  ],
  SafetyModuleName: "SAFETY",
  PillarModuelName: "SAFETY1",
  ClaimModuleName: "QUALITY CLAIMS",
  ChangeManagementModuleName: "CHANGE",
  MMSName: "GYPSUM",
  Management: "MANAGEMENT",
  SafetyPillarBoardName: "PILLARBOARD",
  IncidentShifts: [
    { value: "Start of Shift" },
    { value: "Middle of Shift" },
    { value: "End of Shift" }
  ],
  IncidentTimeOfDay: [
    { value: "Morning" },
    { value: "Afternoon" },
    { value: "Night" }
  ],
  IncidentDay: [
    { value: "Week Day" },
    { value: "Week End" }
  ],
  IncidentTypeOfWork: [
    { value: "Routine Tasks" },
    { value: "Non-Routine Tasks" }
  ],
  IncidentRisks: [
    { value: "Building" },
    { value: "Business Interruption" },
    { value: "Explosion" },
    { value: "Fire" },
    { value: "No Risk" },
    { value: "Other" },
  ],
  EnvironmentImpacts: [
    { value: "Air" },
    { value: "Energy" },
    { value: "Noise" },
    { value: "Odors" },
    { value: "Soil" },
    { value: "Regulatory Concerns" },
    { value: "Waste" },
    { value: "Water" },
    { value: "Other" }
  ],
  IncidentInjuries: [
    { value: "No injury" },
    { value: "Amputation" },
    { value: "Asphyxiation" },
    { value: "Bruise" },
    { value: "Burn" },
    { value: "Concucssion" },
    { value: "Crush" },
    { value: "Cut" },
    { value: "Dislocation" },
    { value: "Electric Shock" },
    { value: "Exhaustion" },
    { value: "Eye Trouble" },
    { value: "Fracture" },
    { value: "Frostbite" },
    { value: "Hernia/Rupture" },
    { value: "Irritation" },
    { value: "Loss of Consciousness" },
    { value: "Muscular/Ligament Tear" },
    { value: "Pain" },
    { value: "Illness" },
    { value: "Sprain" },
    { value: "Sting" },
    { value: "Wound" },
    { value: "Other" }
  ],
  BodyParts: [
    { value: "Ankle" },
    { value: "Arm" },
    { value: "Back" },
    { value: "Eyes" },
    { value: "Feet" },
    { value: "Hand" },
    { value: "Heag" },
    { value: "Leg" },
    { value: "Neck" },
    { value: "Shoulder" },
    { value: "Torso" },
    { value: "Wrist" },
    { value: 'Other Wound' }
  ],
  IncidentHappened: [
    { value: "Yes" },
    { value: "No" },
    { value: "Unknown" }
  ],
  IncidentActions: [
    { value: 1, actualText: "Yes" },
    { value: 0, actualText: "No" }
  ],
  IncidentJobFunctions: [
    { value: "Office Staff" },
    { value: "Electrician" },
    { value: "Engineer" },
    { value: "Lab Tech" },
    { value: "Laborer" },
    { value: "Mechanic" },
    { value: "Manager" },
    { value: "Operator - Dunnage" },
    { value: "Operator - Inspector" },
    { value: "Operator - Knife" },
    { value: "Operator - Mixer" },
    { value: "Operator - Paper" },
    { value: "Operator - SPA" },
    { value: "Operator - TakeOff" },
    { value: "Warehouseman" }
  ],
  ReportingMonths: [
    { value: "January" },
    { value: "February" },
    { value: "March" },
    { value: "April" },
    { value: "May" },
    { value: "June" },
    { value: "July" },
    { value: "August" },
    { value: "September" },
    { value: "October" },
    { value: "November" },
    { value: "December" }
  ],
  SGEventTypes: [
    { value: "TF-1" }
  ],
  TeamRoles: [
    { value: "Chairman" },
    { value: "Facilitator" },
    { value: "Scribe" },
    { value: "Timekeeper" },
    { value: "Participant" },
  ],
  WorkShops: [
    { ColumnName: 'Type' },
    { ColumnName: 'Production' },
    { ColumnName: 'Mill' },
    { ColumnName: 'Laboratory' },
    { ColumnName: 'Warehouse' },
    { ColumnName: 'Maintenance' },
    { ColumnName: 'Office' },
    { ColumnName: 'Security' },
    { ColumnName: 'Grand Totals' }
  ],
  ReportingMonthNumbers: [
    { ColumnName: 1 },
    { ColumnName: 2 },
    { ColumnName: 3 },
    { ColumnName: 4 },
    { ColumnName: 5 },
    { ColumnName: 6 },
    { ColumnName: 7 },
    { ColumnName: 8 },
    { ColumnName: 9 },
    { ColumnName: 10 },
    { ColumnName: 11 },
    { ColumnName: 12 }
  ],
  FormTypes: [
    { value: "Concerned Report" },
    { value: "SMAT" },
    { value: "SHEARO" },
    { value: "Risk Assessment" },
  ],
  EmptySignature: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAroAAACWCAYAAAAxDCt9AAAIaUlEQVR4Xu3WQREAAAgCQelf2h43awMWH+wcAQIECBAgQIAAgaDAgplEIkCAAAECBAgQIHCGricgQIAAAQIECBBIChi6yVqFIkCAAAECBAgQMHT9AAECBAgQIECAQFLA0E3WKhQBAgQIECBAgICh6wcIECBAgAABAgSSAoZuslahCBAgQIAAAQIEDF0/QIAAAQIECBAgkBQwdJO1CkWAAAECBAgQIGDo+gECBAgQIECAAIGkgKGbrFUoAgQIECBAgAABQ9cPECBAgAABAgQIJAUM3WStQhEgQIAAAQIECBi6foAAAQIECBAgQCApYOgmaxWKAAECBAgQIEDA0PUDBAgQIECAAAECSQFDN1mrUAQIECBAgAABAoauHyBAgAABAgQIEEgKGLrJWoUiQIAAAQIECBAwdP0AAQIECBAgQIBAUsDQTdYqFAECBAgQIECAgKHrBwgQIECAAAECBJIChm6yVqEIECBAgAABAgQMXT9AgAABAgQIECCQFDB0k7UKRYAAAQIECBAgYOj6AQIECBAgQIAAgaSAoZusVSgCBAgQIECAAAFD1w8QIECAAAECBAgkBQzdZK1CESBAgAABAgQIGLp+gAABAgQIECBAIClg6CZrFYoAAQIECBAgQMDQ9QMECBAgQIAAAQJJAUM3WatQBAgQIECAAAEChq4fIECAAAECBAgQSAoYuslahSJAgAABAgQIEDB0/QABAgQIECBAgEBSwNBN1ioUAQIECBAgQICAoesHCBAgQIAAAQIEkgKGbrJWoQgQIECAAAECBAxdP0CAAAECBAgQIJAUMHSTtQpFgAABAgQIECBg6PoBAgQIECBAgACBpIChm6xVKAIECBAgQIAAAUPXDxAgQIAAAQIECCQFDN1krUIRIECAAAECBAgYun6AAAECBAgQIEAgKWDoJmsVigABAgQIECBAwND1AwQIECBAgAABAkkBQzdZq1AECBAgQIAAAQKGrh8gQIAAAQIECBBIChi6yVqFIkCAAAECBAgQMHT9AAECBAgQIECAQFLA0E3WKhQBAgQIECBAgICh6wcIECBAgAABAgSSAoZuslahCBAgQIAAAQIEDF0/QIAAAQIECBAgkBQwdJO1CkWAAAECBAgQIGDo+gECBAgQIECAAIGkgKGbrFUoAgQIECBAgAABQ9cPECBAgAABAgQIJAUM3WStQhEgQIAAAQIECBi6foAAAQIECBAgQCApYOgmaxWKAAECBAgQIEDA0PUDBAgQIECAAAECSQFDN1mrUAQIECBAgAABAoauHyBAgAABAgQIEEgKGLrJWoUiQIAAAQIECBAwdP0AAQIECBAgQIBAUsDQTdYqFAECBAgQIECAgKHrBwgQIECAAAECBJIChm6yVqEIECBAgAABAgQMXT9AgAABAgQIECCQFDB0k7UKRYAAAQIECBAgYOj6AQIECBAgQIAAgaSAoZusVSgCBAgQIECAAAFD1w8QIECAAAECBAgkBQzdZK1CESBAgAABAgQIGLp+gAABAgQIECBAIClg6CZrFYoAAQIECBAgQMDQ9QMECBAgQIAAAQJJAUM3WatQBAgQIECAAAEChq4fIECAAAECBAgQSAoYuslahSJAgAABAgQIEDB0/QABAgQIECBAgEBSwNBN1ioUAQIECBAgQICAoesHCBAgQIAAAQIEkgKGbrJWoQgQIECAAAECBAxdP0CAAAECBAgQIJAUMHSTtQpFgAABAgQIECBg6PoBAgQIECBAgACBpIChm6xVKAIECBAgQIAAAUPXDxAgQIAAAQIECCQFDN1krUIRIECAAAECBAgYun6AAAECBAgQIEAgKWDoJmsVigABAgQIECBAwND1AwQIECBAgAABAkkBQzdZq1AECBAgQIAAAQKGrh8gQIAAAQIECBBIChi6yVqFIkCAAAECBAgQMHT9AAECBAgQIECAQFLA0E3WKhQBAgQIECBAgICh6wcIECBAgAABAgSSAoZuslahCBAgQIAAAQIEDF0/QIAAAQIECBAgkBQwdJO1CkWAAAECBAgQIGDo+gECBAgQIECAAIGkgKGbrFUoAgQIECBAgAABQ9cPECBAgAABAgQIJAUM3WStQhEgQIAAAQIECBi6foAAAQIECBAgQCApYOgmaxWKAAECBAgQIEDA0PUDBAgQIECAAAECSQFDN1mrUAQIECBAgAABAoauHyBAgAABAgQIEEgKGLrJWoUiQIAAAQIECBAwdP0AAQIECBAgQIBAUsDQTdYqFAECBAgQIECAgKHrBwgQIECAAAECBJIChm6yVqEIECBAgAABAgQMXT9AgAABAgQIECCQFDB0k7UKRYAAAQIECBAgYOj6AQIECBAgQIAAgaSAoZusVSgCBAgQIECAAAFD1w8QIECAAAECBAgkBQzdZK1CESBAgAABAgQIGLp+gAABAgQIECBAIClg6CZrFYoAAQIECBAgQMDQ9QMECBAgQIAAAQJJAUM3WatQBAgQIECAAAEChq4fIECAAAECBAgQSAoYuslahSJAgAABAgQIEDB0/QABAgQIECBAgEBSwNBN1ioUAQIECBAgQICAoesHCBAgQIAAAQIEkgKGbrJWoQgQIECAAAECBAxdP0CAAAECBAgQIJAUMHSTtQpFgAABAgQIECBg6PoBAgQIECBAgACBpIChm6xVKAIECBAgQIAAAUPXDxAgQIAAAQIECCQFDN1krUIRIECAAAECBAgYun6AAAECBAgQIEAgKWDoJmsVigABAgQIECBAwND1AwQIECBAgAABAkkBQzdZq1AECBAgQIAAAQKGrh8gQIAAAQIECBBIChi6yVqFIkCAAAECBAgQMHT9AAECBAgQIECAQFLA0E3WKhQBAgQIECBAgMADJrIAl9rfOr4AAAAASUVORK5CYII=",
  EmptySignatureIE: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAroAAACuCAYAAADZJa69AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHuSURBVHhe7cEBDQAAAMKg909tDjcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgQg1qxwAB5ur90AAAAABJRU5ErkJggg==",
  IntervalTime: 180000,
  ProjectStatus: [
    { PendingForApprove: 1 },
    { Denied: 2 },
    { Approved: 3 },
    { PendingForComplate: 4 },
    { Complate: 5 }
  ],
  ObjectiveTypes: [
    { value: "Long Range" },
    { value: "Annual" }
  ],
  SMATCategories: [
    { value: "A - Positions of People" },
    { value: "B - PPE" },
    { value: "C - Procedures & Housekeeping" },
    { value: "D - Tools & Equipment" },
    { value: "E - Reactions of People" },
  ],
  FilterMonths: [
    { id: 1, value: "January" },
    { id: 2, value: "February" },
    { id: 3, value: "March" },
    { id: 4, value: "April" },
    { id: 5, value: "May" },
    { id: 6, value: "June" },
    { id: 7, value: "July" },
    { id: 8, value: "August" },
    { id: 9, value: "September" },
    { id: 10, value: "October" },
    { id: 11, value: "November" },
    { id: 12, value: "December" }
  ],
  TrainingStatus: [
    { text: "Completed", value: true },
    { text: "Pending", value: false }
  ],
  ProjectCosts: [
    { key: 5, value: "< $1k" },
    { key: 4, value: "< $5k" },
    { key: 3, value: "< $20k" },
    { key: 2, value: "< $50k" },
    { key: 1, value: "> $50k" }
  ],
  ProjectEases: [
    { key: 5, value: "< 1 day" },
    { key: 4, value: "< 7 days" },
    { key: 3, value: "< 1 Month" },
    { key: 2, value: "< 100 Days" },
    { key: 1, value: "> 100 Days" }
  ],
  Identifiers: [
    { value: "CR" },
    { value: "SMAT" },
    { value: "SHEARO" }
  ],

  StatusList: [
    { value: false, text: "Pending" },
    { value: true, text: "Completed" }
  ],
  CurriculumType: [
    { value: "DVD" },
    { value: "Hired Speaker" },
    { value: "Power Point" },
    { value: "Text/SOP" },
    { value: "Hands-On" },
    { value: "Crew Meeting" },
    { value: "Demonstration" },
    { value: "Computer/On-Line" },
    { value: "Other" }
  ],
  ActionUrgencyList: [
    { value: "Immediate" },
    { value: "3-6 Months" },
    { value: "7-12 months" }
  ],
  WarningCommendationStatus: [
    { text: "Adopted", value: true },
    { text: "Reviewed", value: false }
  ],

}

export enum ModuleName {
  AllModule = 1,
  ClaimsManagement = 2,
  SafetyManagement = 3
}

export enum CMActionType {
  TestTrail = 1,
  FinalImplementation = 2
}

export enum ProjectStatus {
  PendingForApprove = 1,
  Denied = 2,
  Approved = 3,
  PendingForComplate = 4,
  Completed = 5
}

