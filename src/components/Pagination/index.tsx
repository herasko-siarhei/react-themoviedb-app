import React, {ChangeEvent, FC} from 'react';
import {Pagination as MUIPagination, Stack} from '@mui/material';

type PaginationProps = {
    page: number;
    total: number;
    onClick: (value: number) => void;
}

const Pagination: FC<PaginationProps> = ({page, total, onClick}) => {
    if (total <= 1) {
        return null;
    } else {
        return (
            <Stack direction="row" justifyContent="center">
                <MUIPagination
                    page={page}
                    count={total}
                    onChange={(event: ChangeEvent<unknown>, newPage: number) => onClick(newPage)}
                    variant="outlined"
                    shape="rounded"
                    hidePrevButton
                    hideNextButton
                />
            </Stack>
        );
    }
};

export default Pagination;