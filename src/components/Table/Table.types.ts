import type { TableState, Column } from 'react-table';

type TTable = {
    columns: readonly Column<object>[];
    data: readonly object[];
    initial_state?: TableState<object>;
};

export default TTable;
