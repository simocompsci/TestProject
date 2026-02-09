const API_BASE_URL = "http://localhost:8000/api";

/**
 * Add a book to the backend
 * @param {Object} bookData - Book data including title, author, pages, cover, etc.
 * @param {string} owningStatus - Either 'own' or 'wishlisted'
 * @returns {Promise<Object>} - Response with success status and book data
 */
export async function addBook(bookData, owningStatus = 'own') {
    try {
        const response = await fetch(`${API_BASE_URL}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                title: bookData.title,
                author_name: bookData.author,
                pages: bookData.pages || 0,
                cover_path: bookData.cover || '',
                review: null,
                status: 'unread',
                started_date: null,
                finished_date: null,
                current_page: 0,
                rating: bookData.rating || null,
                genre: null,
                owning_status: owningStatus,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to add book');
        }

        return data;
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
}

/**
 * Get all owned books (books in library)
 * @returns {Promise<Array>} - Array of owned books
 */
export async function getOwnedBooks() {
    try {
        const response = await fetch(`${API_BASE_URL}/books/owned/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch owned books');
        }

        return data.books || [];
    } catch (error) {
        console.error('Error fetching owned books:', error);
        throw error;
    }
}

/**
 * Get all wishlisted books
 * @returns {Promise<Array>} - Array of wishlisted books
 */
export async function getWishlistedBooks() {
    try {
        const response = await fetch(`${API_BASE_URL}/books/wishlisted/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch wishlisted books');
        }

        return data.books || [];
    } catch (error) {
        console.error('Error fetching wishlisted books:', error);
        throw error;
    }
}

/**
 * Get all books
 * @returns {Promise<Array>} - Array of all books
 */
export async function getAllBooks() {
    try {
        const response = await fetch(`${API_BASE_URL}/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }

        return data;
    } catch (error) {
        console.error('Error fetching all books:', error);
        throw error;
    }
}

/**
 * Get a specific book by ID
 * @param {number} id - Book ID
 * @returns {Promise<Object>} - Book data
 */
export async function getBookById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/books/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch book');
        }

        return data;
    } catch (error) {
        console.error('Error fetching book:', error);
        throw error;
    }
}

/**
 * Update a book
 * @param {number} id - Book ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} - Updated book data
 */
export async function updateBook(id, updates) {
    try {
        const response = await fetch(`${API_BASE_URL}/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(updates),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to update book');
        }

        return data;
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
}

/**
 * Delete a book
 * @param {number} id - Book ID
 * @returns {Promise<Object>} - Success response
 */
export async function deleteBook(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to delete book');
        }

        return data;
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
}
