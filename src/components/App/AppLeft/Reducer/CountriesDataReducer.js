export const countries__data__initial__state = {
    data: {}
};


const countries__data__reducer = (countries__data__state, countries__data__action) => {
    switch(countries__data__action.type){

        case 'CHANGE_OPTION':
            return countries__data__action.add;

        default:
            return countries__data__action;
    }
};

export default countries__data__reducer;



