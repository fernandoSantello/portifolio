import pytest
from moto import mock_dynamodb
import lambda_cloud_resume_challenge_api  # Replace with your actual Lambda function module
from lambda_cloud_resume_challenge_api import lambda_handler  # Assuming your function is in this module
import boto3
from decimal import Decimal
import json

@mock_dynamodb
def test_lambda_handler():
    # Set up DynamoDB mock
    dynamodb = boto3.resource('dynamodb', region_name='sa-east-1')
    table = dynamodb.create_table(
        TableName='cloud-resume-challenge',
        KeySchema=[
            {'AttributeName': 'id', 'KeyType': 'HASH'}
        ],
        AttributeDefinitions=[
            {'AttributeName': 'id', 'AttributeType': 'S'}
        ]
    )
    table.wait_until_exists()

    # Insert mock data
    table.put_item(Item={'id': '1', 'views': Decimal('0')})

    # Define the mock event
    mock_event = {
        # Your event structure here
    }

    # Test the Lambda handler for an existing item
    response = lambda_handler(mock_event, None)
    assert response['statusCode'] == 200
    body = json.loads(response['body'])
    assert body['views'] == 1

    # Test for a non-existing item
    response = lambda_handler({'id': '2'}, None)
    assert response['statusCode'] == 404

    # Optionally, you can add more tests to simulate and handle exceptions

# Run the test
if __name__ == "__main__":
    test_lambda_handler()
