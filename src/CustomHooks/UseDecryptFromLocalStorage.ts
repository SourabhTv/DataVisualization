import CryptoJS from 'crypto-js';

const UseDecryptFromLocalStorage = (): ((key: string, secretKey: string) => unknown | null) => {
    const decryptData = (key: string, secretKey: string): unknown | null => {
        try {
            const encryptedData = localStorage.getItem(key);
            if (encryptedData) {
                const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
                if (decryptedBytes) {
                    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
                    return decryptedData;
                }
            }
        } catch (error) {
            console.error('Error decrypting data from local storage:', error);
        }
        return null; // Return null if decryption fails or data doesn't exist
    };

    return decryptData;
};

export default UseDecryptFromLocalStorage;
