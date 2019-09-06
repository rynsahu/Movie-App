export function paginate(allItems, pageNumber, pageSize) {
    let movies = [];

    let startIndex = (pageNumber - 1) * pageSize; 
    let endIndex = pageNumber * pageSize -1;

    for(startIndex; startIndex <= endIndex; startIndex++){
        if(allItems[startIndex] !== undefined)
            movies.push(allItems[startIndex]);
        else break;       
    }

    return movies;
}