let lines = [
    "0|Δεν βρέθηκε|0.00",
    "0|Δεν βρέθηκε|0.00",
    "203.18|https://www.skroutz.gr/s/26233981/Horizon-32HL6300H-Smart-HD-Ready-32.html|16.82",
    "228.0|https://www.skroutz.gr/s/25065842/Philips-Smart-%CE%A4%CE%B7%CE%BB%CE%B5%CF%8C%CF%81%CE%B1%CF%83%CE%B7-LED-HD-Ready-32PHS6605-12-HDR-32.html|5.75",
    "387.88|https://www.skroutz.gr/s/29008937/LG-Smart-%CE%A4%CE%B7%CE%BB%CE%B5%CF%8C%CF%81%CE%B1%CF%83%CE%B7-LED-4K-UHD-43UP78003LB-HDR-43.html|-0.29",
    "780.0|https://www.skroutz.gr/s/30840374/LG-Smart-%CE%A4%CE%B7%CE%BB%CE%B5%CF%8C%CF%81%CE%B1%CF%83%CE%B7-OLED-4K-UHD-OLED48A13LA-HDR-48.html|2.69",
    "0|Δεν βρέθηκε|2.69",
    "186.53|https://www.skroutz.gr/s/27615391/Asus-TUF-Gaming-VG24VQE-Curved-Gaming-Monitor-23-6-FHD-1920x1080-165Hz.html|5.70",
    "221.96|https://www.skroutz.gr/s/20848622/Asus-VG278QF-Gaming-Monitor-27-FHD-1920x1080-165Hz.html|-3.17",
    "0|Δεν βρέθηκε|-3.17",
    "469.01|https://www.skroutz.gr/s/30633426/HP-14-dq2055wm-i3-1115G4-4GB-256GB-FHD-W10-S.html|0.00",
    "584.0|https://www.skroutz.gr/s/26036114/Lenovo-IdeaPad-3-15IIL05-i5-1035G1-8GB-256GB-FHD-W10-Cherry-Red.html|-10.60",
    "842.0|https://www.skroutz.gr/s/24302859/Lenovo-ThinkPad-E15-Gen-2-AMD-R5-4500U-8GB-256GB-FHD-W10.html|27.80",
    "494.99|https://www.skroutz.gr/s/31698001/HP-250-G8-i3-1005G1-8GB-256GB-FHD-W10-Home-US.html|-49.30",
    "637.8|https://www.skroutz.gr/s/31724486/Acer-Aspire-3-A315-42-R7R0-Ryzen-7-3700U-8GB-512GB-FHD-Endless-OS.html|4.37",
    "975.0|https://www.skroutz.gr/s/30925011/MSI-GF63-Thin-10UC-i5-10500H-8GB-512GB-GeForce-RTX-3050-Max-Q-FHD-No-OS.html|0.62",
    "0|Δεν βρέθηκε|0.62",
    "119.93|https://www.skroutz.gr/s/22152166/Lenovo-Tab-M8-HD-2nd-Gen-8-%CE%BC%CE%B5-WiFi-4G-%CE%BA%CE%B1%CE%B9-%CE%9C%CE%BD%CE%AE%CE%BC%CE%B7-32GB-Iron-Grey.html|16.70",
    "144.44|https://www.skroutz.gr/s/27131209/Lenovo-Tab-M10-HD-2nd-Gen-TB-X306F-10-32GB-Iron-Grey.html|-3.78",
    "0|Δεν βρέθηκε|-3.78",
    "90.0|https://www.skroutz.gr/s/15922355/Gewa-%CE%9A%CE%BB%CE%B1%CF%83%CE%B9%CE%BA%CE%AE-%CE%9A%CE%B9%CE%B8%CE%AC%CF%81%CE%B1-3-4-%CE%A0%CE%B1%CE%B9%CE%B4%CE%B9%CE%BA%CE%AE-VGS-Basic-Plus-PS510-346-Black.html|24.56",
    "0|Δεν βρέθηκε|24.56",
    "255.31|https://www.skroutz.gr/s/24657219/Arturia-Midi-Keyboard-KeyLab-Essential-%CE%BC%CE%B5-61-%CE%A0%CE%BB%CE%AE%CE%BA%CF%84%CF%81%CE%B1-%CF%83%CE%B5-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF-%CE%A7%CF%81%CF%8E%CE%BC%CE%B1.html|6.39",
    "50.0|https://www.skroutz.gr/s/7383339/Mooer-Cruncher-Distortion.html|18.20",
    "198.75|https://www.skroutz.gr/s/20206417/Cort-CR100-Classic-Rock-Series-Black.html|2.94",
    "358.36|https://www.skroutz.gr/s/29614757/OnePlus-Nord-CE-5G-12GB-256GB-Charkoal-Ink.html|-42.04",
    "714.0|https://www.skroutz.gr/s/27846298/OnePlus-9-5G-8GB-128GB-Arctic-Sky.html|7.70",
    "275.61|https://www.skroutz.gr/s/27719511/Samsung-Galaxy-XCover-5-4GB-64GB-%CE%91%CE%BD%CE%B8%CE%B5%CE%BA%CF%84%CE%B9%CE%BA%CF%8C-Smartphone-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|0.22",
    "251.7|https://www.skroutz.gr/s/32313274/Samsung-Galaxy-M22-4GB-128GB-Black.html|-1.31",
    "176.79|https://www.skroutz.gr/s/31694271/Realme-8i-4GB-128GB-Space-Black.html|-3.28",
    "107.75|https://www.skroutz.gr/s/29423497/Motorola-Moto-E7i-Power-2GB-32GB-Tahiti-Blue.html|8.12",
    "235.0|https://www.skroutz.gr/s/27650414/Samsung-Galaxy-A32-4G-4GB-128GB-Awesome-Blue.html|0.85",
    "115.0|https://www.skroutz.gr/s/22962298/Fitbit-Charge-4-Activity-Tracker-%CE%91%CE%B4%CE%B9%CE%AC%CE%B2%CF%81%CE%BF%CF%87%CE%BF-%CE%BC%CE%B5-%CE%A0%CE%B1%CE%BB%CE%BC%CE%BF%CE%B3%CF%81%CE%AC%CF%86%CE%BF-Rosewood.html|13.91",
    "0|Δεν βρέθηκε|13.91",
    "0|Δεν βρέθηκε|13.91",
    "134.19|https://www.skroutz.gr/s/9395207/Hape-All-Season-House-Furnished.html|16.54",
    "0|Δεν βρέθηκε|16.54",
    "7.59|https://www.skroutz.gr/s/29297238/Entac-%CE%A6%CE%B1%CE%BA%CF%8C%CF%82-%CE%95%CF%81%CE%B3%CE%B1%CF%83%CE%AF%CE%B1%CF%82-%CE%9C%CF%80%CE%B1%CF%84%CE%B1%CF%81%CE%AF%CE%B1%CF%82-200lm-EWL-1W-COB-PL-15-007-0021.html|42.16",
    "0|Δεν βρέθηκε|42.16",
    "0|Δεν βρέθηκε|42.16",
    "0|Δεν βρέθηκε|42.16",
    "0|Δεν βρέθηκε|42.16",
    "84.9|https://www.skroutz.gr/s/17619782/Samsung-MS23K3513AW-%CE%A6%CE%BF%CF%8D%CF%81%CE%BD%CE%BF%CF%82-%CE%9C%CE%B9%CE%BA%CF%81%CE%BF%CE%BA%CF%85%CE%BC%CE%AC%CF%84%CF%89%CE%BD-23lt.html|6.95",
    "0|Δεν βρέθηκε|6.95",
    "99.0|https://www.skroutz.gr/s/9464068/Candy-CMXG22DS-%CE%A6%CE%BF%CF%8D%CF%81%CE%BD%CE%BF%CF%82-%CE%9C%CE%B9%CE%BA%CF%81%CE%BF%CE%BA%CF%85%CE%BC%CE%AC%CF%84%CF%89%CE%BD-%CE%BC%CE%B5-Grill-22lt.html|6.16",
    "95.65|https://www.skroutz.gr/s/14484852/Braun-Series-5-5140s-Wet-Dry-Blue-Black-%CE%9E%CF%85%CF%81%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CE%AE-%CE%9C%CE%B7%CF%87%CE%B1%CE%BD%CE%AE-%CE%A0%CF%81%CE%BF%CF%83%CF%8E%CF%80%CE%BF%CF%85-%CE%95%CF%80%CE%B1%CE%BD%CE%B1%CF%86%CE%BF%CF%81%CF%84%CE%B9%CE%B6%CF%8C%CE%BC%CE%B5%CE%BD%CE%B7.html|14.38",
    "27.36|https://www.skroutz.gr/s/18071059/Philips-HC3535-15-%CE%9A%CE%BF%CF%85%CF%81%CE%B5%CF%85%CF%84%CE%B9%CE%BA%CE%AE-%CE%9C%CE%B7%CF%87%CE%B1%CE%BD%CE%AE.html|-3.40",
    "19.9|https://www.skroutz.gr/s/10924062/Wahl-3615-1016-%CE%9E%CF%85%CF%81%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CE%AE-%CE%9C%CE%B7%CF%87%CE%B1%CE%BD%CE%AE-%CE%A0%CF%81%CE%BF%CF%83%CF%8E%CF%80%CE%BF%CF%85-%CE%95%CF%80%CE%B1%CE%BD%CE%B1%CF%86%CE%BF%CF%81%CF%84%CE%B9%CE%B6%CF%8C%CE%BC%CE%B5%CE%BD%CE%B7.html|0.00",
    "4.9|https://www.skroutz.gr/s/29750859/Life-Neat-Trimmer-%CE%9C%CE%B7%CF%87%CE%B1%CE%BD%CE%AE.html|7.14",
    "57.63|https://www.skroutz.gr/s/22186035/Braun-Silk-Epil-5-%CE%A3%CE%B5%CF%84-%CE%91%CF%80%CE%BF%CF%84%CF%81%CE%AF%CF%87%CF%89%CF%83%CE%B7%CF%82-Epilator-%CE%B3%CE%B9%CE%B1-%CE%A0%CF%81%CF%8C%CF%83%CF%89%CF%80%CE%BF-%CE%A3%CF%8E%CE%BC%CE%B1-%CE%9C%CF%80%CE%B9%CE%BA%CE%AF%CE%BD%CE%B9-285786.html|-2.20",
    "19.9|https://www.skroutz.gr/s/30050580/Life-Petite-Smartweight-BT-Smart-%CE%96%CF%85%CE%B3%CE%B1%CF%81%CE%B9%CE%AC-%CE%BC%CE%B5-%CE%9B%CE%B9%CF%80%CE%BF%CE%BC%CE%B5%CF%84%CF%81%CE%B7%CF%84%CE%AE-Bluetooth-%CF%83%CE%B5-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF-%CF%87%CF%81%CF%8E%CE%BC%CE%B1.html|-15.08",
    "79.9|https://www.skroutz.gr/s/30903850/Heinner-HVC-M700WH-%CE%97%CE%BB%CE%B5%CE%BA%CF%84%CF%81%CE%B9%CE%BA%CE%AE-%CE%A3%CE%BA%CE%BF%CF%8D%CF%80%CE%B1-700W-%CE%BC%CE%B5-%CE%A3%CE%B1%CE%BA%CE%BF%CF%8D%CE%BB%CE%B1-3lt.html|26.16",
    "64.9|https://www.skroutz.gr/s/30844700/Life-Phoenix-%CE%A3%CE%BA%CE%BF%CF%8D%CF%80%CE%B1-%CE%A3%CF%84%CE%AC%CF%87%CF%84%CE%B7%CF%82-1200W-%CE%BC%CE%B5-%CE%9A%CE%AC%CE%B4%CE%BF-15lt.html|23.11",
    "0|Δεν βρέθηκε|23.11",
    "99.03|https://www.skroutz.gr/s/11257067/Philips-HD9216-80-%CE%A6%CF%81%CE%B9%CF%84%CE%AD%CE%B6%CE%B1-%CE%91%CE%AD%CF%81%CE%BF%CF%82-%CE%BC%CE%B5-%CE%91%CF%80%CE%BF%CF%83%CF%80%CF%8E%CE%BC%CE%B5%CE%BD%CE%BF-%CE%9A%CE%AC%CE%B4%CE%BF-0-82lt.html|15.28",
    "22.99|https://www.skroutz.gr/s/330926/Tristar-KM-2270-%CE%97%CE%BB%CE%B5%CE%BA%CF%84%CF%81%CE%B9%CE%BA%CF%8C%CF%82-%CE%9C%CF%8D%CE%BB%CE%BF%CF%82-%CE%9A%CE%B1%CF%86%CE%AD-150W-%CE%BC%CE%B5-%CE%A7%CF%89%CF%81%CE%B7%CF%84%CE%B9%CE%BA%CF%8C%CF%84%CE%B7%CF%84%CE%B1-70gr-%CE%91%CF%83%CE%B7%CE%BC%CE%AF.html|30.84",
    "22.75|https://www.skroutz.gr/s/32731632/Heinner-HMC-300RD-%CE%A0%CE%BF%CE%BB%CF%85%CE%BA%CF%8C%CF%80%CF%84%CE%B7%CF%82-Multi-300W-%CE%BC%CE%B5-%CE%94%CE%BF%CF%87%CE%B5%CE%AF%CE%BF-1-2lt.html|21.32",
    "12.0|https://www.skroutz.gr/s/4963598/Tristar-SA-3050-%CE%A4%CE%BF%CF%83%CF%84%CE%B9%CE%AD%CF%81%CE%B1-%CE%B3%CE%B9%CE%B1-2-%CE%A4%CE%BF%CF%83%CF%84-750W.html|9.17",
    "133.87|https://www.skroutz.gr/s/17269337/Philips-HR3655-00-%CE%9C%CF%80%CE%BB%CE%AD%CE%BD%CF%84%CE%B5%CF%81-%CE%B3%CE%B9%CE%B1-Smoothies-%CE%BC%CE%B5-%CE%93%CF%85%CE%AC%CE%BB%CE%B9%CE%BD%CE%B7-%CE%9A%CE%B1%CE%BD%CE%AC%CF%84%CE%B1-1-8lt-1400Watt-Inox.html|10.44",
    "0|Δεν βρέθηκε|10.44",
    "84.9|https://www.skroutz.gr/s/8168403/Sencor-SSJ4041BK-%CE%91%CF%80%CE%BF%CF%87%CF%85%CE%BC%CF%89%CF%84%CE%AE%CF%82-%CE%91%CF%81%CE%B3%CE%AE%CF%82-%CE%A3%CF%8D%CE%BD%CE%B8%CE%BB%CE%B9%CF%88%CE%B7%CF%82-400W-Inox.html|12.96",
    "12.91|https://www.skroutz.gr/s/18241435/Gotie-GHM-350C-%CE%9C%CE%AF%CE%BE%CE%B5%CF%81-%CE%A7%CE%B5%CE%B9%CF%81%CF%8C%CF%82-350W.html|0.08",
    "6.32|https://www.skroutz.gr/s/16987614/Esperanza-EKS005-%CE%A8%CE%B7%CF%86%CE%B9%CE%B1%CE%BA%CE%AE-%CE%96%CF%85%CE%B3%CE%B1%CF%81%CE%B9%CE%AC-%CE%9A%CE%BF%CF%85%CE%B6%CE%AF%CE%BD%CE%B1%CF%82-5kg.html|-10.60",
    "8.0|https://www.skroutz.gr/s/19659715/Esperanza-%CE%97%CE%BB%CE%B5%CE%BA%CF%84%CF%81%CE%B9%CE%BA%CF%8C%CF%82-%CE%9C%CF%8D%CE%BB%CE%BF%CF%82-%CE%9C%CF%80%CE%B1%CF%87%CE%B1%CF%81%CE%B9%CE%BA%CF%8E%CE%BD-Inox-%CE%91%CF%83%CE%B7%CE%BC%CE%AF-23cm-EKP002.html|31.25",
    "33.25|https://www.skroutz.gr/s/17804675/Esperanza-EKM027-%CE%9A%CF%8C%CF%86%CF%84%CE%B7%CF%82-%CE%9B%CE%B1%CF%87%CE%B1%CE%BD%CE%B9%CE%BA%CF%8E%CE%BD-%CE%A6%CF%81%CE%BF%CF%8D%CF%84%CF%89%CE%BD-150W-%CE%9B%CE%B5%CF%85%CE%BA%CF%8C%CF%82.html|22.11",
    "0|Δεν βρέθηκε|22.11",
    "69.01|https://www.skroutz.gr/s/31687467/Primo-PRRH-81062-%CE%9A%CE%B1%CE%BB%CE%BF%CF%81%CE%B9%CF%86%CE%AD%CF%81-%CE%9B%CE%B1%CE%B4%CE%B9%CE%BF%CF%8D-%CE%BC%CE%B5-11-%CF%86%CE%AD%CF%84%CE%B5%CF%82-2500W.html|0.01",
    "35.01|https://www.skroutz.gr/s/31658107/Primo-PRCH-81032-%CE%A3%CF%8C%CE%BC%CF%80%CE%B1-Carbon-%CE%BC%CE%B5-%CE%98%CE%B5%CF%81%CE%BC%CE%BF%CF%83%CF%84%CE%AC%CF%84%CE%B7-900W.html|0.03",
    "13.75|https://www.skroutz.gr/s/20494228/Esperanza-EHB004-%CE%97%CE%BB%CE%B5%CE%BA%CF%84%CF%81%CE%B9%CE%BA%CE%AE-%CE%98%CE%B5%CF%81%CE%BC%CE%BF%CF%86%CF%8C%CF%81%CE%B1-%CE%9C%CE%B1%CE%BE%CE%B9%CE%BB%CE%AC%CF%81%CE%B9.html|20.73",
    "139.0|https://www.skroutz.gr/s/24569279/Life-Super-Dry-%CE%91%CF%86%CF%85%CE%B3%CF%81%CE%B1%CE%BD%CF%84%CE%AE%CF%81%CE%B1%CF%82-12lt.html|28.13",
    "229.0|https://www.skroutz.gr/s/16121799/Kullhaus-Qualis-20L-Ion-%CE%91%CF%86%CF%85%CE%B3%CF%81%CE%B1%CE%BD%CF%84%CE%AE%CF%81%CE%B1%CF%82-20lt-%CE%BC%CE%B5-%CE%99%CE%BF%CE%BD%CE%B9%CF%83%CF%84%CE%AE.html|3.97",
    "10.75|https://www.skroutz.gr/s/23673699/Dettol-%CE%9A%CE%B1%CE%B8%CE%B1%CF%81%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CF%8C-%CE%A0%CE%BB%CF%85%CE%BD%CF%84%CE%B7%CF%81%CE%AF%CE%BF%CF%85-%CE%91%CF%80%CE%BF%CE%BB%CF%85%CE%BC%CE%B1%CE%BD%CF%84%CE%B9%CE%BA%CF%8C-%CE%86%CF%81%CF%89%CE%BC%CE%B1-%CE%9B%CE%B5%CE%BC%CF%8C%CE%BD%CE%B9-%CE%A5%CE%B3%CF%81%CF%8C-3%CF%84%CE%BC%CF%87-250.html|9.30",
    "0|Δεν βρέθηκε|9.30",
    "0|Δεν βρέθηκε|9.30",
    "4.49|https://www.skroutz.gr/s/26837993/Septona-Mild-Antiseptic-Hand-Cleansing-Gel-70-%CE%A0%CF%81%CE%AC%CF%83%CE%B9%CE%BD%CE%BF-%CE%9C%CE%AE%CE%BB%CE%BF-1000ml.html|2.23",
    "4.49|https://www.skroutz.gr/s/28193931/Septona-Mild-Antiseptic-Hand-Cleansing-Gel-70-Lemon-1000ml.html|2.23",
    "0|Δεν βρέθηκε|2.23",
    "0|Δεν βρέθηκε|2.23",
    "97.9|https://www.skroutz.gr/s/27481059/Thermaltake-Divider-300-TG-ARGB-Gaming-Midi-Tower-%CE%9A%CE%BF%CF%85%CF%84%CE%AF-%CE%A5%CF%80%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CF%83%CF%84%CE%AE-%CE%BC%CE%B5-%CE%A0%CE%BB%CE%B1%CF%8A%CE%BD%CF%8C-%CE%A0%CE%B1%CF%81%CE%AC%CE%B8%CF%85%CF%81%CE%BF-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|0.00",
    "94.0|https://www.skroutz.gr/s/10989735/Thermaltake-Smart-Pro-RGB-750W-Bronze.html|-3.09",
    "24.0|https://www.skroutz.gr/s/16964880/Supercase-DR-8550BTX-550W-Full-Wired.html|8.75",
    "59.0|https://www.skroutz.gr/s/30389534/Corsair-CX-Series-CX550M-2021-550W-Semi-Modular-80-Plus-Bronze.html|-10.00",
    "15.36|https://www.skroutz.gr/s/26908253/Patriot-Burst-Elite-SSD-120GB-2-5-PBE120GS25SSDR.html|-5.40",
    "17.16|https://www.skroutz.gr/s/19802297/TeamGroup-GX1-SSD-120GB-2-5-T253X1120G0C101.html|-54.43",
    "45.3|https://www.skroutz.gr/s/20788366/TeamGroup-GX2-SSD-512GB-2-5-T253X2512G0C101.html|9.71",
    "84.7|https://www.skroutz.gr/s/26908369/Patriot-Burst-Elite-SSD-960GB-2-5-PBE960GS25SSDR.html|6.85",
    "154.08|https://www.skroutz.gr/s/22118663/Samsung-Portable-SSD-T7-Touch-USB-C-USB-3-2-1TB-2-5-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|16.99",
    "141.98|https://www.skroutz.gr/s/27357424/Corsair-iCUE-H100i-Elite-Capellix-%CE%A5%CE%B4%CF%81%CF%8C%CF%88%CF%85%CE%BE%CE%B7-%CE%95%CF%80%CE%B5%CE%BE%CE%B5%CF%81%CE%B3%CE%B1%CF%83%CF%84%CE%AE-%CE%94%CE%B9%CF%80%CE%BB%CE%BF%CF%8D-%CE%91%CE%BD%CE%B5%CE%BC%CE%B9%CF%83%CF%84%CE%AE%CF%81%CE%B1-120mm-%CE%B3%CE%B9%CE%B1-Socket-AM4-1200-115x-%CE%BC%CE%B5-RGB-%CE%A6%CF%89%CF%84%CE%B9%CF%83%CE%BC%CF%8C-%CE%9B%CE%B5%CF%85%CE%BA%CE%AE.html|1.46",
    "3.97|https://www.skroutz.gr/s/4107123/Adata-DashDrive-UV128-32GB-USB-3-0-Blue.html|-552.39",
    "3.97|https://www.skroutz.gr/s/25295444/Adata-DashDrive-UV150-32GB-USB-3-0-Black.html|-199.75",
    "6.27|https://www.skroutz.gr/s/19304139/Adata-UV350-64GB-USB-3-2-%CE%93%CE%BA%CF%81%CE%B9.html|-10.05",
    "0|Δεν βρέθηκε|-10.05",
    "19.4|https://www.skroutz.gr/s/29793098/TeamGroup-Pro-microSDXC-128GB-U3-V30-A1-%CE%BC%CE%B5-%CE%B1%CE%BD%CF%84%CE%AC%CF%80%CF%84%CE%BF%CF%81%CE%B1.html|-52.06",
    "8.15|https://www.skroutz.gr/s/26896676/TeamGroup-GO-Card-Micro-SDXC-64GB-U3-with-Adapter.html|-60.74",
    "7.28|https://www.skroutz.gr/s/25750702/Sandisk-Ultra-microSDXC-64GB-Class-10-U1-A1-with-Adapter.html|-20.19",
    "9.9|https://www.skroutz.gr/s/25948488/TP-LINK-Smart-%CE%9B%CE%AC%CE%BC%CF%80%CE%B1-LED-%CE%B3%CE%B9%CE%B1-%CE%9D%CF%84%CE%BF%CF%85%CE%AF-E27-RGBW-806lm-Dimmable-L530E.html|4.14",
    "11.7|https://www.skroutz.gr/s/19966935/TP-LINK-TL-SG1005D-v9-Unmanaged-L2-Switch-%CE%BC%CE%B5-5-%CE%98%CF%8D%CF%81%CE%B5%CF%82-Gigabit-1Gbps-Ethernet.html|-61.54",
    "34.9|https://www.skroutz.gr/s/12653762/TP-LINK-CPE210-v3-Access-Point-Wi-Fi-4-Single-Band-2-4GHz-%CE%B3%CE%B9%CE%B1-%CE%95%CE%BE%CF%89%CF%84%CE%B5%CF%81%CE%B9%CE%BA%CE%AE-%CF%84%CE%BF%CF%80%CE%BF%CE%B8%CE%AD%CF%84%CE%B7%CF%83%CE%B7.html|14.07",
    "18.5|https://www.skroutz.gr/s/7851652/Netis-E1-Blue-WiFi-Extender-Single-Band-2-4GHz-300Mbps.html|35.68",
    "5.9|https://www.skroutz.gr/s/17909430/Savio-CL-63-%CE%91%CF%83%CF%8D%CF%81%CE%BC%CE%B1%CF%84%CE%BF%CF%82-USB-%CE%91%CE%BD%CF%84%CE%AC%CF%80%CF%84%CE%BF%CF%81%CE%B1%CF%82-%CE%94%CE%B9%CE%BA%CF%84%CF%8D%CE%BF%CF%85-%CE%BC%CE%B5-%CE%91%CF%80%CE%BF%CF%83%CF%80%CF%8E%CE%BC%CE%B5%CE%BD%CE%B7-%CE%9A%CE%B5%CF%81%CE%B1%CE%AF%CE%B1-150Mbps.html|0.00",
    "125.61|https://www.skroutz.gr/s/25721805/Natec-Fury-Avenger-XL-%CE%9A%CE%B1%CF%81%CE%AD%CE%BA%CE%BB%CE%B1-Gaming-Black-White.html|-3.42",
    "162.9|https://www.skroutz.gr/s/20540520/Genesis-Nitro-330-Military-Limited-Edition.html|23.33",
    "329.99|https://www.skroutz.gr/s/19439457/Akracing-Opal-%CE%9A%CE%B1%CF%81%CE%AD%CE%BA%CE%BB%CE%B1-Gaming-%CE%9C%CE%B1%CF%8D%CF%81%CE%B7.html|24.54",
    "11.89|https://www.skroutz.gr/s/22417618/Natec-Hellfire-2-%CE%91%CE%B3%CE%B3%CE%BB%CE%B9%CE%BA%CF%8C-US.html|16.74",
    "10.48|https://www.skroutz.gr/s/25006834/Natec-Fury-Battler-RGB-Gaming-%CE%A0%CE%BF%CE%BD%CF%84%CE%AF%CE%BA%CE%B9-Black.html|15.08",
    "11.5|https://www.skroutz.gr/s/24650752/Natec-Raptor-Over-Ear-Gaming-Headset-2x3-5mm-USB.html|17.48",
    "17.6|https://www.skroutz.gr/s/12654429/Genesis-M12-Maxi-Lava-Gaming-Mouse-Pad-XXL-900mm-%CE%A0%CE%BF%CE%BB%CF%8D%CF%87%CF%81%CF%89%CE%BC%CE%BF.html|43.75",
    "29.83|https://www.skroutz.gr/s/31846456/Pallad-450-%CE%91%CE%B4%CE%B9%CE%AC%CE%B2%CF%81%CE%BF%CF%87%CE%B7-%CE%A4%CF%83%CE%AC%CE%BD%CF%84%CE%B1-%CE%A0%CE%BB%CE%AC%CF%84%CE%B7%CF%82-%CE%B3%CE%B9%CE%B1-Laptop-15-6-Camo.html|23.23",
    "23.85|https://www.skroutz.gr/s/25114933/Edifier-G1-SE-Gaming-Headset-3-5mm-Black.html|29.14",
    "129.9|https://www.skroutz.gr/s/5443078/Edifier-%CE%91%CF%85%CF%84%CE%BF%CE%B5%CE%BD%CE%B9%CF%83%CF%87%CF%85%CF%8C%CE%BC%CE%B5%CE%BD%CE%B1-%CE%97%CF%87%CE%B5%CE%AF%CE%B1-2-%CE%94%CF%81%CF%8C%CE%BC%CF%89%CE%BD-R1700BT-66W-%CE%96%CE%B5%CF%8D%CE%B3%CE%BF%CF%82-%CE%9A%CE%B1%CF%86%CE%AD.html|10.78",
    "15.99|https://www.skroutz.gr/s/26108348/HAMA-Fit-Track-1900-Activity-Tracker-%CE%BC%CE%B5-%CE%A0%CE%B1%CE%BB%CE%BC%CE%BF%CE%B3%CF%81%CE%AC%CF%86%CE%BF-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|13.07",
    "0|Δεν βρέθηκε|13.07",
    "0|Δεν βρέθηκε|13.07",
    "21.76|https://www.skroutz.gr/s/29213137/HAMA-uRage-AFK-300-Illuminated-PC-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|10.39",
    "0|Δεν βρέθηκε|10.39",
    "0|Δεν βρέθηκε|10.39",
    "45.9|https://www.skroutz.gr/s/24116384/NOD-U-650-UPS-Line-Interactive-650VA-360W-%CE%BC%CE%B5-2-Schuko-%CE%A0%CF%81%CE%AF%CE%B6%CE%B5%CF%82.html|13.07",
    "79.34|https://www.skroutz.gr/s/31713738/Huion-Inspiroy-H610PRO-V2-%CE%93%CF%81%CE%B1%CF%86%CE%AF%CE%B4%CE%B1-%CE%A3%CF%87%CE%B5%CE%B4%CE%AF%CE%B1%CF%83%CE%B7%CF%82.html|5.60",
    "11.53|https://www.skroutz.gr/s/2565909/A4Tech-HS-800-Over-Ear-Gaming-Headset-3-5mm.html|-3.21",
    "113.9|https://www.skroutz.gr/s/10445637/Zalman-ZM-K700M-Cherry-MX-Red-%CE%91%CE%B3%CE%B3%CE%BB%CE%B9%CE%BA%CF%8C-US.html|47.41",
    "12.9|https://www.skroutz.gr/s/23814867/Baseus-4x-USB-2-0-HUB-with-USB-Type-C-plug-OTG.html|54.26",
    "30.5|https://www.skroutz.gr/s/24865658/Baseus-BA03-NGBA03-02-White.html|31.48",
    "0|Δεν βρέθηκε|31.48",
    "33.0|https://www.skroutz.gr/s/27533543/Tracer-%CE%A0%CF%85%CE%BA%CE%BD%CF%89%CF%84%CE%B9%CE%BA%CF%8C-%CE%9C%CE%B9%CE%BA%CF%81%CF%8C%CF%86%CF%89%CE%BD%CE%BF-USB-Premium-Pro-%CE%95%CF%80%CE%B9%CF%84%CF%81%CE%B1%CF%80%CE%AD%CE%B6%CE%B9%CE%BF-%CE%A6%CF%89%CE%BD%CE%AE%CF%82-Set.html|24.55",
    "48.9|https://www.skroutz.gr/s/25750617/Technaxx-TG-125-%CE%BC%CE%B5-%CE%9A%CF%81%CF%85%CF%86%CE%AE-%CE%9A%CE%AC%CE%BC%CE%B5%CF%81%CE%B1-%CE%94%CF%85%CE%BD%CE%B1%CF%84%CF%8C%CF%84%CE%B7%CF%84%CE%B1-%CE%9A%CE%B1%CF%84%CE%B1%CE%B3%CF%81%CE%B1%CF%86%CE%AE%CF%82-10x25mm.html?from=catspan|22.49",
    "22.0|https://www.skroutz.gr/s/13371916/Natec-NSD-0954.html|36.82",
    "14.0|https://www.skroutz.gr/s/18311677/Natec-Iora.html|25.07",
    "14.83|https://www.skroutz.gr/s/30375651/Baseus-%CE%A6%CF%89%CF%84%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CF%8C-%CE%91%CF%83%CF%86%CE%B1%CE%BB%CE%B5%CE%AF%CE%B1%CF%82-%CE%95%CF%80%CE%B1%CE%BD%CE%B1%CF%86%CE%BF%CF%81%CF%84%CE%B9%CE%B6%CF%8C%CE%BC%CE%B5%CE%BD%CE%BF-DGXC-A02.html|-0.47",
    "26.9|https://www.skroutz.gr/s/23963826/Osio-SRM-7880B-MP3-Player-8GB-%CE%BC%CE%B5-%CE%9F%CE%B8%CF%8C%CE%BD%CE%B7-TFT-1-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|29.74",
    "0|Δεν βρέθηκε|29.74",
    "0|Δεν βρέθηκε|29.74",
    "20.19|https://www.skroutz.gr/s/15345384/Esperanza-%CE%A0%CE%BB%CE%B1%CF%83%CF%84%CE%B9%CE%BA%CE%BF%CF%80%CE%BF%CE%B9%CE%B7%CF%84%CE%AE%CF%82-Infinity-%CE%95%CF%80%CE%B9%CF%84%CF%81%CE%B1%CF%80%CE%AD%CE%B6%CE%B9%CE%BF%CF%82-%CE%B3%CE%B9%CE%B1-A4-EFL001.html|21.25",
    "7.07|https://www.skroutz.gr/s/20708336/LogiLink-UA0345.html|-48.51",
    "9.0|https://www.skroutz.gr/s/13435428/LogiLink-ID0158-%CE%95%CE%BD%CF%83%CF%8D%CF%81%CE%BC%CE%B1%CF%84%CE%BF-%CE%A0%CE%BF%CE%BD%CF%84%CE%AF%CE%BA%CE%B9-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|1.11",
    "8.44|https://www.skroutz.gr/s/6606067/LogiLink-ID0120-%CE%91%CF%83%CF%8D%CF%81%CE%BC%CE%B1%CF%84%CE%BF-%CE%91%CF%81%CE%B9%CE%B8%CE%BC%CE%B7%CF%84%CE%B9%CE%BA%CF%8C-%CE%A0%CE%BB%CE%B7%CE%BA%CF%84%CF%81%CE%BF%CE%BB%CF%8C%CE%B3%CE%B9%CE%BF.html|6.40",
    "7.44|https://www.skroutz.gr/s/21149814/LogiLink-%CE%97%CE%BC%CE%B5%CF%81%CE%AE%CF%83%CE%B9%CE%BF%CF%82-%CE%A8%CE%B7%CF%86%CE%B9%CE%B1%CE%BA%CF%8C%CF%82-%CE%A7%CF%81%CE%BF%CE%BD%CE%BF%CE%B4%CE%B9%CE%B1%CE%BA%CF%8C%CF%80%CF%84%CE%B7%CF%82-ET0007.html|1.88",
    "10.91|https://www.skroutz.gr/s/20925640/Savio-TWS-02-Earbud-Bluetooth-Handsfree-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|9.26",
    "0|Δεν βρέθηκε|9.26",
    "16.0|https://www.skroutz.gr/s/29042310/Baseus-Bipow-PPBD10-10000mAh-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|-43.12",
    "0|Δεν βρέθηκε|-43.12",
    "22.57|https://www.skroutz.gr/s/19525862/Baseus-Encok-D02-%CE%91%CF%83%CF%8D%CF%81%CE%BC%CE%B1%CF%84%CE%B1-On-Ear-%CE%91%CE%BA%CE%BF%CF%85%CF%83%CF%84%CE%B9%CE%BA%CE%AC-%CE%9B%CE%B5%CF%85%CE%BA%CE%AC.html|11.83",
    "0|Δεν βρέθηκε|11.83",
    "22.57|https://www.skroutz.gr/s/16209645/Vivanco-Apple-Lightning-USB-USB-Type-C-micro-USB-Wall-Car-Adapter-Set-%CE%9B%CE%B5%CF%85%CE%BA%CF%8C-36262.html|69.43",
    "0|Δεν βρέθηκε|69.43",
    "0|Δεν βρέθηκε|69.43",
    "19.9|https://www.skroutz.gr/s/23797010/Baseus-Gamo-Mobile-Game-Adapter-2x-USB-Black.html|54.82",
    "0|Δεν βρέθηκε|54.82",
    "315.0|https://www.skroutz.gr/s/17830707/Dewalt-18V-XR-Brushless-%CE%A3%CE%B5%CF%84-%CE%9A%CF%81%CE%BF%CF%85%CF%83%CF%84%CE%B9%CE%BA%CF%8C-%CE%94%CF%81%CE%B1%CF%80%CE%B1%CE%BD%CE%BF%CE%BA%CE%B1%CF%84%CF%83%CE%AC%CE%B2%CE%B9%CE%B4%CE%BF-%CE%A0%CE%B1%CE%BB%CE%BC%CE%B9%CE%BA%CF%8C-%CE%9A%CE%B1%CF%84%CF%83%CE%B1%CE%B2%CE%AF%CE%B4%CE%B9-18V-%CE%BC%CE%B5-2-%CE%9C%CF%80%CE%B1%CF%84%CE%B1%CF%81%CE%AF%CE%B5%CF%82-3Ah-%CE%BA%CE%B1%CE%B9-%CE%98%CE%AE%CE%BA%CE%B7.html|4.79",
    "139.7|https://www.skroutz.gr/s/284560/Bosch-GBH-2-20-D-Professional-%CE%9A%CF%81%CE%BF%CF%85%CF%83%CF%84%CE%B9%CE%BA%CF%8C-%CE%A3%CE%BA%CE%B1%CF%80%CF%84%CE%B9%CE%BA%CF%8C-%CE%A1%CE%B5%CF%8D%CE%BC%CE%B1%CF%84%CE%BF%CF%82-650W-%CE%BC%CE%B5-SDS-Plus-061125A400.html|14.17",
    "0|Δεν βρέθηκε|14.17",
    "65.35|https://www.skroutz.gr/s/8999315/Bosch-GWS-7-115-E-%CE%A4%CF%81%CE%BF%CF%87%CF%8C%CF%82-115mm-%CE%A1%CE%B5%CF%8D%CE%BC%CE%B1%CF%84%CE%BF%CF%82-720W-%CE%BC%CE%B5-%CE%A1%CF%8D%CE%B8%CE%BC%CE%B9%CF%83%CE%B7-%CE%A3%CF%84%CF%81%CE%BF%CF%86%CF%8E%CE%BD-0601388203.html|-2.37",
    "57.98|https://www.skroutz.gr/s/25031710/Bosch-Go-%CE%9A%CE%B1%CF%84%CF%83%CE%B1%CE%B2%CE%AF%CE%B4%CE%B9-%CE%9C%CF%80%CE%B1%CF%84%CE%B1%CF%81%CE%AF%CE%B1%CF%82-3-6V.html|3.59",
    "24.88|https://www.skroutz.gr/s/18575449/Bosch-%CE%A3%CE%B5%CF%84-%CE%9A%CE%B1%CF%84%CF%83%CE%B1%CE%B2%CE%B9%CE%B4%CF%8C%CE%BB%CE%B1%CE%BC%CF%89%CE%BD-Impact-Control-2608522366-31%CF%84%CE%BC%CF%87.html|0.36",
    "17.02|https://www.skroutz.gr/s/15161612/Bosch-%CE%9A%CE%B1%CF%84%CF%83%CE%B1%CE%B2%CE%AF%CE%B4%CE%B9-%CE%9A%CE%B1%CF%83%CF%84%CE%AC%CE%BD%CE%B9%CE%B1%CF%82-%CE%BC%CE%B5-%CE%9C%CF%8D%CF%84%CE%B5%CF%82-2607019506-38%CF%84%CE%BC%CF%87.html|12.16",
    "229.92|https://www.skroutz.gr/s/259290/Makita-DA3010F-%CE%93%CF%89%CE%BD%CE%B9%CE%B1%CE%BA%CF%8C-%CE%94%CF%81%CE%AC%CF%80%CE%B1%CE%BD%CE%BF-450W.html|13.45",
    "42.94|https://www.skroutz.gr/s/93904/Black-Decker-KA900E-%CE%A4%CE%B1%CE%B9%CE%BD%CE%B9%CE%BF%CE%BB%CE%B5%CE%B9%CE%B1%CE%BD%CF%84%CE%AE%CF%81%CE%B1%CF%82-270W-%CE%BC%CE%B5-%CE%A1%CF%8D%CE%B8%CE%BC%CE%B9%CF%83%CE%B7-%CE%A4%CE%B1%CF%87%CF%8D%CF%84%CE%B7%CF%84%CE%B1%CF%82-%CE%BA%CE%B1%CE%B9-%CE%BC%CE%B5-%CE%A3%CF%8D%CF%83%CF%84%CE%B7%CE%BC%CE%B1-%CE%91%CE%BD%CE%B1%CF%81%CF%81%CF%8C%CF%86%CE%B7%CF%83%CE%B7%CF%82.html|0.09",
    "0|Δεν βρέθηκε|0.09",
    "48.98|https://www.skroutz.gr/s/7134354/Black-Decker-%CE%A3%CE%AD%CE%B3%CE%B1-KS701PEK-520W.html|12.41",
    "39.69|https://www.skroutz.gr/s/32162063/Black-Decker-BCRT8I-%CE%A0%CE%B5%CF%81%CE%B9%CF%83%CF%84%CF%81%CE%BF%CF%86%CE%B9%CE%BA%CF%8C-%CE%A0%CE%BF%CE%BB%CF%85%CE%B5%CF%81%CE%B3%CE%B1%CE%BB%CE%B5%CE%AF%CE%BF-7-2V-1x1-5Ah-%CE%BC%CE%B5-%CE%A1%CF%8D%CE%B8%CE%BC%CE%B9%CF%83%CE%B7-%CE%A4%CE%B1%CF%87%CF%8D%CF%84%CE%B7%CF%84%CE%B1%CF%82.html|5.52",
    "61.68|https://www.skroutz.gr/s/19093251/Bosch-06032A6101-%CE%A0%CE%B9%CF%83%CF%84%CF%8C%CE%BB%CE%B9-%CE%98%CE%B5%CF%81%CE%BC%CE%BF%CF%8D-%CE%91%CE%AD%CF%81%CE%B1-1800W-%CE%BC%CE%B5-%CE%A1%CF%8D%CE%B8%CE%BC%CE%B9%CF%83%CE%B7-%CE%98%CE%B5%CF%81%CE%BC%CE%BF%CE%BA%CF%81%CE%B1%CF%83%CE%AF%CE%B1%CF%82-%CE%B5%CF%89%CF%82-%CE%BA%CE%B1%CE%B9-600-C.html|18.95",
    "83.0|https://www.skroutz.gr/s/7329246/Bosch-PFS-2000-%CE%97%CE%BB%CE%B5%CE%BA%CF%84%CF%81%CE%B9%CE%BA%CF%8C-%CE%A0%CE%B9%CF%83%CF%84%CF%8C%CE%BB%CE%B9-%CE%92%CE%B1%CF%86%CE%AE%CF%82-440W-%CE%BC%CE%B5-%CE%94%CE%BF%CF%87%CE%B5%CE%AF%CE%BF-0-8lt.html|3.67",
    "86.28|https://www.skroutz.gr/s/266484/Makita-BO5030-%CE%88%CE%BA%CE%BA%CE%B5%CE%BD%CF%84%CF%81%CE%BF-%CE%A4%CF%81%CE%B9%CE%B2%CE%B5%CE%AF%CE%BF-123mm-%CE%A1%CE%B5%CF%8D%CE%BC%CE%B1%CF%84%CE%BF%CF%82-300W-%CE%BC%CE%B5-%CE%A3%CF%8D%CF%83%CF%84%CE%B7%CE%BC%CE%B1-%CE%91%CE%BD%CE%B1%CF%81%CF%81%CF%8C%CF%86%CE%B7%CF%83%CE%B7%CF%82.html|1.60",
    "80.2|https://www.skroutz.gr/s/14106836/Bosch-EasyAquatak-110-%CE%A0%CE%BB%CF%85%CF%83%CF%84%CE%B9%CE%BA%CF%8C-%CE%A1%CE%B5%CF%8D%CE%BC%CE%B1%CF%84%CE%BF%CF%82-%CE%BC%CE%B5-%CE%A0%CE%AF%CE%B5%CF%83%CE%B7-110bar-%CE%BA%CE%B1%CE%B9-%CE%9C%CE%B5%CF%84%CE%B1%CE%BB%CE%BB%CE%B9%CE%BA%CE%AE-%CE%91%CE%BD%CF%84%CE%BB%CE%AF%CE%B1.html|4.11",
    "0|Δεν βρέθηκε|4.11",
    "105.97|https://www.skroutz.gr/s/7567490/Black-Decker-CS2245-%CE%97%CE%BB%CE%B5%CE%BA%CF%84%CF%81%CE%B9%CE%BA%CF%8C-%CE%91%CE%BB%CF%85%CF%83%CE%BF%CF%80%CF%81%CE%AF%CE%BF%CE%BD%CE%BF-5-66kg-%CE%BC%CE%B5-%CE%9B%CE%AC%CE%BC%CE%B1-45cm.html|5.73",
    "84.8|https://www.skroutz.gr/s/17160704/Einhell-GC-DP-9035-%CE%9D-%CE%91%CE%BD%CF%84%CE%BB%CE%AF%CE%B1-%CE%91%CE%BA%CE%B1%CE%B8%CE%AC%CF%81%CF%84%CF%89%CE%BD-%CE%9B%CF%85%CE%BC%CE%AC%CF%84%CF%89%CE%BD-900W.html|11.62",
    "0|Δεν βρέθηκε|11.62",
    "0|Δεν βρέθηκε|11.62",
    "0|Δεν βρέθηκε|11.62",
    "0|Δεν βρέθηκε|11.62",
    "0|Δεν βρέθηκε|11.62",
    "0|Δεν βρέθηκε|11.62",
    "0|Δεν βρέθηκε|11.62",
    "0|Δεν βρέθηκε|11.62",
    "21.76|https://www.skroutz.gr/s/17219874/XLAYER-CD-R-80MIN-52X-700MB-INKJET-WHITE-PRINTABLE-FULL-SURFACE-SHRINK-PACK-100PCS.html|63.69",
    "0|Δεν βρέθηκε|63.69",
    "0|Δεν βρέθηκε|63.69",
    "0|Δεν βρέθηκε|63.69",
    "0|Δεν βρέθηκε|63.69",
    "0|Δεν βρέθηκε|63.69",
    "40.32|https://www.skroutz.gr/s/30987137/Playmobil-Ayuma-%CE%A0%CE%B5%CE%B4%CE%AF%CE%BF-%CE%95%CE%BE%CE%AC%CF%83%CE%BA%CE%B7%CF%83%CE%B7%CF%82-%CE%9D%CE%B5%CF%81%CE%B1%CF%8A%CE%B4%CF%8E%CE%BD-%CE%B3%CE%B9%CE%B1-7-12-%CE%B5%CF%84%CF%8E%CE%BD.html|4.51",
    "67.49|https://www.skroutz.gr/s/17939364/Lego-Star-Wars-Action-Battle-Echo-Base-Defence-75241.html|20.73",
    "0|Δεν βρέθηκε|20.73",
    "0|Δεν βρέθηκε|20.73",
    "0|Δεν βρέθηκε|20.73",
    "5.52|https://www.skroutz.gr/s/25276419/50-50-Games-%CE%9A%CE%BF%CF%85%CE%AF%CE%B6-%CE%9C%CF%8D%CE%B8%CE%BF%CF%82-%CE%AE-%CE%A0%CF%81%CE%B1%CE%B3%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CF%8C%CF%84%CE%B7%CF%84%CE%B1.html|11.23",
    "0|Δεν βρέθηκε|11.23",
    "15.9|https://www.skroutz.gr/s/25388271/4M-%CE%A1%CE%BF%CE%BC%CF%80%CF%8C%CF%84-%CE%A7%CF%81%CE%B7%CE%BC%CE%B1%CF%84%CE%BF%CE%BA%CE%B9%CE%B2%CF%8E%CF%84%CE%B9%CE%BF.html|5.72",
    "69.89|https://www.skroutz.gr/s/9643031/Syma-X5HW-%CE%9B%CE%B5%CF%85%CE%BA%CF%8C-Drone-%CE%A0%CE%B1%CE%B9%CE%B4%CE%B9%CE%BA%CF%8C-%CE%BC%CE%B5-%CE%9A%CE%AC%CE%BC%CE%B5%CF%81%CE%B1-0-3MP-Video-HD-Ready-720p-%CE%A7%CE%B5%CE%B9%CF%81%CE%B9%CF%83%CF%84%CE%AE%CF%81%CE%B9%CE%BF-FPV-Flight-%CE%A7%CF%81%CF%8C%CE%BD%CE%BF%CF%82-%CE%A0%CF%84%CE%AE%CF%83%CE%B7%CF%82-7min.html|32.89",
    "8.49|https://www.skroutz.gr/s/13400521/Esperanza-Marine-%CE%91%CF%83%CF%8D%CF%81%CE%BC%CE%B1%CF%84%CE%BF-Gamepad-%CE%B3%CE%B9%CE%B1-PS3-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF.html|3.53",
    "0|Δεν βρέθηκε|3.53",
    "0|Δεν βρέθηκε|3.53",
    "25.21|https://www.skroutz.gr/s/14093538/Surviving-Mars-PS4-Game.html|21.06",
    "17.5|https://www.skroutz.gr/s/22311317/Oninaki-PS4-Game.html|1.71",
    "0|Δεν βρέθηκε|1.71",
    "4.98|https://www.skroutz.gr/s/21041729/Dvd-%CE%93%CE%BF%CF%85%CE%B9%CE%BD%CE%B9-%CE%A4%CE%BF-%CE%91%CF%81%CE%BA%CE%BF%CF%85%CE%B4%CE%B1%CE%BA%CE%B9-%CE%A7%CE%B1%CF%81%CE%BF%CF%85%CE%BC%CE%B5%CE%BD%CE%B5%CF%82-%CE%A3%CF%84%CE%B9%CE%B3%CE%BC%CE%B5%CF%82-0006492.html|35.74",
    "0|Δεν βρέθηκε|35.74",
    "0|Δεν βρέθηκε|35.74",
    "0|Δεν βρέθηκε|35.74",
    "0|Δεν βρέθηκε|35.74",
    "0|Δεν βρέθηκε|35.74",
    "188.7|https://www.skroutz.gr/s/20926854/SMSL-%CE%A4%CE%B5%CE%BB%CE%B9%CE%BA%CF%8C%CF%82-%CE%95%CE%BD%CE%B9%CF%83%CF%87%CF%85%CF%84%CE%AE%CF%82-Hi-Fi-Stereo-Q5-Pro-45W-4%CE%A9-25W-8%CE%A9-%CE%9C%CE%B1%CF%8D%CF%81%CE%BF%CF%82.html|98.15",
    "0|Δεν βρέθηκε|98.15",
    "0|Δεν βρέθηκε|98.15",
    "0|Δεν βρέθηκε|98.15",
    "12.6|https://www.skroutz.gr/s/20443571/%CE%9C%CF%80%CE%AD%CF%81%CE%B5%CE%BD-%CE%BA%CE%B1%CE%B9-%CE%9B%CE%BF%CF%8D%CE%B8%CE%B9%CE%B5%CE%BD.html|-4.44",
    "14.85|https://www.skroutz.gr/s/2655009/%CE%A7%CF%8C%CE%BC%CF%80%CE%B9%CF%84.html|-3.23",
    "0|Δεν βρέθηκε|-3.23",
    "0|Δεν βρέθηκε|-3.23",
    "6.34|https://www.skroutz.gr/s/19854380/%CE%A3%CF%87%CE%B5%CE%B4%CE%B9%CE%AC%CE%B6%CF%89-%CE%B2%CE%AE%CE%BC%CE%B1-%CE%B2%CE%AE%CE%BC%CE%B1-%CE%9F%CF%87%CE%AE%CE%BC%CE%B1%CF%84%CE%B1.html|-1.58",
]

