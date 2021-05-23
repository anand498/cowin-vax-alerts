import configparser
import sys,os


current_dir = os.path.realpath(__file__).split('/app_config.py')[0]
config_parser = configparser.ConfigParser()
default_config_file = f"{current_dir}/env.ini"
config_parser.read(default_config_file)

ENV=config_parser.get('APP','ENV')

HOST=config_parser.get(ENV,'HOST')
PORT=int(config_parser.get(ENV,'PORT'))
DEBUGMODE=config_parser.get(ENV,'DEBUGMODE')
EMAIL_HOST = config_parser.get(ENV,'EMAIL_HOST')
EMAIL_HOST_USER = config_parser.get(ENV,'EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config_parser.get(ENV,'EMAIL_HOST_PASSWORD')
EMAIL_PORT = config_parser.get(ENV,'EMAIL_PORT')
DB = config_parser.get(ENV,'DB')
COLLECTION_NAME = config_parser.get(ENV,'COLLECTION_NAME')
COLLECTION_NAME_BKP=config_parser.get(ENV,'COLLECTION_NAME_BKP')
DB_URL = config_parser.get(ENV,'DB_URL')

