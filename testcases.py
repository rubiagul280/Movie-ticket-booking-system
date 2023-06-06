from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time 

options = Options()
options.add_argument("--window-size=1920,1080")
options.headless = True

# PATH = "C:\Program Files (x86)\chromedriver.exe"
# driver = webdriver.Chrome(PATH)
driver = webdriver.Chrome(options=options)

try:

    driver.get("http://localhost:3000/login")
    try:
        print("Test Case 1 Login")
        email = driver.find_element("xpath" ,'//*[@id="email"]')
        email.send_keys("Saima@gmail.com")

        password = driver.find_element("xpath" ,'//*[@id="password"]')
        password.send_keys("12345678")

        login = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/form/button')
        login.click()

        print("Test Case 1 Login Passed")
    except:
        print("Test Case 1 Login Failed ... Invalid Credientials")
    try:
        print("Test Case 2 Search Movie")

        search = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div/div/header/div/div/div[4]/button[2]')))
        search.click()

        # search = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/header/div/div/div[4]/button[2]')
        # search.click()

        searchinput = driver.find_element("xpath" ,'//*[@id="name"]')
        searchinput.send_keys("Tangled")

        searchbutton = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/button')
        searchbutton.click()

        print("Test Case 2 Search Movie Passed")
    except:
        print("Test Case 2 Search Movie Failed")
    try:
        print("Test Case 3 Book Movie")
        driver.get("http://localhost:3000")
        bookform = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/div[2]/div[1]/div[2]/div/div[3]/button[1]')
        bookform.click()

        auditorium = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/div/div/div/table/tbody/tr[1]/td/div/div')
        auditorium.click()

        auditoriumdrop = driver.find_element("xpath" ,'//*[@id="menu-"]/div[3]/ul/li[1]')
        auditoriumdrop.click()

        timed = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/div/div/div/table/tbody/tr[2]/td/div/div')
        timed.click()

        timedrop = driver.find_element("xpath" ,'//*[@id="menu-"]/div[3]/ul/li')
        timedrop.click()

        book= driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/div/div/button')
        book.click()
        print("Test Case 3 Book Movie Passed")
    except:
        print("Test Case 3 Book Movie Failed.. Record not in database")
    try:
        print("Test Case 4 View History")
        history = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div/div/header/div/div/div[4]/button[3]')))
        driver.implicitly_wait(5)
        history.click()
        print("Test Case 4 View History Passed")
    except:
        print("Test Case 4 View History Failed")
    try:
        print("Test Case 5 Logout") 
        logout = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/header/div/div/button')
        logout.click()
        print("Test Case 5 Logout Passed") 
    except:
        print("Test Case 5 Logout Failed") 

except:
    print("App is not in running state")

