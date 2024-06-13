<p align="center">
  <a href="https://www.simplytechnologies.net" target="blank"><img src="https://images.squarespace-cdn.com/content/v1/64d4eb9425b51d06d1fce066/5d3320b1-ffad-43b9-a655-eee1a65d31de/SIMPLY_Logo.png?format=1500w" width="200" alt="simplytechnologies" /></a>
</p>

## Description

Test task, spent 8-10 hours for complete.

## Installation

```bash
$ 1) yarn install
$ 2) setup configuration, example includet into project (.env.example)
$ 3) run migrations
$ 4) run seedings
```

## Useful cli commands

```bash
# create new migration
$ yarn sequelize migration:create --name=filename

# create seed
$ yarn sequelize seed:create --name=work_fields_initial_data

# Run migration
$ yarn migrate

# Run migration rollback
$ yarn rollback

# Run seeders to insert initial data
$ yarn seed:all

# Run undo seeders to delete initial data
$ yarn seed:undo:all

```
