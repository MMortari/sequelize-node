# Sequelize
https://www.youtube.com/watch?v=Fbu7z5dXcRs

## Comandos

### Database
Criar
```
$ yarn sequelize db:create
```

### Migration
Criar
```
$ yarn sequelize migration:create --name=<O-QUE-A-MIGRATION-FARÁ>
```
Executar - Executará todas as migrations necessárias
```
$ yarn sequelize db:migrate
```
Volta a última migration
```
$ yarn sequelize db:migrate:undo
```