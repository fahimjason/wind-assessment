const data = {
    employees: [
        {
            first_name: 'John',
            last_name: null,
            email: 'john@example.com',
            designation_id: 1
        },
        {
            first_name: 'Adam',
            last_name: null,
            email: 'adam@example.com',
            designation_id: 2
        },
        {
            first_name: 'Harry',
            last_name: null,
            email: 'harry@example.com',
            designation_id: 3
        }
    ],
    designations: [
        {
            title: 'CTO',
            parent_id: 0,
            description: null
        },
        {
            title: 'Senior software eng',
            parent_id: 1,
            description: null
        },
        {
            title: 'Software eng',
            parent_id: 2,
            description: null
        },
    ],
};

module.exports = data;