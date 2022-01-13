
export interface IThumbnail {
    extension: string;
    path: string;
}

export interface IBase {
    id: number;
    title: string;
    description: string;
}

export interface IHeroDto extends IBase {
    name: string;
    thumbnail: IThumbnail;
}

export interface IHero extends IBase {
    urlImagem: string;
}

export class Hero implements IHero {
    constructor(
        public urlImagem = '',
        public id = 0,
        public title = '',
        public description = '') { }

}