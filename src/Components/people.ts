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
        clubs: item["MIT Activities/Clubs you're a member of (optional)"].split(', ').filter(club => club.trim().length > 0),
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

// Sort each class year's brothers by last name
(Object.keys(classYears) as Array<keyof ClassYearGroup>).forEach(year => {
    classYears[year].sort((a, b) => {
        const aLastName = a.name.split(' ').pop()?.toLowerCase() || '';
        const bLastName = b.name.split(' ').pop()?.toLowerCase() || '';
        return aLastName.localeCompare(bLastName);
    });
});

export default classYears;