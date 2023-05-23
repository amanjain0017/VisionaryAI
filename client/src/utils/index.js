import FileSaver from 'file-saver'

import { suggestMePrompts } from '../constants';

export function getRandomPrompt( prompt ){
    const randomIndex = Math.floor( Math.random() * suggestMePrompts.length );
    const randomPrompt = suggestMePrompts[ randomIndex];

    if ( randomPrompt === prompt )        return getRandomPrompt(prompt);
    
    return randomPrompt;
}

export async function downloadImage (_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpeg`);
}


