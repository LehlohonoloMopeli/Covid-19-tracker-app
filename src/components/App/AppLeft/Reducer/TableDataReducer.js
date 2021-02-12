export const table__data__initial__state = [];


const table__data__reducer = (table__data__state, table__data__action) => {
    switch(table__data__action.type){

        case 'TABLE_DATA':
            return table__data__action.add;

        default:
            return table__data__action;
    }
};

export default table__data__reducer;
