import { ClassYearGroup, Brother } from './types';
import jsonData from '../Data/sae_responses.json';

const classYears: ClassYearGroup = jsonData.reduce((acc: ClassYearGroup, item) => {
    const instagramHandle = item["INSTAGRAM handle (if u rly don't have one put N/A). Example: \"@liamkronman"];
    const formattedInstagramHandle = instagramHandle.startsWith('@') ? instagramHandle.slice(1) : instagramHandle;

    const brother: Brother = {
        name: item["Full Name"],
        hometown: item["Hometown (Ex: New York, NY)"],
        instagram: formattedInstagramHandle,
        interests: item["Interests (optional)"].split(', ').filter(interest => interest.trim().length > 0),
        photoUrl: item["New Photo (optional)"],
        quote: item["Quote (include attribution if not original, even if another brother said it) (optional)"] || ''
    };

    const year = item["Year"].toString();
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(brother);

    return acc;
}, {});

export default classYears;