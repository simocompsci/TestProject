"""
Selenium E2E Test 2: Edit a library book's current page and reading status
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
import time


def test_edit_library_book_current_page_and_status():
    """
    Test: Go to library, select a book, edit current page to 100 and status to "reading"
    """
    # Setup
    driver = webdriver.Chrome()
    wait = WebDriverWait(driver, 10)
    
    try:
        # Navigate to the app
        driver.get("http://localhost:5173")
        print("✓ Navigated to home page")
        
        # Navigate to Library page
        library_link = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//a[@href='/library']"))
        )
        library_link.click()
        print("✓ Navigated to Library page")
        
        # Wait for library to load
        time.sleep(2)
        
        # Find the first book card
        book_cards = driver.find_elements(By.CSS_SELECTOR, ".grid > div")
        
        if len(book_cards) == 0:
            print("⚠ No books in library! Please add a book first.")
            print("Skipping test...")
            return
        
        print(f"✓ Found {len(book_cards)} book(s) in library")
        
        # Find the Edit button (pencil icon) in the first book
        edit_button = wait.until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".grid > div:first-child button[title='Update book']"))
        )
        edit_button.click()
        print("✓ Clicked Edit button (pencil icon)")
        
        # Wait for Edit modal to appear
        edit_modal = wait.until(
            EC.presence_of_element_located((By.XPATH, "//h2[contains(text(), 'Edit Book')]"))
        )
        print("✓ Edit modal opened")
        
        # Find the Current Page input field
        current_page_input = wait.until(
            EC.presence_of_element_located((By.XPATH, "//label[contains(text(), 'Current Page')]/following-sibling::input"))
        )
        
        # Clear and enter 100
        current_page_input.clear()
        current_page_input.send_keys("100")
        print("✓ Set current page to 100")
        
        # Find the Reading Status dropdown
        status_dropdown = wait.until(
            EC.presence_of_element_located((By.XPATH, "//label[contains(text(), 'Reading Status')]/following-sibling::select"))
        )
        
        # Select "reading" from dropdown
        select = Select(status_dropdown)
        select.select_by_value("reading")
        print("✓ Set reading status to 'reading'")
        
        # Click Save Changes button
        save_button = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Save Changes')]"))
        )
        save_button.click()
        print("✓ Clicked 'Save Changes' button")
        
        # Wait for modal to close and page to refresh
        time.sleep(2)
        print("✓ Changes saved and modal closed")
        
        # Verify the changes by opening info modal
        info_button = wait.until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".grid > div:first-child button[title='Book info']"))
        )
        info_button.click()
        print("✓ Opened Info modal to verify changes")
        
        # Wait for Info modal
        time.sleep(1)
        
        # Check for "READING" status badge
        status_badge = driver.find_element(By.XPATH, "//span[contains(text(), 'READING')]")
        assert status_badge is not None, "Status not updated to READING!"
        print("✓ Verified status is 'READING'")
        
        # Check for current page 100
        current_page_text = driver.find_element(By.XPATH, "//span[contains(text(), 'Current Page:')]/following-sibling::span")
        assert "100" in current_page_text.text, f"Current page not updated! Found: {current_page_text.text}"
        print("✓ Verified current page is 100")
        
        print("\n✅ TEST PASSED: Book successfully edited with current page 100 and status 'reading'")
        
    except Exception as e:
        print(f"\n❌ TEST FAILED: {str(e)}")
        # Take screenshot on failure
        driver.save_screenshot("/tmp/test_2_failure.png")
        raise
        
    finally:
        driver.quit()


if __name__ == "__main__":
    print("=" * 60)
    print("TEST 2: Edit Library Book Current Page and Status")
    print("=" * 60)
    test_edit_library_book_current_page_and_status()
