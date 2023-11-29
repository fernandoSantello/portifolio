import json
from decimal import Decimal
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume-challenge')

def lambda_handler(event, context):
    try:
        response = table.get_item(Key={'id': '1'})
        if 'Item' in response:
            views_decimal = response['Item'].get('views', Decimal('0'))
            views = int(views_decimal) + 1
            table.put_item(Item={'id': '1', 'views': Decimal(views)})
            
            return {
                'statusCode': 200,
                'body': json.dumps({'views': views})
            }
        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Item not found'})
            }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
