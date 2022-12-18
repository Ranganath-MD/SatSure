type Types =
  | "GET_STATE_DATA"
  | "GET_DISTRICT_DATA"
  | "GET_TEHSIL_DATA"
  | "GET_VILLAGE_DATA"
  | "GET_KHEWAT_DATA"
  | "GET_MURABBA_DATA"
  | "GET_KHASRA_DATA"
  | "GET_MANDAL_DATA"
  | "GET_KHATA_DATA"
  | "GET_SURVEY_DATA"
  | "CLEAR_ALL"
  | "REFRESH_STATE"
  | "SET_VALUES";

type Action = {
  type: Types;
  payload: any;
};

type Region = {
  id: string;
  name: string;
};

interface IRegion {
  id: string;
  label: string;
}

interface IStateProps {
  currentLevel: string;
  currentLevelAccess: boolean;
  nextLevelAccess: boolean;
  nextPage: number | null;
  regions: IRegion[];
}


type Option = {
  id: string;
  label: string;
};

interface IAutoCompleteProps {
  value?: any;
  options: Option[];
  placeholder: string;
  getOptionLabel: (option: any) => string;
  onChange: (e: any, newValue: any) => void;
  hidden?: boolean;
}

