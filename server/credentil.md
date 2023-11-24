Supabase: AME4GRpIVD4pc1E1

URI: postgresql://postgres:AME4GRpIVD4pc1E1@db.auisxdjkffssskwsybeo.supabase.co:5432/postgres

PAT: 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

npx sequelize-cli db:migrate --env=production

npx sequelize-cli db:seed:all --env=production

<!-- module.exports = {
apps : [{
        name : "job-server",
        script : "./app.js",
        env : {
            NODE_ENV : "production",
            PORT : 80,
            DATABASE_URL : "postgresql://postgres:AME4GRpIVD4pc1E1@db.auisxdjkffssskwsybeo.supabase.co:5432/postgres",
            JWT_SECRET : "rahasiumum",
            GOOGLE_CLIENT_ID : "[YOUR_CLIENT_ID]"
        }
    }]
} -->

https://job-seeker.ariadiandry.tech
https://job-portal-4940d.web.app
https://job-portal-user.web.app

Link client:https://job-portal-user.web.app
Link admin:https://job-portal-4940d.web.app
Link server:https://job-seeker.ariadiandry.tech

Email & password admin:
email: admin1@mail.com
password: admin1

Kak hardim saya mau confirm mengenai tgs saya kak, jadi kalo dilocal untuk client-admin fitur crudnya udah jalan semua kecuali yg editnya, tp waktu saya deploy hanya bisa ke redirect login sama registernya kak, kalo ke jobs sama companynya ngebug kak, jadi saya coment authnya diserver jadi waktu dites dideploy lg udah bisa ke redirect semua page, tp untuk fitur add jobsnya jadi gak jalan kak karna authnya dicomment yang lain normal kecuali yg edit yg emg masih ngebug, mau saya solved tp udah deadline

Terus kalo di client-user udah bisa ngefetch data sama detailnya kak, tp ketika masuk ke page detail terus balik ke page home ngubug kak datanya gak muncul harus direfresh dulu baru datanya muncul lg
