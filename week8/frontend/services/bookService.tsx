import axios from 'axios';

const API_URL = 'http://10.0.2.2:8080/api/books'

export type Book = {
    bookId: string;
    title: string;
    author: string;
    description: string;
    price: number;
}

export type BookInput = {
    title: string;
    author: string;
    description: string;
    price: number;
} 

// GET ALL
export const getBook = async (): Promise<Book[]> => {
    const res = await axios.get(API_URL);
    return res.data;
}

// GET BY ID
export const getBookByID = async (id: string): Promise<Book> => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
}

// CREATE
export const creaBook = async (data: BookInput): Promise<Book> => {
    const res = await axios.post(API_URL, data);
    return res.data;
}

// UPDATE
export const updateBook = async (id: string, data: BookInput): Promise<Book> => {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data;
}

// DELETE
export const deleteBook = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
}