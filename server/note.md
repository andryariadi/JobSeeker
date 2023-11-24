npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,role:string,phoneNumber:string,addres:string

npx sequelize-cli model:generate --name Company --attributes name:string,companyLogo:string,location:string,email:string,description:string

npx sequelize-cli model:generate --name Job --attributes title:string,description:string,companyId:integer,authorId:integer,jobType:string

npx sequelize-cli model:generate --name Skill --attributes jobId:integer,name:string,level:string
