const initialState = [
    {
        id: 0,
        name: "M.Ibrahim Afzal",
        email: "ib@gmail.com",
        number: 123456789,
    },

    {
        id: 1,
        name: "Muhammad Waqas",
        email: "mw@gmail.com",
        number: 12345678,
    },
    {
        id: 2,
        name: "Muhammad Farooq",
        email: "mf@gmail.com",
        number: 54678934,
    },
];
export const contactReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-CONTACT":
            state = [...state, action.payload];

        case "UPDATE-CONTACT":
            const updateState = state.map((contact) =>
                contact.id === action.payload.id ? action.payload : contact
            );
            state = updateState;
            return state;
        case "DELETE-CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;

        default:
            return state;
    }
}