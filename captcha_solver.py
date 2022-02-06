from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException
from selenium.common import exceptions
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import sys
import requests
from pydub import AudioSegment
import speech_recognition as sr


def find(driver, xpath):
    tries = 0
    while True:
        try:
            element = WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.XPATH, xpath))
            )
            element.location_once_scrolled_into_view
            return element
        except (
            exceptions.StaleElementReferenceException,
            exceptions.ElementClickInterceptedException,
            exceptions.ElementNotInteractableException,
            exceptions.TimeoutException,
            AttributeError,
            UnboundLocalError,
        ):
            tries += 1
            if tries > 3:
                print(tries)
                return None


def solve_captcha(driver):
    driver.switch_to.frame(find("//iframe[@title='reCAPTCHA']"))
    find("//div[@class='recaptcha-checkbox-border']").click()
    driver.switch_to.default_content()
    element = find(driver, "/html/body/div[2]/div[4]/iframe")
    driver.switch_to.frame(element)
    find(driver, "//*[@id='recaptcha-audio-button']").click()

    source = find(driver, "//*[@id='audio-source']").get_attribute("src")
    file = requests.get(source)

    with open("audio.mp3", "wb") as f:
        f.write(file.content)

    sound = AudioSegment.from_mp3("audio.mp3")
    sound.export("audio.wav", format="wav")

    r = sr.Recognizer()
    audioFile = sr.AudioFile("audio.wav")

    with audioFile as source:
        r.adjust_for_ambient_noise(source)
        audio = r.record(source)

    print(r.recognize_google(audio))

    tbox = find(driver, "//*[@id='audio-response']")
    tbox.send_keys(r.recognize_google(audio))

    find(driver, "//*[@id='recaptcha-verify-button']").click()
    return
