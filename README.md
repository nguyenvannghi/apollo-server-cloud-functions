# fireabse-graphql - GraphQL on Cloud Functions for Firebase
## Demo: https://kaiju-9f6ba.firebaseapp.com/
### Endpoint: https://kaiju-9f6ba.firebaseapp.com/graphql

**Step1**: Add the Firebase Admin SDK to Your Server:
```
  {
    "type": "",
    "project_id": "",
    "private_key_id": "",
    "private_key": "",
    "client_email": "",
    "client_id": "",
    "auth_uri": "",
    "token_uri": "",
    "auth_provider_x509_cert_url": "",
    "client_x509_cert_url": ""
  }
```
**Step2**: initializeApp: 
```
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "YOUR_DATABASE_URL"
  });
```
**Step3**: Run: ```firebase serve```

**Step4**: Enjoy!

### Example	
#### Query:
```
query hotdogs{
  hotdogs{
    isKosher
    location
    name
    style
    website
  }
}
```
#### Mutation - add:
```
mutation addHotDog(
  $isKosher: Boolean
  $location: String
  $name: String
  $style: String
  $website: String
) {
  addHotDog(
    isKosher: $isKosher,
    location: $location,
    name: $name,
    style: $style,
    website: $website
  ) {
    isKosher
    location
    name
  }
}

```
#### Mutation - update:
```
mutation updateHotDog(
  $token: String!,
  $isKosher: Boolean
  $location: String
  $name: String
  $style: String
  $website: String
) {
  updateHotDog(
    token: $token
    isKosher: $isKosher
    location: $location
    name: $name
    style: $style
    website: $website
  ) {
    isKosher
    location
    name
  }
}
```
#### Mutation - delete:
```
mutation deleteHotDog($token: String!) {
  deleteHotDog(token: $token)
}

```
