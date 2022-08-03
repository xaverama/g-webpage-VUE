

export interface Rectangle {
    height: number,
    width: number,
    color: string,
}

export function dataService() {

    function getAllData() :Promise<Rectangle[]> {
        return fetch("./src/rectangles.json")
            .then((response) => response.json())
            .then((data) => data.data)
    }

    return {
        getAllData
    }
}
