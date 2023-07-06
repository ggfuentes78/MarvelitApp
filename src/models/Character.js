class Character {
    constructor(item){
        this.id = item.id;
        this.name= item.name;
        this.description= item.description;
        this.comics.collectionURI= item.comics.collectionURI;
        this.resourceURI= item.resourceURI;
        this.thumbnail.path= item.thumbnail.path;
        this.thumbnail.extension= item.thumbnail.extension;
    };
}

export default Character;