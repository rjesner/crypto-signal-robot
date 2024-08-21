# Crypto Signal Robot

Crypto Signal Robot is a project made by student and programmer Rodrigo Jesner as a work for the final project and thesis of the Computer Science program of Universidade Cruzeiro do Sul.

## Requisites

- Windows 10
- Pycharm 2023.3.2 | Professional Edition
- Python 3.12
- Node.js (npm)
- MariaDB 10.8.2

## Usage


```bash
$> rm -rf app/static/*
$> cd app/frontend
$> rm -rf build
$> npm run build
$> cd ../..
$> python run.py
```

#### Shortcut

```bash
$> run.bat
```


## Database

To configure the MariaDB database in Windows, first install docker-cli and docker-machine using Chocolatey:

```bash
$> choco install docker-cli
$> choco install docker-machine
$> choco install virtualbox
```

Then create a virtual machine for Docker using:

```bash
$> docker-machine create --driver virtualbox DOCKER-MACHINE
```

Following the instructions, 'docker' commands such as 'docker ps' will be available. Install MariaDB and phpMyAdmin (if you wish):

```bash
$> docker pull mariadb:10.8.2
$> docker pull phpmyadmin/phpmyadmin:latest
$> docker run -p 3306:3306 --name mariadb-container -e MYSQL_ROOT_PASSWORD=pass123 mariadb:10.8.2
$> docker run -p 7777:80 --name phpmyadmin-container -d --link mariadb-container:db phpmyadmin/phpmyadmin
```

Then, create the tradingbot database with the following commands.

```bash
$> docker exec -it mariadb-container bash
$> mysql --user=root --password=pass123
$> create database tradingbot default character set utf8;
```
