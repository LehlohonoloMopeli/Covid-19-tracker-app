import { useMap } from 'react-leaflet';

 export const sortData = (data) => {
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

export const ChangeView = ( {center, zoom } ) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

// function ChangeView({ center, zoom }) {
//     const map = useMap();
//     map.setView(center, zoom);
//     return null;
//   };

