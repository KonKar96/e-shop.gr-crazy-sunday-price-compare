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
from captcha_solver import *


def sleep(x):
    print(
        "------------------------------------------------------- \n                    sleeping for"
    )
    for i in range(x, 0, -1):
        sys.stdout.write(str(i) + " ")
        sys.stdout.flush()
        time.sleep(1)
    print(
        "\n------------------------------------------------------- \n                    waking up"
    )


def find(xpath):
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


def telegram_bot_sendtext(bot_message):
    bot_token = "871715863:AAGynJz0g8IT3bDKZZBtnXLL35ojVj0z6iA"
    bot_chatID = "787048928"
    send_text = (
        "https://api.telegram.org/bot"
        + bot_token
        + "/sendMessage?chat_id="
        + bot_chatID
        + "&parse_mode=Markdown&text="
        + bot_message
    )
    response = requests.get(send_text)
    return response.json()


def main(driver):
    driver.get("https://www.e-shop.gr/crazysundays")
    eshop_items = driver.find_elements(By.XPATH, "//tr[@class='crazy-row']")
    (
        eshop_items_names,
        eshop_items_prices,
        eshop_items_links,
        skroutz_names,
        skroutz_prices,
        skroutz_links,
    ) = (
        [],
        [],
        [],
        [],
        [],
        [],
    )

    for eshop_item in eshop_items:
        eshop_items_names.append(
            eshop_item.find_element(By.XPATH, ".//a[@class='main']/parent::td")
        )
        eshop_items_prices.append(
            eshop_item.find_element(By.XPATH, ".//p[@class='after-price']")
        )
        eshop_items_links.append(
            eshop_item.find_element(By.XPATH, ".//a[@class='main']")
        )
    if len(eshop_items_names) == len(eshop_items_prices) == len(eshop_items_links):
        for i in range(len(eshop_items_names)):
            if "" in eshop_items_names[i].text:
                eshop_items_names[i] = eshop_items_names[i].text
                eshop_items_prices[i] = eshop_items_prices[i].text.replace("€", "")
                eshop_items_links[i] = eshop_items_links[i].get_attribute("href")
            else:
                eshop_items_names[i] = 0
                eshop_items_prices[i] = 0
                eshop_items_links[i] = 0
        with open("./test/eshop-skroutz.js", "w", encoding="utf8") as f:
            percentage_difference = 0
            f.write("let lines = [\n")
            driver.get("https://www.skroutz.gr/")
            while True:
                if find("//input[@id='search-bar-input']") != None:
                    break
                solve_captcha(driver)
            for i in range(len(eshop_items_names)):
                if eshop_items_names[i] != 0:
                    driver.get("https://www.skroutz.gr/")
                    find("//input[@id='search-bar-input']").send_keys(
                        eshop_items_names[i]
                    )
                    time.sleep(0.5)
                    find("//button[contains(text(),'Αναζήτηση')]").click()

                    skroutz_items = driver.find_elements(
                        By.XPATH,
                        "//ol[@id='sku-list']//a[@class='js-sku-link sku-link']",
                    )
                    if len(skroutz_items) > 0:
                        min = 100000
                        temp_link = skroutz_items[0].get_attribute("href")
                        for item in skroutz_items:
                            temp_text = (
                                item.text.replace("από", "")
                                .replace(" ", "")
                                .replace(".", "")
                                .replace(",", ".")
                            )
                            temp_text = temp_text[: temp_text.index("€")]
                            temp_price = float(temp_text)
                            if temp_price < min:
                                min = temp_price
                                temp_link = item.get_attribute("href")
                        skroutz_links.append(temp_link)
                        skroutz_prices.append(min)
                        percentage_difference = (
                            (skroutz_prices[i] - float(eshop_items_prices[i]))
                            / skroutz_prices[i]
                        ) * 100
                        print(percentage_difference)
                        if percentage_difference > 0 and percentage_difference > 5:
                            deal = "DEAL"
                        else:
                            deal = "NO DEAL"
                        if percentage_difference >= 35:
                            telegram_bot_sendtext(
                                f"{deal} {eshop_items_names[i]} {eshop_items_prices[i]} {skroutz_prices[i]} {eshop_items_links[i]} {skroutz_links[i]}"
                            )
                    else:
                        skroutz_links.append("Δεν βρέθηκε")
                        skroutz_prices.append(0)

                    print(
                        f"eshop_name: {eshop_items_names[i]}\neshop_price: {eshop_items_prices[i]}\neshop_link: {eshop_items_links[i]}\nskroutz_price: {skroutz_prices[i]}\nskroutz_link: {skroutz_links[i]}\n"
                    )
                else:
                    skroutz_links.append(0)
                    skroutz_prices.append(0)
                f.write(
                    f'"{skroutz_prices[i]}|{skroutz_links[i]}|{"{:.2f}".format(percentage_difference)}",\n'
                )
            f.write("]")
            f.write(
                """
        
let i = 0;
$( '.crazy-status-row > td > b' ).each(function() {
    let [price, link, percentage] = lines[i].split("|");
    if (price === "0") {
        $( this ).replaceWith(
            `<div><b>Δεν βρέθηκε αντίστοιχο</b></div>`);
            i++;
    }
    else{
        $( this ).replaceWith(
            `<div><b>Τιμή skroutz.gr : ${price}€ </b></div>
            <div><b>Έκπτωση ${percentage}% </b></div>
            <div><a href=${link} target="_blank" class="main">Skroutz Link</a></div>`);
            i++;
    }
});
            """
            )
    return


if __name__ == "__main__":
    options = webdriver.ChromeOptions()
    options.add_argument("--window-size=1020,720")
    options.add_argument("--ignore-certificate-errors")
    options.add_argument("--disable-blink-features=AutomationControlled")
    # options.add_extension("UBlock.crx")
    # options.add_argument("--headless")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    main(driver)
    driver.close()
