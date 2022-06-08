import {withLabel} from "./WithLabel";

import {Input as InputPure} from "./Input";
import {DatePicker as DataPickerPure} from "./DatePicker";
import {Select as SelectPure} from "./Select";

export const Input = withLabel(InputPure);
export const DatePicker = withLabel(DataPickerPure);
export const Select = withLabel(SelectPure);