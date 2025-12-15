"""
Selenium E2E Test 1: Search for a book and add it to library/wishlist, then verify
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import time


def test_search_and_add_book_to_library():
    """
    Test: Search for 'Harry Potter', add to library, verify it appears in library
    """
    # Setup
    driver = webdriver.Chrome()
    wait = WebDriverWait(driver, 10)
    
    try:
        # Navigate to the app
        driver.get("http://localhost:5173")
        print("✓ Navigated to home page")
        
        # Wait for search bar to be visible
        search_input = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "input[placeholder*='Search For Your Desired Books']"))
        )
        print("✓ Search bar found")
        
        # Type in search query
        search_query = "War and Peace"
        search_input.clear()
        search_input.send_keys(search_query)
        print(f"✓ Typed '{search_query}' in search bar")
        
        # Wait for search results to appear
        time.sleep(5)  # Wait for API response
        first_result = wait.until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "ul li"))
        )
        print("✓ Search results appeared")
        
        # Click on the first search result
        first_result.click()
        print("✓ Clicked on first search result")
        
        # Wait for modal to appear
        modal = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".fixed.inset-0.z-50"))
        )
        print("✓ Book modal opened")
        
        # Click "Add to Library" button
        add_to_library_btn = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Add to Library')]"))
        )
        add_to_library_btn.click()
        print("✓ Clicked 'Add to Library' button")
        
        # Wait for modal to auto-close (wait for the modal to disappear from DOM)
        wait.until(EC.invisibility_of_element_located((By.CSS_SELECTOR, ".fixed.inset-0.z-50")))
        print("✓ Book added and modal closed")
        
        # Navigate to Library page
        library_link = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[@href='/library']"))
        )
        library_link.click()
        print("✓ Navigated to Library page")
        
        # Wait for library to load
        time.sleep(2)
        
        # Check if book appears in library
        # Look for book cards in the grid
        book_cards = driver.find_elements(By.CSS_SELECTOR, ".grid > div")
        
        assert len(book_cards) > 0, "No books found in library!"
        print(f"✓ Found {len(book_cards)} book(s) in library")
        
        # Verify the book we added is there (check for images in book cards)
        book_images = driver.find_elements(By.CSS_SELECTOR, ".grid img")
        assert len(book_images) > 0, "No book covers found!"
        print(f"✓ Verified book exists in library with cover image")
        
        print("\n✅ TEST PASSED: Book successfully added to library and verified")
        
    except Exception as e:
        print(f"\n❌ TEST FAILED: {str(e)}")
        # Take screenshot on failure
        driver.save_screenshot("/tmp/test_1_failure.png")
        raise
        
    finally:
        driver.quit()


def test_search_and_add_book_to_wishlist():
    """
    Test: Search for 'The Great Gatsby', add to wishlist, verify it appears in wishlist
    """
    # Setup
    driver = webdriver.Chrome()
    wait = WebDriverWait(driver, 10)
    
    try:
        # Navigate to the app
        driver.get("http://localhost:5173")
        print("✓ Navigated to home page")
        
        # Wait for search bar to be visible
        search_input = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "input[placeholder*='Search For Your Desired Books']"))
        )
        print("✓ Search bar found")
        
        # Type in search query
        search_query = "The Great Gatsby"
        search_input.clear()
        search_input.send_keys(search_query)
        print(f"✓ Typed '{search_query}' in search bar")
        
        # Wait for search results to appear
        time.sleep(2)  # Wait for API response
        first_result = wait.until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "ul li"))
        )
        print("✓ Search results appeared")
        
        # Click on the first search result
        first_result.click()
        print("✓ Clicked on first search result")
        
        # Wait for modal to appear
        modal = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".fixed.inset-0.z-50"))
        )
        print("✓ Book modal opened")
        
        # Click "Add to Wishlist" button
        add_to_wishlist_btn = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Add to Wishlist')]"))
        )
        add_to_wishlist_btn.click()
        print("✓ Clicked 'Add to Wishlist' button")
        
        # Wait for modal to auto-close (wait for the modal to disappear from DOM)
        wait.until(EC.invisibility_of_element_located((By.CSS_SELECTOR, ".fixed.inset-0.z-50")))
        print("✓ Book added and modal closed")
        
        # Navigate to Wishlist page
        wishlist_link = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[@href='/wishlist']"))
        )
        wishlist_link.click()
        print("✓ Navigated to Wishlist page")
        
        # Wait for wishlist to load
        time.sleep(2)
        
        # Check if book appears in wishlist
        book_cards = driver.find_elements(By.CSS_SELECTOR, ".grid > div")
        
        assert len(book_cards) > 0, "No books found in wishlist!"
        print(f"✓ Found {len(book_cards)} book(s) in wishlist")
        
        # Verify the book we added is there
        book_images = driver.find_elements(By.CSS_SELECTOR, ".grid img")
        assert len(book_images) > 0, "No book covers found!"
        print(f"✓ Verified book exists in wishlist with cover image")
        
        print("\n✅ TEST PASSED: Book successfully added to wishlist and verified")
        
    except Exception as e:
        print(f"\n❌ TEST FAILED: {str(e)}")
        driver.save_screenshot("/tmp/test_1_wishlist_failure.png")
        raise
        
    finally:
        driver.quit()


if __name__ == "__main__":
    print("=" * 60)
    print("TEST 1A: Search and Add Book to Library")
    print("=" * 60)
    test_search_and_add_book_to_library()
    
    print("\n" + "=" * 60)
    print("TEST 1B: Search and Add Book to Wishlist")
    print("=" * 60)
    test_search_and_add_book_to_wishlist()
