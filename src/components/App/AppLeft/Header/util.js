const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1
        }   
        if(a.cases < b.cases) {
            return 1;
        }
        return 0;
    });
    return sortedData
};

export default sortData