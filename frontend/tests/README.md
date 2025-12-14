# Quick Start - Running Selenium Tests

## Prerequisites

Make sure both servers are running:

```bash
# Terminal 1: Backend
cd backend
php artisan serve

# Terminal 2: Frontend  
cd frontend
npm run dev
```

## Install Dependencies

```bash
cd frontend/tests
pip install -r requirements.txt
```

## Run All Tests

```bash
python run_all_tests.py
```

## Run Individual Tests

```bash
# Test 1: Search and add book
python test_1_search_and_add_book.py

# Test 2: Edit library book
python test_2_edit_library_book.py

# Test 3: Move wishlist to library
python test_3_move_wishlist_to_library.py
```

---

## Test Files Created

| File | Description |
|------|-------------|
| `test_1_search_and_add_book.py` | Search for books and add to library/wishlist |
| `test_2_edit_library_book.py` | Edit book's current page and status |
| `test_3_move_wishlist_to_library.py` | Move book from wishlist to library |
| `run_all_tests.py` | Master test runner for all tests |
| `requirements.txt` | Python dependencies |

---

## What Each Test Does

### Test 1A: Add to Library
1. Search "Harry Potter"
2. Add to library
3. Verify it appears in library

### Test 1B: Add to Wishlist
1. Search "The Great Gatsby"  
2. Add to wishlist
3. Verify it appears in wishlist

### Test 2: Edit Book
1. Go to library
2. Edit first book's current page to 100
3. Change status to "reading"
4. Verify changes saved

### Test 3: Move to Library
1. Go to wishlist
2. Click "Add to Library" on first book
3. Verify it appears in library

---

All tests include proper waits, error handling, and verification steps! ✅
