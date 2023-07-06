import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase("marvelapppp.db");

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
        tx.executeSql("create table if not exists favCharacters (id integer not null, name text not null, description text not null, comicsCollectionURI text, resourceURI text, thumbnailPath text not null, thumbnailExtension text not null)",
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
    const itemsArray = [];
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM favCharacters',
            [],
            (_, {rows})=>resolve(rows),
            // (_, { rows }) => {
            //     for (let i = 0; i < rows.length; i++) {
            //         itemsArray.push(rows.item(i));
            //     }
            //     console.log("ITEM ARRAY", itemsArray);
            //     return itemsArray
            // },
            (_, err) =>reject(err))
        })
    })
    console.log("FETCHED CHARS", promise)
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

export const addFavChar=(item)=>{
    console.log("ITEM:", item)
    const promise = new Promise ((resolve, reject)=>{
        db.transaction((tx) =>{
            tx.executeSql('INSERT INTO favCharacters (id, name, description, comicsCollectionURI, resourceURI, thumbnailPath, thumbnailExtension) VALUES(?, ?, ?, ?,?, ?, ?)',
            [item.id, item.name, item.description, item.comics.collectionURI, item.resourceURI, item.thumbnail.path, item.thumbnail.extension],
            (_, result) => {
                if (result.rowsAffected > 0) {
                    console.log('Item inserted successfully');
                }
                resolve(result)
            },
            (_, err) =>reject(err))
        })
    })
    console.log("PROMMM", promise)
    return promise
}

export const rmvFavChar=(id)=>{
    const promise = new Promise ((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('DELETE FROM favCharacters WHERE id=?', 
            [id],
            (_, result)=> {
                console.log(`Deleted ${result.rowsAffected}`)
                resolve(result)
            },
            (_, err)=>reject(err))
        })
    })
    return promise
}