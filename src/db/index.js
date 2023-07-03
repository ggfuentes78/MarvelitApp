import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("favs.db");

export const init = () => {
    // const promiseUser= new Promise((resolve, reject) =>{
    //     db.transaction(tx=>{
    //     tx.executeSql("create table if not exists userInfo (id integer primary key not null, userName text not null, userImg text )",
    //     [1, 'Usuario', ''],
    //     ()=> {
    //         resolve();
    //     },
    //     (_, err) =>{
    //         reject(err)
    //     }
    //     )})
    // }) 
    const promise= new Promise((resolve, reject) =>{
        db.transaction(tx=>{
        tx.executeSql("create table if not exists favs (id text not null, name text not null, image integer not null)",
        [],
        ()=> {
            resolve();
        },
        (_, err) =>{
            reject(err)
        }
        )})
    })
    // const promiseFavsTeams= new Promise((resolve, reject) =>{
    //     db.transaction(tx=>{
    //     tx.executeSql("create table if not exists favTeams (id integer primary key not null, teamId integer not null)",
    //     [],
    //     ()=> {
    //         resolve();
    //     },
    //     (_, err) =>{
    //         reject(err)
    //     }
    //     )})
    // })
    // const promiseFavsComics= new Promise((resolve, reject) =>{
    //     db.transaction(tx=>{
    //     tx.executeSql("create table if not exists favComics (id integer primary key not null, comicId integer not null)",
    //     [],
    //     ()=> {
    //         resolve();
    //     },
    //     (_, err) =>{
    //         reject(err)
    //     }
    //     )})
    // })
    return (promise)
};

// export const createUser=()=>{
//     const promise=new Promise((resolve, reject)=>{
//         db.transaction(tx=>{
//             tx.executeSql("insert into userInfo (userName) VALUES (?)",
//             ["Usuario"],
//             (_, result)=>resolve(result),
//             (_, err) => reject(err)            
//             )
//         })
//     })
//     return promise
// }

export const fetchFavCharacters =()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql('SELECT * FROM favs',
            [],
            (_, result) => resolve(result),
            (_, err) =>reject(err))
        })
    })
    return promise
}

export const fetchUser =()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql('SELECT * FROM userInfo',
            [],
            (_, result) => resolve(result),
            (_, err) =>reject(err))
        })
    })
    return promise
}

export const updateUser=(image)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql('update (userImg) from userInfo VALUES(?) WHERE (id=1)'
            [image],
            (_, result) => resolve(result),
            (_, err) =>reject(err))
        })
    })
    return promise
}

export const addFavChar=(id, name, image)=>{
    const promise = new Promise ((resolve, reject)=>{
        db.transaction(tx =>{
            tx.executeSql('INSERT INTO favs (id, name, image) VALUES(?, ?, ?)'
            [id, name, image],
            (_, result) => resolve(result),
            (_, err) =>reject(err))
        })
    })
    console.log("PROMMM", promise)
    return promise
}