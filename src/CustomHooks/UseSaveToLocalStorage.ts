import CryptoJS from 'crypto-js';

const UseSaveToLocalStorage = (): ((key: string, data: unknown, secretKey: string) => void) => {
    const saveEncryptedData = (key: string, data: unknown, secretKey: string): void => {
        try {
            const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
            localStorage.setItem(key, encryptedData);
        } catch (error) {
            console.error('Error saving data to local storage:', error);
        }
    };

    return saveEncryptedData;
};

export default UseSaveToLocalStorage;

