export interface Cipher {
    encrypt(text: string): string;
}
export interface Decipher {
    decrypt(text: string): string;
}