let i = 0;
$('.crazy-status-row > td > b').each(function () {
    let [price, link, percentage] = lines[i].split("|");
    if (price === "0") {
        $(this).replaceWith(
            `<div><b>Δεν βρέθηκε αντίστοιχο</b></div>`);
        i++;
    }
    else {
        $(this).replaceWith(
            `<div><b>Τιμή skroutz.gr : ${price}€ </b></div>
            <div><b>Έκπτωση ${percentage}% </b></div>
            <div><a href=${link} target="_blank" class="main">Skroutz Link</a></div>`);
        i++;
    }
});

var elements = document.querySelectorAll('div.row > div.col-lg-1.mb-8.mb-lg-0 > div.mb-3');
// iterate all ellements
// get the innerHTML of each element
// replace the innerHTML euro sign with a empty string
// convert it to a number
// add the number to the total
var total = 0;
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var price = element.innerHTML.replace('€', '');
    price = parseFloat(price);
    total += price;
}
// print the total
console.log(total);

// for (i = 0; i < elements.length; i++) {
//     console.log(elements[i].innerHTML);
// }
var elements = document.querySelectorAll('div.row > div.col-lg-1.mb-8.mb-lg-0 > div.mb-3');

var total = 0;
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var price = element.innerHTML.replace('€', '');
    price = parseFloat(price);
    total += price;
}
console.log(total);
var after_click = 0;
while (true) {
    elements = document.querySelectorAll('div.row > div.col-lg-1.mb-8.mb-lg-0 > div.mb-3');
    var total = 0;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var price = element.innerHTML.replace('€', '');
        price = parseFloat(price);
        total += price;
    }
    console.log(total);
    var before_click = elements.length;
    if (after_click != before_click) {
        after_click = before_click;
        document.querySelector('button#load-more-orders').click();
    }
}
var after_click = 0;
  elements = document.querySelectorAll('div.row > div.col-lg-1.mb-8.mb-lg-0 > div.mb-3');
  var total = 0;
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var price = element.innerHTML.replace('€', '').replace(',','.');
    price = parseFloat(price);
    total += price;
  }
  console.log(total);
  var before_click = elements.length;
  if (after_click != before_click) {
    after_click = before_click;
    $('#load-more-orders').click();
  }
// after_click = []
//     while True:
//         before_click = driver.find_elements(
//             By.XPATH, "//div[@class='col-6 col-lg-2 mb-7 mb-lg-0'][1]/strong"
//         )
//         try:
//             WebDriverWait(driver, 0.5).until(
//                 EC.element_to_be_clickable(
//                     (By.XPATH, "//button[@id='load-more-orders']")
//                 )
//             )
//             if len(after_click) != len(before_click):
//                 after_click = before_click
//                 print("Found more orders")
//                 find("//button[@id='load-more-orders']").click()
//         except Exception:
//             print("No more orders")
//             break

