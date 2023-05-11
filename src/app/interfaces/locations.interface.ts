export interface Locations {
    cityData: City[];
}

export interface City {
    name:    string;
    lat:     number;
    lon:     number;
    country: string;
    state:   string;
}

export interface LocObj{
    text: string,
    color: string
}

export interface weatherCity {
    lat:     number;
    lon:     number;
    country: string;
    state:   string;
    temperature: number;
    currentWeatherII: IconImg;
    name:    string;
}

export interface CityWeather {
    coord:      Coord;
    weather:    Weather[];
    base:       string;
    main:       Main;
    visibility: number;
    wind:       Wind;
    clouds:     Clouds;
    dt:         number;
    sys:        Sys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
    sea_level:  number;
    grnd_level: number;
}

export interface Weather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}

export interface Sys {
    sunrise: number;
    sunset:  number;
}

export interface Clouds {
    all: number;
}

export interface IconImg {
    icon: string,
    image: string
}

export interface NewsCity {
    city: City,
    data: Response
}

export interface NewsResponse {
    status:    string;
    copyright: string;
    response:  Response;
}

export interface Response {
    docs: Doc[];
    meta: Meta;
}

export interface Doc {
    abstract:         string;
    web_url:          string;
    snippet:          string;
    lead_paragraph:   string;
    print_section?:   string;
    print_page?:      string;
    source:           Source;
    multimedia:       Multimedia[];
    headline:         Headline;
    keywords:         Keyword[];
    pub_date:         string;
    document_type:    DocumentType;
    news_desk:        NewsDesk;
    section_name:     string;
    byline:           Byline;
    type_of_material: TypeOfMaterial;
    _id:              string;
    word_count:       number;
    uri:              string;
}

export interface Byline {
    original:     string;
    person:       Person[];
    organization: null;
}

export interface Person {
    firstname:    string;
    middlename:   null;
    lastname:     string;
    qualifier:    null;
    title:        null;
    role:         string;
    organization: string;
    rank:         number;
}

export enum DocumentType {
    Article = "article",
}

export interface Headline {
    main:           string;
    kicker:         null | string;
    content_kicker: null;
    print_headline: null | string;
    name:           null;
    seo:            null;
    sub:            null;
}

export interface Keyword {
    name:  Name;
    value: string;
    rank:  number;
    major: Major;
}

export enum Major {
    N = "N",
}

export enum Name {
    Glocations = "glocations",
    Organizations = "organizations",
    Persons = "persons",
    Subject = "subject",
}

export interface Multimedia {
    rank:      number;
    subtype:   string;
    caption:   null;
    credit:    null;
    type:      Type;
    url:       string;
    height:    number;
    width:     number;
    legacy:    Legacy;
    subType:   string;
    crop_name: string;
}

export interface Legacy {
    widewidth?:       number;
    wideheight?:      number;
    wide?:            string;
    xlarge?:          string;
    xlargewidth?:     number;
    xlargeheight?:    number;
    thumbnail?:       string;
    thumbnailwidth?:  number;
    thumbnailheight?: number;
}

export enum Type {
    Image = "image",
}

export enum NewsDesk {
    Culture = "Culture",
    Empty = "",
    None = "None",
}

export enum Source {
    TheNewYorkTimes = "The New York Times",
}

export enum TypeOfMaterial {
    News = "News",
}

export interface Meta {
    hits:   number;
    offset: number;
    time:   number;
}
