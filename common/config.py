############# STATIC RESOURCES ###########
from os import getcwd
cwd = getcwd()

GOOGLE_TOKEN_PATH = cwd + r"\common\credentials\token.pickle"
GOOGLE_CREDENTIALS_PATH = cwd + r"\common\credentials\credentials.json"
ARGOS_STOCK_PATH = cwd + r"\veeqoimporters\vendors\argos-stock.csv"


############# URLS ###########

VEEQO_APP_ORDERS_URL = "https://app.veeqo.com/orders"
VEEQO_API_ORDERS_URL = "https://api.veeqo.com/orders"
VEEQO_API_PRODUCTS_URL = "https://api.veeqo.com/products"
POSTCODER_URL = "https://ws.postcoder.com"

RANGE_PORTAL_LOGIN_URL = "https://supplier.rstore.com/login.php"
RANGE_PORTAL_ORDERS_URL = "https://supplier.rstore.com/suppliers.mod/api/order.load.php"
RANGE_PORTAL_STOCK_URL = "https://supplier.rstore.com/suppliers.mod/api/stock.load.php?supplier=5778"


############# CONSTANTS ###########

TAX_RATE = 0.2

DEFAULT_DELIVERY_METHOD_ID = "153707"

GOOGLE_SHEETS_SCOPES = ['https://www.googleapis.com/auth/spreadsheets']


############# VEEQO VENDOR IDS ###########

BANDQ_CHANNEL_ID = "48307"
ARGOS_CHANNEL_ID = "46116"
RANGE_CHANNEL_ID = "55732"
WAYFAIR_CHANNEL_ID = "53236"
HOMEBASE_CHANNEL_ID = "46687"
JTF_CHANNEL_ID = "54699"
TRAVISPERKINS_CHANNEL_ID = "55175"
ROBERT_DYAS_CHANNEL_ID = "58735"
SHOP_DIRECT_CHANNEL_ID = "70067"

HORNBACH_CHANNEL_ID = "TO GET"

BANDQ_BILLING_ID = "23657440"
BANDQ_IRELAND_BILLING_ID = "23677719"
BANDQ_JERSEY_BILLING_ID = "23677785"
BANDQ_GUERNSEY_BILLING_ID = "23677822"
ARGOS_BILLING_ID = "15223361"
RANGE_BILLING_ID = "24689412"
WAYFAIR_BILLING_ID = "20978082"
HOMEBASE_BILLING_ID = "12604329"
ROBERT_DYAS_BILLING_ID = "40554088"
SHOP_DIRECT_BILLING_ID = "13725775"


############# GOOGLE SHEETS VENDOR INFO ###########

BANDQ_SPREADSHEET_ID = "1umWNEdhu2Snc61VXVqcFMWUDDb0F-fEBlGQoVInwSkg"
RANGE_SPREADSHEET_ID = "1uba_XRyDOz0ePiN_R4ju9Ni0oLxFGnZ2Jd-8L_Ns7bE"
WAYFAIR_SPREADSHEET_ID = "1POhkxybsCHOpEbFlkV0WqVzyVvHh5yETjfQV0p9onNg"
HOMEBASE_SPREADSHEET_ID = "1gZ6JukEPpQkt9sdEyemlzXFawXxUQssr2WWemlLm2U4"
JTF_SPREADSHEET_ID = "1AFSYTWD79LZdGrpwbkUF5sZVTDvP4eYf838xffw-geQ"
TRAVISPERKINS_SPREADSHEET_ID = "1qeNHHjKFi9b-XZBaQ_zzgxdprKvBiAm1rhXwJrwPokw"
SHOP_DIRECT_SPREADSHEET_ID = "1gUU4RqsU2YKpzEcbH8h9Uao6sjAklylyxs2D51F-RWU"
HORNBACH_SPREADSHEET_ID = "1Smo5GYQ1BIbiLS3AQczz9UzotLEKEFPdScdRfPMMqgo"
ROBERT_DYAS_SPREADSHEET_ID = "13SvjDxzCqhUGjyxEBoPnlewrZN79kbk64-3-aNlwJ5k"

BANDQ_SPREADSHEET_NAME = "504161 DSV (GSX tradeweb)"
RANGE_SPREADSHEET_NAME = "98194 - The Range"
WAYFAIR_SPREADSHEET_NAME = "Sheet1"
HOMEBASE_SPREADSHEET_NAME = "Statement"
JTF_SPREADSHEET_NAME = "C559 - JTF Wholesale"
TRAVISPERKINS_SPREADSHEET_NAME = "Sheet1"
SHOP_DIRECT_SPREADSHEET_NAME = "Shop Direct"
HORNBACH_SPREADSHEET_NAME = "HORNBACH"
ROBERT_DYAS_SPREADSHEET_NAME = "38091 Drop Ship"

BANDQ_ORDER_NO_COLUMN = "D"
RANGE_ORDER_NO_COLUMN = "D"
WAYFAIR_ORDER_NO_COLUMN = "B"
HOMEBASE_ORDER_NO_COLUMN = "F"
JTF_ORDER_NO_COLUMN = "D"
TRAVISPERKINS_ORDER_NO_COLUMN = "E"
SHOP_DIRECT_ORDER_NO_COLUMN = "D"
HORNBACH_ORDER_NO_COLUMN = "E"
ROBERT_DYAS_ORDER_NO_COLUMN = "F"
