# MealMentor

ChatGPT API Hackathon Project hosted by DonTheDeveloper.

## About

This project is a Cooking App featuring food and chatgpt apis to gather recipes, generate instructions/ingredients and save to a user library; try it out using a feature full demo version with one click. 

Built in one month as part of a hackathon from March to April 2023.

## Demo

This project is deployed directly onto Vercel. View here: [mymealmentor.vercel.app](https://mymealmentor.vercel.app/)

## Technologies

- TailwindCSS
- Typescript
- React
- Nextjs
- TRPC
- PlanetScale (MySQL)
- Auth0
- ChatGPT API
- Spoonacular API
- Vercel (hosting)

## How to deploy locally

Follow the steps below:

1. Download from this repository.
2. Install each dependency.

```typescript

npm install

```
 
3. Get all required keys setup in a .env file.

```typescript

AUTH0_SECRET="key_goes_here"
AUTH0_BASE_URL="url_goes_here"
AUTH0_ISSUER_BASE_URL="auth0_url_goes_here"
AUTH0_CLIENT_ID="clientid_goes_here"
AUTH0_CLIENT_SECRET="key_goes_here"
OPENAI_API_KEY="key_goes_here"
DATABASE_URL='url_goes_here'
FOOD_APIKEY='key_goes_here'

```

4. Run locally
   
```typescript

 npm run dev
 
```

5. Enjoy!
