import {SvgIconTypeMap} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';

export type Sorting = {
    label: string;
    value: string;
}

export type MyListSorting = {
    label: string;
    value: string;
    icon: OverridableComponent<SvgIconTypeMap>
}