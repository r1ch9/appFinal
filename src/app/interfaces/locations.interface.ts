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