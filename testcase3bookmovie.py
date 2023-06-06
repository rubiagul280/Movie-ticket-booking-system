from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.select import Select
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

bookform = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/div[2]/div[1]/div[2]/div/div[3]/button[1]')
bookform.click()
time.sleep(3)

auditorium = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/div/div/div/table/tbody/tr[1]/td/div/div')
auditorium.click()
time.sleep(3)

auditoriumdrop = driver.find_element("xpath" ,'//*[@id="menu-"]/div[3]/ul/li[1]')
auditoriumdrop.click()
time.sleep(3)

timed = driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/div/div/div/table/tbody/tr[2]/td/div/div')
timed.click()
time.sleep(3)

timedrop = driver.find_element("xpath" ,'//*[@id="menu-"]/div[3]/ul/li')
timedrop.click()
time.sleep(3)

book= driver.find_element("xpath" ,'//*[@id="root"]/div/div/div/div/div/div/button')
book.click()
time.sleep(3)

time.sleep(10)

print("pass")
