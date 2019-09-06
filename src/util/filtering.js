export function filtering(allItems, group) {
    const items = allItems.filter(item => item.genre.name === group);
    return items;
}