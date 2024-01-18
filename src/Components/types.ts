export interface Brother {
    name: string;
    hometown: string;
    instagram: string;
    interests: string[];
    photoUrl: string;
};

export interface ClassYearGroup {
    [year: string]: Brother[];
};