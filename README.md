# Django Vue.js WebPage for HomeSystem control

A Webapplication plus backend for checking temperature and humidity values of and controling smarthome devices from a database.

## Installation

For the backend, first create a virtual environment.

```bash
cd backend
python3 -m venv env
source env/bin/activate
```

Install required packages.

```bash
pip install -r requirements.txt
```

Run migrations.

```bash
python manage.py makemigrations
python manage.py migrate
```

Start dev server.

```bash
python manage.py runserver
```
