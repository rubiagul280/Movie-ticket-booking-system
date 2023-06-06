from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time 

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("http://localhost:3000/login")

email = driver.find_element("xpath" ,'//*[@id="email"]')
email.send_keys("Saima@gmail.com")

time.sleep(1)

password = driver.find_element("xpath" ,'//*[@id="password"]')
password.send_keys("12345678")

time.sleep(1)

login = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/form/button')
login.click()

time.sleep(5)

history = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/header/div/div/div[4]/button[3]')
history.click()
time.sleep(3)

logout = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/header/div/div/button')
logout.click()

time.sleep(3)
time.sleep(10)

print("pass")
