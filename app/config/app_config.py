import configparser
import sys,os
import boto3

current_dir = os.path.realpath(__file__).split('/app_config.py')[0]
config_parser = configparser.ConfigParser()
default_config_file = f"{current_dir}/env.ini"
config_parser.read(default_config_file)

ENV=config_parser.get('APP','ENV')

REGION=config_parser.get(ENV,'REGION')
dynamodb_resource=boto3.resource('dynamodb',aws_access_key_id=config_parser.get(ENV,'ACCESS_KEY'),aws_secret_access_key=config_parser.get(ENV,'SECRET_KEY'),region_name=REGION)
lambda_client = boto3.client('lambda',aws_access_key_id=config_parser.get(ENV,'ACCESS_KEY'),aws_secret_access_key=config_parser.get(ENV,'SECRET_KEY'),region_name=REGION)