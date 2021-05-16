from pymongo import MongoClient
import ssl

DB="cowin_notify"
COLLECTION_NAME="beneficiary"
client = MongoClient("mongodb+srv://cowinuser:ctVrOatUQFpYoasy@cluster0.ggvx1.mongodb.net/cowin_notify?retryWrites=true&w=majority",ssl_cert_reqs=ssl.CERT_NONE)
