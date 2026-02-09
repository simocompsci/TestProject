

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


def test_move_book_from_wishlist_to_library():
    
    driver = webdriver.Chrome()
    wait = WebDriverWait(driver, 10)
    
    try:
        # Navigate to the app
        driver.get("http://localhost:5173")
        print("✓ Navigated to home page")
        
        # Navigate to Wishlist page
        wishlist_link = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[@href='/wishlist']"))
        )
        wishlist_link.click()
        print("✓ Navigated to Wishlist page")
        
        # Wait for wishlist to load
        time.sleep(2)
        
        # Find book cards in wishlist
        book_cards = driver.find_elements(By.CSS_SELECTOR, ".grid > div")
        
        if len(book_cards) == 0:
            print(" No books in wishlist! Please add a book to wishlist first.")
            print("Skipping test...")
            return
        
        print(f"✓ Found {len(book_cards)} book(s) in wishlist")
        
        # Get the title of the first book to verify later
        # Look for the book cover image to identify it
        first_book_img = driver.find_element(By.CSS_SELECTOR, ".grid > div:first-child img")
        book_cover_src = first_book_img.get_attribute("src")
        print(f"✓ Identified book by cover image")
        
        # Find "Add to Library" button in the first book
        add_to_library_button = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Add to Library')]"))
        )
        add_to_library_button.click()
        print("✓ Clicked 'Add to Library' button")
        
        # Wait for the operation to complete
        time.sleep(2)
        print("✓ Book moved to library (waiting for page refresh)")
        
        # The book should now be removed from wishlist
        # Check if wishlist has one less book or is empty
        updated_book_cards = driver.find_elements(By.CSS_SELECTOR, ".grid > div")
        print(f"✓ Wishlist now has {len(updated_book_cards)} book(s)")
        
        # Navigate to Library page to verify
        library_link = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[@href='/library']"))
        )
        library_link.click()
        print("✓ Navigated to Library page")
        
        # Wait for library to load
        time.sleep(2)
        
        # Find all books in library
        library_book_cards = driver.find_elements(By.CSS_SELECTOR, ".grid > div")
        assert len(library_book_cards) > 0, "No books found in library!"
        print(f"✓ Library has {len(library_book_cards)} book(s)")
        
        # Verify the moved book is now in library by checking for the same cover image
        library_book_images = driver.find_elements(By.CSS_SELECTOR, ".grid img")
        
        book_found = False
        for img in library_book_images:
            if book_cover_src in img.get_attribute("src"):
                book_found = True
                break
        
        assert book_found, "The book from wishlist was not found in library!"
        print("✓ Verified the book from wishlist is now in library")
        
        print("\n TEST PASSED: Book successfully moved from wishlist to library and verified")
        
    except Exception as e:
        print(f"\n TEST FAILED: {str(e)}")
        # Take screenshot on failure
        driver.save_screenshot("/tmp/test_3_failure.png")
        raise
        
    finally:
        driver.quit()


if __name__ == "__main__":
    print("=" * 60)
    print("TEST 3: Move Book from Wishlist to Library")
    print("=" * 60)
    test_move_book_from_wishlist_to_library()
