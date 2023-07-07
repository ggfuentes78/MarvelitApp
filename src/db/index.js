import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase("marvelitAPP.db");

export const init = async () => {

    db.transaction(async (tx) => {
        try{
        // Crea la tabla favCharacters si no existe
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS favCharacters (id INTEGER NOT NULL, name TEXT NOT NULL, description TEXT, comicsCollectionURI TEXT, resourceURI TEXT, thumbnailPath TEXT, thumbnailExtension TEXT )'
        );    
        // Crea la tabla UserInfo si no existe
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS userInfo (id INTEGER NOT NULL, userName TEXT, userImg text )'
        );
    
        tx.executeSql('SELECT * FROM userInfo',
            [],
            (_, {rows})=>{
                if (rows.length== 0) {
                    Promise.all([
                        tx.executeSql('INSERT INTO userInfo (id, userName) VALUES (?, ?)', [1, 'Usuario'])
                    ]);
                }
            }
            );
      }catch(err){
        console.log("EEEEEEE", err)
      }finally{

      }});
    };
    


export const fetchFavCharacters =()=>{
    const itemsArray = [];
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM favCharacters',
            [],
            (_, {rows})=>resolve(rows),
            (_, { rows }) => {
                for (let i = 0; i < rows.length; i++) {
                    itemsArray.push(rows.item(i));
                }
                console.log("ITEM ARRAY", itemsArray);
                return itemsArray
            },
            (_, err) =>reject(err))
        })
    })
    console.log("FETCHED CHARS", promise)
    return promise
}

export const fetchUser =(id)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql('SELECT * FROM userInfo WHERE id=?',
            [id],
            (_, {result}) => {console.log("RES USER", result.length);
            resolve(result)},
            (_, err) =>{console.log("ERR USER", err);
            reject(err)})
        })
    })
    return promise
}

export const updateUser=(image)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql('UPDATE userInfo SET userImg = (?) WHERE id=1',
            [image],
            (_, result) => {
                if (result.rowsAffected > 0) {
                    console.log('Item updated successfully');
                }else{console.log("QUE PACHO???")}
                resolve(result)
            },
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