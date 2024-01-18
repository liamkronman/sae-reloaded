export interface Brother {
    name: string;
    hometown: string;
    instagram: string;
    interests: string[];
    photoUrl: string;
    quote: string;
};

export interface ClassYearGroup {
    [year: string]: Brother[];
};