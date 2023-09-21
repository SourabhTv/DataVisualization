const UseRemoveFromLocalStorage = () => {
    const removeData = (key: string) => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing data from local storage:', error);
        }
    };

    return removeData;
};

export default UseRemoveFromLocalStorage;
