# Django Vue.js WebPage for HomeSystem control

A web-application plus backend for checking temperature and humidity values of smarthome devices from a database and possibly controlling them, we'll see how far this project goes.

## Installation

## Backend
First create a virtual environment:

```bash
cd backend
python3 -m venv env
source env/bin/activate
```

Install required packages.

```bash
pip install -r requirements.txt
```

Add the necessary data in a .env file, like listed in .env.example.

Run migrations.

```bash
python manage.py makemigrations
python manage.py migrate
```

Start dev server.

```bash
python manage.py runserver
```

## Frontend

Install dependencies:
```bash
# npm
npm install package.json
# yarn
yarn install package.json
# pnpm
pnpm install package.json
```

Run testing:
```bash
# npm
npm run dev
# yarn
yarn run dev
# pnpm
pnpm dev
```

Production:
```bash
# npm
npm run build
# yarn
yarn run build
# pnpm
pnpm build
```