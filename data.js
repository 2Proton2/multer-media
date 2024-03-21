const document_categories = {
    data: [
        {
            id: "1",
            name: "docCat 1",
            storage: "public",
            "prefix": "doc1"
        },
        {
            id: "2",
            name: "docCat 2",
            storage: "private",
            "prefix": "doc2"
        },
        {
            id: "3",
            name: "docCat 3",
            storage: "private",
            "prefix": "doc3"
        },
        {
            id: "4",
            name: "docCat 4",
            storage: "private",
            "prefix": "doc4"
        },
        {
            id: "5",
            name: "docCat 5",
            storage: "private",
            "prefix": "doc5"
        }
    ],

    findOne: (id) => {
        let data = document_categories.data.filter((e) => e.id === id)
        data = (data.length > 0) ? data[0] : null;
        return data;
    }
}

module.exports = {
    document_categories
};