

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_filter_by_category():
    
    driver = webdriver.Chrome()
    wait = WebDriverWait(driver, 10)
    
    try:
        # Navigate to the app
        driver.get("http://localhost:5173")
        print("✓ Navigated to home page")
        
        # Wait for Popular Books section to load
        wait.until(
            EC.presence_of_element_located((By.XPATH, "//h2[contains(text(), 'Popular Books')]"))
        )
        print("✓ Home page content loaded")
        
        # Helper to get visible popular books
        def get_popular_books():
            # Find the Popular Books section, then the grid, then title elements
            # Using specific classes from MainBooks.jsx: "text-xl font-semibold leading-tight line-clamp-2"
            books = driver.find_elements(By.CSS_SELECTOR, "section.mb-10 .grid .text-xl.font-semibold")
            return [book.text for book in books]

        # 1. Get initial list of books (Everything category is default)
        initial_books = get_popular_books()
        print(f"✓ Initial books (Everything): {initial_books}")
        assert len(initial_books) > 0, "No popular books found initially!"

        # 2. Click on "Novels" category
        # Finding the button with text "Novels"
        novels_btn = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Novels')]"))
        )
        novels_btn.click()
        print("✓ Clicked 'Novels' category")
        
        # Wait for potential update (simulating network request or state change)
        time.sleep(2) 
        
        # 3. Get updated list of books
        updated_books = get_popular_books()
        print(f"✓ Updated books (Novels): {updated_books}")
        
        # 4. Verify that the books have changed
        # Since logic isn't implemented, this assertion will fail
        assert initial_books != updated_books, "Books did not change after selecting 'Novels' category! (Feature not implemented)"
        
        print("\n TEST PASSED: Category filter updated the book list")
        
    except Exception as e:
        print(f"\n TEST FAILED: {str(e)}")
        # Take screenshot on failure
        driver.save_screenshot("/tmp/test_4_failure.png")
        raise
        
    finally:
        driver.quit()

if __name__ == "__main__":
    print("=" * 60)
    print("TEST 4: Filter by Category")
    print("=" * 60)
    test_filter_by_category()
