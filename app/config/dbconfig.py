from pymongo import MongoClient
import ssl,os

DB=os.environ['DATABASE_NAME']
COLLECTION_NAME=os.environ['COLLECTION_NAME']
client = MongoClient(os.environ['DB_URL'],ssl_cert_reqs=ssl.CERT_NONE)
